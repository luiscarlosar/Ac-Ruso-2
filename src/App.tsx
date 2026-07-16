import React, { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  Play, 
  Square, 
  Search, 
  PlusCircle, 
  Code, 
  Copy, 
  Check, 
  BookOpen, 
  Heart, 
  Trash2, 
  HelpCircle, 
  Folder, 
  FileCode, 
  Languages, 
  RefreshCw, 
  Volume2,
  ChevronRight,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { CATEGORIES, INITIAL_PHRASES, Phrase } from "./data/phrases";
import { 
  generateAndroidManifest, 
  generateStringsXml, 
  generateMainActivityJava, 
  generatePhraseJava, 
  generatePhraseAdapterJava, 
  generateActivityMainXml, 
  generateItemPhraseXml,
  generateColorsXml,
  generateStylesXml
} from "./data/androidFiles";

export default function App() {
  // State for all phrases (combining initial static and user custom ones)
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [customPhrases, setCustomPhrases] = useState<Phrase[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  
  // Navigation & Filtering
  const [activeTab, setActiveTab] = useState<"explorer" | "add" | "aide">("explorer");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showOnlyFavorites, setShowOnlyFavorites] = useState<boolean>(false);
  
  // TTS State
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState<string>("");
  const [speechRate, setSpeechRate] = useState<number>(0.85);
  
  // Load Web Speech API Russian voices
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const loadVoices = () => {
        const allVoices = window.speechSynthesis.getVoices();
        const ruVoices = allVoices.filter(v => v.lang.startsWith("ru") || v.lang.toLowerCase().includes("russian"));
        setVoices(ruVoices);
        
        // Cargar voz por defecto de localStorage o la primera voz rusa disponible
        const savedVoice = localStorage.getItem("ac_ruso_selected_voice");
        if (savedVoice && ruVoices.some(v => v.name === savedVoice)) {
          setSelectedVoiceName(savedVoice);
        } else if (ruVoices.length > 0) {
          setSelectedVoiceName(ruVoices[0].name);
        }
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Save selected voice to localStorage
  const handleVoiceChange = (voiceName: string) => {
    setSelectedVoiceName(voiceName);
    localStorage.setItem("ac_ruso_selected_voice", voiceName);
    showToast("Voz en ruso configurada 🗣️");
  };
  
  // Copy success banner/toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // Add new phrase form state
  const [newSpanish, setNewSpanish] = useState<string>("");
  const [newRussian, setNewRussian] = useState<string>("");
  const [newTransliteration, setNewTransliteration] = useState<string>("");
  const [newCategory, setNewCategory] = useState<string>("Saludos y Bienvenida");
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [translationError, setTranslationError] = useState<string | null>(null);
  
  // AIDE File Navigator state
  const [selectedAndroidFile, setSelectedAndroidFile] = useState<string>("strings.xml");

  // Load phrases, custom phrases and favorites from LocalStorage on mount
  useEffect(() => {
    const storedCustom = localStorage.getItem("ac_ruso_custom_phrases");
    const storedFavorites = localStorage.getItem("ac_ruso_favorites");
    
    let loadedCustom: Phrase[] = [];
    if (storedCustom) {
      try {
        loadedCustom = JSON.parse(storedCustom);
        setCustomPhrases(loadedCustom);
      } catch (e) {
        console.error("Error al cargar frases personalizadas", e);
      }
    }
    
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (e) {
        console.error("Error al cargar favoritos", e);
      }
    }
    
    setPhrases([...INITIAL_PHRASES, ...loadedCustom]);
  }, []);

  // Update total phrases array when custom phrases change
  useEffect(() => {
    setPhrases([...INITIAL_PHRASES, ...customPhrases]);
  }, [customPhrases]);

  // Helper to show custom temporary toasts
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Toggle Favorite
  const toggleFavorite = (id: string) => {
    let updated: string[];
    if (favorites.includes(id)) {
      updated = favorites.filter(favId => favId !== id);
      showToast("Eliminado de favoritos");
    } else {
      updated = [...favorites, id];
      showToast("Añadido a favoritos ❤️");
    }
    setFavorites(updated);
    localStorage.setItem("ac_ruso_favorites", JSON.stringify(updated));
  };

  // Speak Russian text using Web Speech API TTS
  const speakRussian = (id: string, text: string) => {
    if (!("speechSynthesis" in window)) {
      showToast("❌ TTS no soportado en este navegador");
      return;
    }

    // If currently speaking the same phrase, stop it
    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    setSpeakingId(id);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ru-RU";
    utterance.rate = speechRate; 

    // Find and set the user selected Russian voice
    const availableVoices = window.speechSynthesis.getVoices();
    const chosenVoice = availableVoices.find(v => v.name === selectedVoiceName) || 
                        availableVoices.find(v => v.lang.startsWith("ru"));
    
    if (chosenVoice) {
      utterance.voice = chosenVoice;
    }

    utterance.onend = () => {
      setSpeakingId(null);
    };

    utterance.onerror = () => {
      setSpeakingId(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  // Copy phrase content to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    showToast("¡Texto en ruso copiado! 📋");
  };

  // Request AI Translation from server-side Gemini route
  const handleAiTranslate = async () => {
    if (!newSpanish.trim()) {
      setTranslationError("Por favor, escribe una frase en español primero.");
      return;
    }

    setIsTranslating(true);
    setTranslationError(null);

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ spanish: newSpanish, category: newCategory }),
      });

      const data = await response.json();
      
      if (data.russian && data.transliteration) {
        setNewRussian(data.russian);
        setNewTransliteration(data.transliteration);
        showToast("✨ ¡Traducción por IA completada con éxito!");
      } else if (data.error) {
        setTranslationError(data.error);
      } else {
        setTranslationError("No se obtuvo una respuesta válida de la Inteligencia Artificial.");
      }
    } catch (err: any) {
      console.error(err);
      setTranslationError("Error al conectar con el servidor de traducción. Verifica tu conexión.");
    } finally {
      setIsTranslating(false);
    }
  };

  // Save new custom phrase
  const handleSavePhrase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSpanish.trim() || !newRussian.trim() || !newTransliteration.trim()) {
      showToast("❌ Por favor completa todos los campos.");
      return;
    }

    const newPhrase: Phrase = {
      id: `custom-${Date.now()}`,
      category: newCategory,
      spanish: newSpanish.trim(),
      russian: newRussian.trim(),
      transliteration: newTransliteration.trim(),
      isCustom: true
    };

    const updatedCustom = [...customPhrases, newPhrase];
    setCustomPhrases(updatedCustom);
    localStorage.setItem("ac_ruso_custom_phrases", JSON.stringify(updatedCustom));

    // Reset Form
    setNewSpanish("");
    setNewRussian("");
    setNewTransliteration("");
    showToast("✅ Frase personalizada añadida con éxito");
    setActiveTab("explorer");
    setSelectedCategory(newCategory);
  };

  // Delete custom phrase
  const handleDeleteCustomPhrase = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("¿Estás seguro de que deseas eliminar esta frase personalizada?")) {
      const updatedCustom = customPhrases.filter(p => p.id !== id);
      setCustomPhrases(updatedCustom);
      localStorage.setItem("ac_ruso_custom_phrases", JSON.stringify(updatedCustom));
      setFavorites(favorites.filter(favId => favId !== id));
      showToast("Frase eliminada");
    }
  };

  // Filtered Phrases computation
  const filteredPhrases = phrases.filter(p => {
    // Category filter
    const matchesCategory = selectedCategory === "Todas" || 
      (selectedCategory === "Personalizadas" && p.isCustom) ||
      (selectedCategory === p.category);

    // Search query filter
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      p.spanish.toLowerCase().includes(query) ||
      p.russian.toLowerCase().includes(query) ||
      p.transliteration.toLowerCase().includes(query);

    // Favorites filter
    const matchesFavorites = !showOnlyFavorites || favorites.includes(p.id);

    return matchesCategory && matchesSearch && matchesFavorites;
  });

  // Android AIDE file content mapping
  const getAndroidFileContent = (): string => {
    switch (selectedAndroidFile) {
      case "AndroidManifest.xml":
        return generateAndroidManifest();
      case "strings.xml":
        return generateStringsXml(phrases);
      case "MainActivity.java":
        return generateMainActivityJava();
      case "Phrase.java":
        return generatePhraseJava();
      case "PhraseAdapter.java":
        return generatePhraseAdapterJava();
      case "activity_main.xml":
        return generateActivityMainXml();
      case "item_phrase.xml":
        return generateItemPhraseXml();
      case "colors.xml":
        return generateColorsXml();
      case "styles.xml":
        return generateStylesXml();
      default:
        return "";
    }
  };

  // Android files list
  const androidFiles = [
    { name: "strings.xml", path: "app/src/main/res/values/strings.xml", lang: "xml" },
    { name: "MainActivity.java", path: "app/src/main/java/com/ac/ruso/MainActivity.java", lang: "java" },
    { name: "Phrase.java", path: "app/src/main/java/com/ac/ruso/Phrase.java", lang: "java" },
    { name: "PhraseAdapter.java", path: "app/src/main/java/com/ac/ruso/PhraseAdapter.java", lang: "java" },
    { name: "AndroidManifest.xml", path: "app/src/main/AndroidManifest.xml", lang: "xml" },
    { name: "activity_main.xml", path: "app/src/main/res/layout/activity_main.xml", lang: "xml" },
    { name: "item_phrase.xml", path: "app/src/main/res/layout/item_phrase.xml", lang: "xml" },
    { name: "colors.xml", path: "app/src/main/res/values/colors.xml", lang: "xml" },
    { name: "styles.xml", path: "app/src/main/res/values/styles.xml", lang: "xml" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans antialiased flex flex-col selection:bg-rose-200">
      {/* HEADER SECTION - Sleek Boutique Elegance */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center shadow-lg shadow-rose-200 text-white font-bold text-lg tracking-wider">
                AC
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                  AC Ruso <span className="text-slate-400 font-sans text-xs font-semibold uppercase tracking-widest hidden sm:inline-block">• Atención al Cliente</span>
                </h1>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold text-center md:text-left mt-0.5">
                  com.ac.ruso • Retail Assistant
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-1 md:mt-0 max-w-lg hidden lg:block border-l border-slate-200 pl-4">
              Guía de fraseología y pronunciación en ruso para boutiques de moda, lencería femenina y corsetería. Compatible con compilación en <strong className="text-slate-700">AIDE Pro Android APK</strong>.
            </p>
          </div>
          
          {/* STATS */}
          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 px-5 py-2 rounded-2xl text-center shadow-sm">
            <div>
              <span className="block text-lg font-bold text-rose-500">{phrases.length}</span>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Total Frases</span>
            </div>
            <div className="w-px h-6 bg-slate-200"></div>
            <div>
              <span className="block text-lg font-bold text-rose-500">{customPhrases.length}</span>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Añadidas</span>
            </div>
            <div className="w-px h-6 bg-slate-200"></div>
            <div>
              <span className="block text-lg font-bold text-rose-500">{favorites.length}</span>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Favoritas</span>
            </div>
          </div>
        </div>
        
        {/* TABS SELECTOR */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex border-t border-slate-100">
            <button
              onClick={() => setActiveTab("explorer")}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase transition-all border-b-2 ${
                activeTab === "explorer"
                  ? "border-rose-500 text-rose-600 bg-rose-50/40"
                  : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
              id="tab-explorer-btn"
            >
              <BookOpen size={15} />
              Explorador de Frases
            </button>
            <button
              onClick={() => setActiveTab("add")}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase transition-all border-b-2 ${
                activeTab === "add"
                  ? "border-rose-500 text-rose-600 bg-rose-50/40"
                  : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
              id="tab-add-btn"
            >
              <PlusCircle size={15} />
              Añadir Frase (IA Gemini)
            </button>
            <button
              onClick={() => setActiveTab("aide")}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase transition-all border-b-2 ${
                activeTab === "aide"
                  ? "border-rose-500 text-rose-600 bg-rose-50/40"
                  : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
              id="tab-aide-btn"
            >
              <Code size={15} />
              Proyecto AIDE Pro
            </button>
          </div>
        </div>
      </header>

      {/* TOAST NOTIFICATION CONTAINER */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl border border-slate-800 text-sm font-medium tracking-wide flex items-center gap-2 min-w-[280px] justify-center"
          >
            <Info size={16} className="text-rose-400" />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6">
        
        {/* TAB 1: PHRASE EXPLORER */}
        {activeTab === "explorer" && (
          <div className="space-y-6">
            
            {/* SEARCH & FILTERS PANEL */}
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Search input */}
                <div className="relative w-full flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    placeholder="Buscar por español, ruso o pronunciación fónetica (p.ej. 'Zdrástvuyte')..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white text-sm transition-all text-slate-800"
                    id="phrase-search-input"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800 font-semibold text-xs"
                    >
                      Limpiar
                    </button>
                  )}
                </div>

                {/* Show Favorites Toggle */}
                <button
                  onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                  className={`w-full md:w-auto px-5 py-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-medium transition-all cursor-pointer ${
                    showOnlyFavorites 
                      ? "bg-rose-500 text-white border-transparent shadow-md shadow-rose-100"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                  id="favorites-filter-toggle"
                >
                  <Heart size={16} fill={showOnlyFavorites ? "white" : "none"} />
                  <span>Favoritas</span>
                  {favorites.length > 0 && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${showOnlyFavorites ? "bg-white text-rose-600 font-bold" : "bg-slate-100 text-slate-600 font-bold"}`}>
                      {favorites.length}
                    </span>
                  )}
                </button>
              </div>

              {/* Category Pills Slider */}
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">Filtrar por Categoría:</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory("Todas")}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategory === "Todas"
                        ? "bg-rose-500 text-white shadow-md shadow-rose-100"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/40"
                    }`}
                  >
                    Todas (200+)
                  </button>
                  
                  {customPhrases.length > 0 && (
                    <button
                      onClick={() => setSelectedCategory("Personalizadas")}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border border-dashed cursor-pointer ${
                        selectedCategory === "Personalizadas"
                          ? "bg-violet-600 text-white border-transparent shadow-md shadow-violet-100"
                          : "bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100/50"
                      }`}
                    >
                      ✨ Creadas por ti ({customPhrases.length})
                    </button>
                  )}

                  {CATEGORIES.map((cat) => {
                    const count = phrases.filter(p => p.category === cat).length;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          selectedCategory === cat
                            ? "bg-rose-500 text-white shadow-md shadow-rose-100"
                            : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/40"
                        }`}
                      >
                        {cat} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CONFIGURACIÓN DE VOZ (TTS) */}
              <div className="mt-2 pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gradient-to-br from-rose-50/30 to-slate-50/50 p-4 rounded-xl border border-rose-100/30">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <Volume2 size={15} className="text-rose-500 animate-pulse" />
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Voz en Ruso (TTS Web)</span>
                  </div>
                  {voices.length > 0 ? (
                    <select
                      value={selectedVoiceName}
                      onChange={(e) => handleVoiceChange(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 text-xs text-slate-700 cursor-pointer shadow-sm"
                    >
                      {voices.map((voice) => (
                        <option key={voice.name} value={voice.name}>
                          {voice.name} ({voice.localService ? "Offline/Local" : "Online"})
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className="text-xs text-slate-500 italic bg-white px-3 py-2 border border-slate-200 rounded-lg">
                      Sintetizador por defecto (elija o instale voces de ruso en su sistema).
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">Velocidad de Pronunciación</span>
                    <span className="text-xs font-semibold text-rose-500 bg-rose-50 px-1.5 py-0.5 rounded shadow-sm">{speechRate}x</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">Lento</span>
                    <input
                      type="range"
                      min="0.5"
                      max="1.5"
                      step="0.05"
                      value={speechRate}
                      onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                      className="flex-1 accent-rose-500 h-1 bg-slate-200 rounded-lg cursor-pointer"
                    />
                    <span className="text-xs text-slate-400">Rápido</span>
                    <button
                      onClick={() => setSpeechRate(0.85)}
                      className="text-[10px] text-slate-500 hover:text-rose-500 bg-white border px-2 py-1 rounded-md transition-all cursor-pointer hover:bg-slate-50 active:scale-95"
                    >
                      Restaurar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RESULTS STATS SUMMARY */}
            <div className="flex justify-between items-center text-xs text-slate-400 px-2 font-medium">
              <span>
                Mostrando <strong className="text-slate-800 font-semibold">{filteredPhrases.length}</strong> de {phrases.length} frases.
              </span>
              {selectedCategory !== "Todas" && (
                <span>Filtro activo: <strong className="text-rose-500 font-semibold">{selectedCategory}</strong></span>
              )}
            </div>

            {/* PHRASES LIST/GRID */}
            {filteredPhrases.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPhrases.map((phrase) => {
                  const isFav = favorites.includes(phrase.id);
                  const isSpeaking = speakingId === phrase.id;
                  
                  return (
                    <motion.div
                      layout
                      key={phrase.id}
                      onClick={() => speakRussian(phrase.id, phrase.russian)}
                      className={`bg-white rounded-2xl p-5 shadow-sm border transition-all flex flex-col justify-between group relative overflow-hidden cursor-pointer ${
                        isSpeaking 
                          ? "border-rose-500 ring-4 ring-rose-500/10" 
                          : "border-slate-100 hover:shadow-md hover:border-slate-200 hover:border-rose-200"
                      }`}
                      title="Haz clic en la tarjeta para escuchar la pronunciación"
                    >
                      {/* Decorative active speaker pulse */}
                      {isSpeaking && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-pink-400 to-rose-600 animate-pulse" />
                      )}

                      <div>
                        {/* Category & Custom badge */}
                        <div className="flex justify-between items-start gap-2 mb-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 bg-rose-50 px-2.5 py-1 rounded-full">
                            {phrase.category}
                          </span>
                          
                          <div className="flex gap-1.5">
                            {phrase.isCustom && (
                              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                                IA
                              </span>
                            )}
                            
                            <button
                              onClick={(e) => { e.stopPropagation(); toggleFavorite(phrase.id); }}
                              className="text-slate-300 hover:text-rose-500 transition-colors cursor-pointer"
                              title={isFav ? "Quitar de favoritos" : "Marcar como favorito"}
                            >
                              <Heart size={16} fill={isFav ? "#f43f5e" : "none"} className={isFav ? "text-rose-500" : ""} />
                            </button>
                          </div>
                        </div>

                        {/* SPANISH TRANSLATION */}
                        <p className="text-sm font-semibold text-slate-800 leading-relaxed mb-3">
                          {phrase.spanish}
                        </p>

                        {/* RUSSIAN CYRILLIC TEXT */}
                        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-2 group-hover:bg-rose-50/20 transition-all">
                          <p className="text-lg font-bold text-slate-800 leading-snug break-words tracking-wide">
                            {phrase.russian}
                          </p>
                        </div>

                        {/* PHONETICS / TRANSLITERATION */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 italic mb-4">
                          <Volume2 size={13} className="text-rose-500 flex-shrink-0" />
                          <span className="leading-snug">
                            Pronunciar: <strong className="text-slate-700 font-medium not-italic">{phrase.transliteration}</strong>
                          </span>
                        </div>
                      </div>

                      {/* CARD CONTROLS (Speak, Copy, Delete) */}
                      <div className="border-t border-slate-100 pt-3 flex justify-between items-center mt-auto">
                        {phrase.isCustom ? (
                          <button
                            onClick={(e) => handleDeleteCustomPhrase(phrase.id, e)}
                            className="text-slate-300 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                            title="Eliminar frase personalizada"
                          >
                            <Trash2 size={15} />
                          </button>
                        ) : (
                          <div className="w-1" /> // empty space placeholder
                        )}

                        <div className="flex items-center gap-2">
                          {/* Copy Cyrillic */}
                          <button
                            onClick={(e) => { e.stopPropagation(); copyToClipboard(phrase.russian); }}
                            className="p-2 text-slate-400 hover:text-rose-500 hover:bg-slate-50 rounded-xl transition-all cursor-pointer"
                            title="Copiar texto en ruso"
                          >
                            <Copy size={16} />
                          </button>

                          {/* Speak Button */}
                          <button
                            onClick={(e) => { e.stopPropagation(); speakRussian(phrase.id, phrase.russian); }}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                              isSpeaking
                                ? "bg-rose-600 text-white animate-pulse"
                                : "bg-rose-500 hover:bg-rose-600 text-white shadow-sm shadow-rose-100"
                            }`}
                          >
                            {isSpeaking ? (
                              <>
                                <Square size={12} fill="white" />
                                Detener
                              </>
                            ) : (
                              <>
                                <Play size={12} fill="white" />
                                Escuchar
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 shadow-sm max-w-xl mx-auto space-y-4">
                <p className="text-5xl">🛍️</p>
                <h3 className="text-lg font-bold text-slate-800">No se encontraron frases</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Prueba cambiando la categoría de filtro, borrando la búsqueda o añadiendo tus propias frases con la pestaña de Inteligencia Artificial.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("Todas");
                    setSearchQuery("");
                    setShowOnlyFavorites(false);
                  }}
                  className="px-5 py-2.5 bg-rose-500 text-white text-xs font-semibold uppercase rounded-xl hover:bg-rose-600 tracking-wider transition-all cursor-pointer"
                >
                  Ver todas las frases
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: ADD CUSTOM PHRASE (GEMINI IA TRANSLATION) */}
        {activeTab === "add" && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              {/* Header inside form */}
              <div className="bg-slate-950 text-white p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Sparkles size={120} />
                </div>
                <h2 className="text-xl font-bold font-serif flex items-center gap-2">
                  <Sparkles className="text-rose-400" size={20} />
                  Añadir Nueva Frase con IA Gemini
                </h2>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Ingresa tu frase en español orientada a la atención al cliente de moda o lencería, y Gemini traducirá gramaticalmente al ruso (en tono cortés) y creará la pronunciación fonética simplificada en español.
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSavePhrase} className="p-6 space-y-5">
                
                {/* Spanish Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Frase en Español (Ej: "¿Desea que le envuelva el picardías de seda para regalo?")
                  </label>
                  <textarea
                    rows={2}
                    value={newSpanish}
                    onChange={(e) => setNewSpanish(e.target.value)}
                    placeholder="Escribe aquí la frase que desees traducir y añadir..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:bg-white text-sm transition-all text-slate-850"
                    id="new-phrase-spanish-input"
                  />
                </div>

                {/* Category & Translate button row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Seleccionar Categoría
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 text-sm transition-all text-slate-800"
                      id="new-phrase-category-select"
                    >
                      {CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="button"
                    disabled={isTranslating || !newSpanish.trim()}
                    onClick={handleAiTranslate}
                    className="w-full py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl hover:opacity-95 disabled:opacity-55 shadow-md shadow-rose-100 flex items-center justify-center gap-2 transition-all cursor-pointer text-sm"
                    id="ai-translate-btn"
                  >
                    {isTranslating ? (
                      <>
                        <RefreshCw className="animate-spin" size={16} />
                        Confeccionando traducción...
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        Traducir y Pronunciar con IA
                      </>
                    )}
                  </button>
                </div>

                {/* AI Error Notification */}
                {translationError && (
                  <div className="bg-red-50 text-red-700 text-xs p-3.5 rounded-xl border border-red-200 leading-relaxed">
                    <strong>Error de traducción:</strong> {translationError}
                  </div>
                )}

                {/* Output Fields: Russian & Pronunciation */}
                <div className="border-t border-dashed border-slate-100 pt-5 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Resultado Generado</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Russian Cyrillic Output */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Frase en Ruso (Cirílico)
                      </label>
                      <input
                        type="text"
                        value={newRussian}
                        onChange={(e) => setNewRussian(e.target.value)}
                        placeholder="Traducción en ruso..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 text-sm font-bold text-slate-800"
                        id="new-phrase-russian-output"
                      />
                    </div>

                    {/* Transliteration Output */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Transliteración (Pronunciación fónetica)
                      </label>
                      <input
                        type="text"
                        value={newTransliteration}
                        onChange={(e) => setNewTransliteration(e.target.value)}
                        placeholder="Ej: Spasíbo bol'shóye..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 text-sm italic text-slate-800"
                        id="new-phrase-translit-output"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Action buttons */}
                <div className="border-t border-slate-100 pt-5 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setNewSpanish("");
                      setNewRussian("");
                      setNewTransliteration("");
                    }}
                    className="px-5 py-3 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 text-sm transition-all cursor-pointer"
                  >
                    Borrar Formulario
                  </button>
                  <button
                    type="submit"
                    disabled={!newSpanish.trim() || !newRussian.trim() || !newTransliteration.trim()}
                    className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 disabled:opacity-50 text-sm transition-all shadow-md cursor-pointer"
                    id="save-phrase-btn"
                  >
                    Guardar e Incorporar Frase
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* TAB 3: AIDE PRO COMPATIBILITY EXPORT */}
        {activeTab === "aide" && (
          <div className="space-y-6">
            
            {/* INSTRUCTIONS ACCORDION/HERO */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-3">
                <span className="text-xs uppercase tracking-widest text-rose-500 font-bold">Guía de Desarrollo</span>
                <h3 className="text-xl font-bold text-slate-900">¿Cómo compilar en AIDE Pro apk para Android?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Esta aplicación web de atención al cliente está diseñada bajo un sistema de recursos desacoplados 100% compatible con <strong className="text-slate-800">AIDE Pro</strong> (el compilador de Android nativo para móviles). No requiere bases de datos locales complejas. Lee de manera eficiente los recursos de strings de Android para estructurar el menú.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 pt-2">
                  <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="p-1 px-2.5 bg-rose-500 text-white font-bold rounded-md flex-shrink-0">1</span>
                    <span>Crea un nuevo proyecto en AIDE Pro con soporte para AndroidX o SDK v21+. Nombre del paquete: <code className="font-semibold bg-white border px-1 rounded text-rose-600">com.ac.ruso</code>.</span>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="p-1 px-2.5 bg-rose-500 text-white font-bold rounded-md flex-shrink-0">2</span>
                    <span>Copia y reemplaza los archivos de código fuente correspondientes listados abajo en tu estructura de directorios de AIDE.</span>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="p-1 px-2.5 bg-rose-500 text-white font-bold rounded-md flex-shrink-0">3</span>
                    <span>¡Listo! Haz clic en compilar ("Run" / icono de Play) en AIDE Pro para generar e instalar tu archivo APK en tu smartphone Android con soporte de voz.</span>
                  </div>
                  <div className="flex items-start gap-2 bg-gradient-to-r from-amber-50 to-rose-50/50 p-2.5 rounded-xl border border-amber-100">
                    <span className="p-1 bg-amber-500 text-white font-bold rounded-md flex-shrink-0">✨</span>
                    <span><strong>Sincronización Dinámica:</strong> Las frases personalizadas que añadas en la web se incorporarán automáticamente al recurso <code className="bg-white px-1 py-0.5 rounded border">strings.xml</code> de abajo en tiempo real.</span>
                  </div>
                </div>
              </div>

              {/* SIDEBAR BOX */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5">Información Técnica APK</h4>
                  <ul className="text-xs space-y-2 text-slate-600">
                    <li>📁 <strong className="text-slate-800">Package:</strong> com.ac.ruso</li>
                    <li>📱 <strong className="text-slate-800">Min SDK:</strong> 21 (Android 5.0)</li>
                    <li>🎯 <strong className="text-slate-800">Target SDK:</strong> 33 (Android 13)</li>
                    <li>🗣️ <strong className="text-slate-800">Motor de Voz:</strong> Google TTS (Russian)</li>
                    <li>🎨 <strong className="text-slate-800">Estilos:</strong> Theme.AppCompat.Light</li>
                  </ul>
                </div>
                
                <div className="border-t border-slate-200 pt-4 mt-4">
                  <p className="text-[11px] text-slate-500 italic leading-relaxed">
                    El motor TTS utiliza la biblioteca nativa de Android de forma gratuita y completamente offline para que funcione sin necesidad de internet en la tienda.
                  </p>
                </div>
              </div>
            </div>

            {/* NAVIGATOR & PREVIEWER */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* File Selector Tree */}
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 space-y-3 lg:col-span-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 px-1">
                  <Folder size={14} className="text-rose-500" />
                  Estructura del Proyecto
                </h3>
                
                <div className="space-y-1 text-sm">
                  {/* Folder: app */}
                  <div className="flex items-center gap-1 px-2 py-1 text-slate-700 font-semibold">
                    <Folder size={16} className="text-amber-500" />
                    <span>app</span>
                  </div>
                  
                  {/* Folder: app/src/main */}
                  <div className="flex items-center gap-1 pl-6 py-1 text-slate-600 font-semibold">
                    <Folder size={16} className="text-amber-500" />
                    <span>src/main</span>
                  </div>

                  {/* AndroidManifest */}
                  <button
                    onClick={() => setSelectedAndroidFile("AndroidManifest.xml")}
                    className={`w-full flex items-center justify-between pl-12 pr-2 py-2 rounded-lg text-left text-xs transition-all cursor-pointer ${
                      selectedAndroidFile === "AndroidManifest.xml"
                        ? "bg-rose-500 text-white font-semibold shadow-sm"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span className="flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
                      <FileCode size={13} className={selectedAndroidFile === "AndroidManifest.xml" ? "text-white" : "text-slate-400"} />
                      AndroidManifest.xml
                    </span>
                    <ChevronRight size={12} />
                  </button>

                  {/* Folder: app/src/main/java */}
                  <div className="flex items-center gap-1 pl-12 py-1 text-slate-500 font-semibold">
                    <Folder size={15} className="text-amber-500" />
                    <span>java/com/ac/ruso</span>
                  </div>

                  {/* Java classes */}
                  {["MainActivity.java", "Phrase.java", "PhraseAdapter.java"].map((file) => (
                    <button
                      key={file}
                      onClick={() => setSelectedAndroidFile(file)}
                      className={`w-full flex items-center justify-between pl-16 pr-2 py-2 rounded-lg text-left text-xs transition-all cursor-pointer ${
                        selectedAndroidFile === file
                          ? "bg-rose-500 text-white font-semibold shadow-sm"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <FileCode size={13} className={selectedAndroidFile === file ? "text-white" : "text-slate-400"} />
                        {file}
                      </span>
                      <ChevronRight size={12} />
                    </button>
                  ))}

                  {/* Folder: app/src/main/res/layout */}
                  <div className="flex items-center gap-1 pl-12 py-1 text-slate-500 font-semibold">
                    <Folder size={15} className="text-amber-500" />
                    <span>res/layout</span>
                  </div>

                  {/* Layout Files */}
                  {["activity_main.xml", "item_phrase.xml"].map((file) => (
                    <button
                      key={file}
                      onClick={() => setSelectedAndroidFile(file)}
                      className={`w-full flex items-center justify-between pl-16 pr-2 py-2 rounded-lg text-left text-xs transition-all cursor-pointer ${
                        selectedAndroidFile === file
                          ? "bg-rose-500 text-white font-semibold shadow-sm"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <FileCode size={13} className={selectedAndroidFile === file ? "text-white" : "text-slate-400"} />
                        {file}
                      </span>
                      <ChevronRight size={12} />
                    </button>
                  ))}

                  {/* Folder: app/src/main/res/values */}
                  <div className="flex items-center gap-1 pl-12 py-1 text-slate-500 font-semibold">
                    <Folder size={15} className="text-amber-500" />
                    <span>res/values</span>
                  </div>

                  {/* Values XMLs */}
                  {["strings.xml", "colors.xml", "styles.xml"].map((file) => (
                    <button
                      key={file}
                      onClick={() => setSelectedAndroidFile(file)}
                      className={`w-full flex items-center justify-between pl-16 pr-2 py-2 rounded-lg text-left text-xs transition-all cursor-pointer ${
                        selectedAndroidFile === file
                          ? "bg-rose-500 text-white font-semibold shadow-sm"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <FileCode size={13} className={selectedAndroidFile === file ? "text-white" : "text-slate-400"} />
                        {file}
                        {file === "strings.xml" && (
                          <span className="text-[9px] bg-rose-500 text-white px-2 py-0.5 rounded-full font-sans font-bold shadow-sm">
                            Recurso
                          </span>
                        )}
                      </span>
                      <ChevronRight size={12} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Preview Block */}
              <div className="bg-[#1E1E1E] text-gray-100 p-4 rounded-2xl shadow-lg border border-gray-800 lg:col-span-2 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-3 mb-4">
                    <div>
                      <span className="text-xs font-bold font-mono text-rose-400">
                        {androidFiles.find(f => f.name === selectedAndroidFile)?.path}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-1">
                        Código de {selectedAndroidFile}
                      </h4>
                    </div>
                    
                    <button
                      onClick={() => {
                        const content = getAndroidFileContent();
                        navigator.clipboard.writeText(content);
                        showToast(`¡Código de ${selectedAndroidFile} copiado! 📋`);
                      }}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Copy size={13} />
                      Copiar Código
                    </button>
                  </div>

                  {/* Dynamic Alert for Strings.xml */}
                  {selectedAndroidFile === "strings.xml" && (
                    <div className="mb-4 bg-amber-950/40 text-amber-300 text-xs p-3 rounded-xl border border-amber-800/40 flex items-start gap-2">
                      <span className="text-base leading-none">✨</span>
                      <span>
                        Este archivo de strings se ha generado en tiempo real. Contiene los <strong>200 registros predefinidos</strong> de lencería y boutique, más las <strong>{customPhrases.length} frases personalizadas</strong> que acabas de añadir. Puedes compilar directamente en Android sin perder tus datos.
                      </span>
                    </div>
                  )}

                  {/* Code box */}
                  <div className="overflow-x-auto max-h-[480px] bg-black/40 p-4 rounded-xl border border-gray-800 font-mono text-xs leading-relaxed text-gray-300 scrollbar-thin">
                    <pre className="whitespace-pre">
                      {getAndroidFileContent()}
                    </pre>
                  </div>
                </div>

                <div className="text-[11px] text-gray-500 mt-4 border-t border-gray-800 pt-3 text-right">
                  Compatible para compilación directa en AIDE, Android Studio, Sketchware Pro y Termux build.
                </div>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* FOOTER - Professional Note */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-slate-700">AC Ruso • Atención al Cliente Boutique • com.ac.ruso</p>
          <p className="max-w-md mx-auto leading-relaxed">
            Aplicación diseñada con una interfaz limpia, actual y sofisticada en lencería. Traducido y optimizado con Inteligencia Artificial Gemini y de compatibilidad garantizada en AIDE Pro.
          </p>
          <p className="text-[10px] text-slate-400 pt-2">© 2026 AC Ruso Project. Licencia Apache 2.0.</p>
        </div>
      </footer>
    </div>
  );
}
