import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY is missing. Please set it in the Secrets panel.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Health Check API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Translation API endpoint using Gemini
app.post("/api/translate", async (req, res) => {
  const { spanish, category } = req.body;

  if (!spanish) {
    return res.status(400).json({ error: "El campo 'spanish' es requerido." });
  }

  try {
    const ai = getGeminiClient();
    
    const prompt = `Traduce la siguiente frase en español para atención al cliente en una tienda de ropa y lencería femenina al ruso (forma cortés, usando "Вы" si aplica, gramática perfecta y natural). Además, genera una transliteración fonética clara adaptada para hispanohablantes (cómo se leería/pronunciaría en español, marcando las tildes de entonación si es posible, por ejemplo "Zdrástvuyte").
Frase a traducir: "${spanish}"
Categoría sugerida: "${category || 'General'}"`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "Eres un traductor experto de español a ruso especializado en moda, lencería femenina y atención al cliente de lujo. Tu respuesta debe ser un objeto JSON estructurado con los campos exactos: 'russian' (la traducción en cirílico) y 'transliteration' (la pronunciación fonética simplificada en español).",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            russian: {
              type: Type.STRING,
              description: "La traducción exacta al idioma ruso usando alfabeto cirílico."
            },
            transliteration: {
              type: Type.STRING,
              description: "La pronunciación fonética clara de la frase escrita para hispanohablantes."
            }
          },
          required: ["russian", "transliteration"]
        }
      }
    });

    const text = response.text?.trim() || "{}";
    const result = JSON.parse(text);
    
    return res.json({
      russian: result.russian || "",
      transliteration: result.transliteration || ""
    });

  } catch (error: any) {
    console.error("Error en la traducción de Gemini:", error);
    // Fallback translation if API key is not configured or fails
    const mockTranslations: { [key: string]: { russian: string, transliteration: string } } = {
      "hola": { russian: "Здравствуйте", transliteration: "Zdrástvuyte" },
      "gracias": { russian: "Спасибо", transliteration: "Spasíbo" },
      "adiós": { russian: "До свидания", transliteration: "Do svidániya" },
    };

    const norm = spanish.toLowerCase().trim();
    if (mockTranslations[norm]) {
      return res.json({
        russian: mockTranslations[norm].russian,
        transliteration: mockTranslations[norm].transliteration,
        note: "Uso de traducción local de cortesía (Gemini no configurado)"
      });
    }

    // Return a generic Cyrillic with transliteration warning so the app works even offline
    return res.status(200).json({
      russian: "[Traducción pendiente]",
      transliteration: "[Establece tu API Key para traducir con Inteligencia Artificial]",
      error: error.message || "Error al conectar con el servidor de traducción."
    });
  }
});

// Setup Vite middleware in Development or serve static files in Production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
