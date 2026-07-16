import { Phrase } from "./phrases";

// Escapes XML special characters
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "\\'");
}

export function generateAndroidManifest(): string {
  return `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.ac.ruso"
    android:versionCode="1"
    android:versionName="1.0">

    <uses-sdk
        android:minSdkVersion="21"
        android:targetSdkVersion="33" />

    <!-- Compatibilidad con servicios de voz (TTS) para Android 11 (API 30) o superior -->
    <queries>
        <intent>
            <action android:name="android.intent.action.TTS_SERVICE" />
        </intent>
    </queries>

    <!-- Permiso opcional de internet si se usan servicios online -->
    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme">
        
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:screenOrientation="portrait">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>`;
}

export function generateStringsXml(phrases: Phrase[]): string {
  let xml = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">AC Ruso</string>
    <string name="search_hint">Buscar frase...</string>
    <string name="add_phrase">Añadir Frase</string>
    <string name="tts_error">Su dispositivo no soporta o no tiene activado el motor TTS en Ruso.</string>
    <string name="copied">Frase copiada al portapapeles</string>

    <!-- Lista de Identificadores -->
    <string-array name="phrases_id">
`;

  phrases.forEach((p) => {
    xml += `        <item>${escapeXml(p.id)}</item>\n`;
  });

  xml += `    </string-array>\n\n    <!-- Categorías -->\n    <string-array name="phrases_category">\n`;
  phrases.forEach((p) => {
    xml += `        <item>${escapeXml(p.category)}</item>\n`;
  });

  xml += `    </string-array>\n\n    <!-- Traducciones en Español -->\n    <string-array name="phrases_spanish">\n`;
  phrases.forEach((p) => {
    xml += `        <item>${escapeXml(p.spanish)}</item>\n`;
  });

  xml += `    </string-array>\n\n    <!-- Frases en Ruso -->\n    <string-array name="phrases_russian">\n`;
  phrases.forEach((p) => {
    xml += `        <item>${escapeXml(p.russian)}</item>\n`;
  });

  xml += `    </string-array>\n\n    <!-- Transliteraciones (Pronunciación) -->\n    <string-array name="phrases_transliteration">\n`;
  phrases.forEach((p) => {
    xml += `        <item>${escapeXml(p.transliteration)}</item>\n`;
  });

  xml += `    </string-array>\n</resources>`;
  return xml;
}

export function generateMainActivityJava(): string {
  return `package com.ac.ruso;

import android.app.Activity;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;

public class MainActivity extends AppCompatActivity implements TextToSpeech.OnInitListener {

    private TextToSpeech tts;
    private RecyclerView recyclerView;
    private PhraseAdapter adapter;
    private List<Phrase> allPhrases;
    private List<Phrase> filteredPhrases;
    private EditText searchView;
    private Spinner categorySpinner;
    private String selectedCategory = "Todas";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Inicializar motor de voz TTS
        tts = new TextToSpeech(this, this);

        // Inicializar vistas
        searchView = findViewById(R.id.search_view);
        categorySpinner = findViewById(R.id.category_spinner);
        recyclerView = findViewById(R.id.recycler_view);

        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        // Cargar datos desde strings.xml
        loadPhrasesFromResources();

        // Configurar Spinner de categorías
        setupCategorySpinner();

        // Configurar el adaptador
        setupRecyclerView();

        // Escuchador de búsqueda
        searchView.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                filterPhrases(s.toString());
            }

            @Override
            public void afterTextChanged(Editable s) {}
        });
    }

    private void loadPhrasesFromResources() {
        allPhrases = new ArrayList<>();
        
        String[] ids = getResources().getStringArray(R.array.phrases_id);
        String[] categories = getResources().getStringArray(R.array.phrases_category);
        String[] spanish = getResources().getStringArray(R.array.phrases_spanish);
        String[] russian = getResources().getStringArray(R.array.phrases_russian);
        String[] transliterations = getResources().getStringArray(R.array.phrases_transliteration);

        for (int i = 0; i < ids.length; i++) {
            allPhrases.add(new Phrase(
                    ids[i],
                    categories[i],
                    spanish[i],
                    russian[i],
                    transliterations[i]
            ));
        }
        filteredPhrases = new ArrayList<>(allPhrases);
    }

    private void setupCategorySpinner() {
        Set<String> categoriesSet = new HashSet<>();
        categoriesSet.add("Todas");
        for (Phrase p : allPhrases) {
            categoriesSet.add(p.getCategory());
        }

        List<String> categoriesList = new ArrayList<>(categoriesSet);
        Collections.sort(categoriesList);
        // Garantizar que "Todas" esté en primer lugar
        categoriesList.remove("Todas");
        categoriesList.add(0, "Todas");

        ArrayAdapter<String> spinnerAdapter = new ArrayAdapter<>(
                this,
                android.R.layout.simple_spinner_item,
                categoriesList
        );
        spinnerAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        categorySpinner.setAdapter(spinnerAdapter);

        categorySpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                selectedCategory = parent.getItemAtPosition(position).toString();
                filterPhrases(searchView.getText().toString());
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {}
        });
    }

    private void setupRecyclerView() {
        adapter = new PhraseAdapter(filteredPhrases, new PhraseAdapter.OnPhraseClickListener() {
            @Override
            public void onSpeakClick(Phrase phrase) {
                speakRussian(phrase.getRussian());
            }

            @Override
            public void onCopyClick(Phrase phrase) {
                ClipboardManager clipboard = (ClipboardManager) getSystemService(Context.CLIPBOARD_SERVICE);
                ClipData clip = ClipData.newPlainText("Ruso", phrase.getRussian());
                if (clipboard != null) {
                    clipboard.setPrimaryClip(clip);
                    Toast.makeText(MainActivity.this, R.string.copied, Toast.LENGTH_SHORT).show();
                }
            }
        });
        recyclerView.setAdapter(adapter);
    }

    private void filterPhrases(String query) {
        filteredPhrases.clear();
        String lowerQuery = query.toLowerCase().trim();

        for (Phrase p : allPhrases) {
            boolean matchesCategory = selectedCategory.equals("Todas") || p.getCategory().equals(selectedCategory);
            boolean matchesSearch = lowerQuery.isEmpty() ||
                    p.getSpanish().toLowerCase().contains(lowerQuery) ||
                    p.getRussian().toLowerCase().contains(lowerQuery) ||
                    p.getTransliteration().toLowerCase().contains(lowerQuery);

            if (matchesCategory && matchesSearch) {
                filteredPhrases.add(p);
            }
        }
        adapter.notifyDataSetChanged();
    }

    private void speakRussian(String text) {
        if (tts != null) {
            tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "phrase_tts");
        }
    }

    @Override
    public void onInit(int status) {
        if (status == TextToSpeech.SUCCESS) {
            int result = tts.setLanguage(new Locale("ru", "RU"));
            if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                Toast.makeText(this, R.string.tts_error, Toast.LENGTH_LONG).show();
            } else {
                // Ajustar velocidad de habla a 0.85f para mayor claridad en la pronunciación (ideal para aprendizaje)
                tts.setSpeechRate(0.85f);
                
                // Intentar seleccionar una voz de alta calidad en ruso si está disponible
                if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
                    try {
                        for (android.speech.tts.Voice voice : tts.getVoices()) {
                            if (voice.getLocale().getLanguage().equals("ru")) {
                                tts.setVoice(voice);
                                break;
                            }
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }
        } else {
            Toast.makeText(this, "Error al inicializar TTS", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    protected void onDestroy() {
        if (tts != null) {
            tts.stop();
            tts.shutdown();
        }
        super.onDestroy();
    }
}`;
}

export function generatePhraseJava(): string {
  return `package com.ac.ruso;

public class Phrase {
    private String id;
    private String category;
    private String spanish;
    private String russian;
    private String transliteration;

    public Phrase(String id, String category, String spanish, String russian, String transliteration) {
        this.id = id;
        this.category = category;
        this.spanish = spanish;
        this.russian = russian;
        this.transliteration = transliteration;
    }

    public String getId() { return id; }
    public String getCategory() { return category; }
    public String getSpanish() { return spanish; }
    public String getRussian() { return russian; }
    public String getTransliteration() { return transliteration; }
}`;
}

export function generatePhraseAdapterJava(): string {
  return `package com.ac.ruso;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class PhraseAdapter extends RecyclerView.Adapter<PhraseAdapter.ViewHolder> {

    private final List<Phrase> phraseList;
    private final OnPhraseClickListener listener;

    public interface OnPhraseClickListener {
        void onSpeakClick(Phrase phrase);
        void onCopyClick(Phrase phrase);
    }

    public PhraseAdapter(List<Phrase> phraseList, OnPhraseClickListener listener) {
        this.phraseList = phraseList;
        this.listener = listener;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_phrase, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Phrase phrase = phraseList[position];
        holder.tvSpanish.setText(phrase.getSpanish());
        holder.tvRussian.setText(phrase.getRussian());
        holder.tvTrans.setText(phrase.getTransliteration());
        holder.tvCat.setText(phrase.getCategory());

        holder.btnSpeak.setOnClickListener(v -> listener.onSpeakClick(phrase));
        holder.btnCopy.setOnClickListener(v -> listener.onCopyClick(phrase));
        
        // Al tocar cualquier parte de la tarjeta o frase se reproduce la pronunciación por voz
        holder.itemView.setOnClickListener(v -> listener.onSpeakClick(phrase));
    }

    @Override
    public int getItemCount() {
        return phraseList.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        TextView tvSpanish, tvRussian, tvTrans, tvCat;
        ImageButton btnSpeak, btnCopy;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            tvSpanish = itemView.findViewById(R.id.tv_spanish);
            tvRussian = itemView.findViewById(R.id.tv_russian);
            tvTrans = itemView.findViewById(R.id.tv_transliteration);
            tvCat = itemView.findViewById(R.id.tv_category);
            btnSpeak = itemView.findViewById(R.id.btn_speak);
            btnCopy = itemView.findViewById(R.id.btn_copy);
        }
    }
}`;
}

export function generateActivityMainXml(): string {
  return `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:background="#FAF6F6">

    <!-- Encabezado de la Tienda -->
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:background="#4A1521"
        android:padding="16dp">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="AC Ruso"
            android:textColor="#FFFFFF"
            android:textSize="24sp"
            android:textStyle="bold" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Atención al Cliente - Ropa y Lencería Femenina"
            android:textColor="#E5C3C3"
            android:textSize="12sp"
            android:layout_marginTop="4dp" />
    </LinearLayout>

    <!-- Controles de Búsqueda y Filtro -->
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="12dp">

        <EditText
            android:id="@+id/search_view"
            android:layout_width="match_parent"
            android:layout_height="48dp"
            android:hint="@string/search_hint"
            android:background="@android:drawable/editbox_background_normal"
            android:paddingLeft="12dp"
            android:paddingRight="12dp"
            android:singleLine="true"
            android:textSize="14sp" />

        <Spinner
            android:id="@+id/category_spinner"
            android:layout_width="match_parent"
            android:layout_height="48dp"
            android:layout_marginTop="8dp"
            android:background="@android:drawable/btn_default" />
    </LinearLayout>

    <!-- Lista de Frases -->
    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/recycler_view"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:padding="8dp"
        android:clipToPadding="false" />

</LinearLayout>`;
}

export function generateItemPhraseXml(): string {
  return `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    android:background="?android:attr/selectableItemBackground"
    android:clickable="true"
    android:focusable="true"
    android:layout_margin="6dp"
    android:padding="14dp"
    android:elevation="2dp">

    <!-- Etiqueta de Categoría -->
    <TextView
        android:id="@+id/tv_category"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textSize="11sp"
        android:textColor="#C0392B"
        android:textStyle="bold"
        android:background="#FDEDEC"
        android:paddingLeft="6dp"
        android:paddingRight="6dp"
        android:paddingTop="2dp"
        android:paddingBottom="2dp" />

    <!-- Frase en Español -->
    <TextView
        android:id="@+id/tv_spanish"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="8dp"
        android:textColor="#2C3E50"
        android:textSize="15sp"
        android:textStyle="bold" />

    <!-- Frase en Ruso (Cirílico) -->
    <TextView
        android:id="@+id/tv_russian"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="6dp"
        android:textColor="#4A1521"
        android:textSize="18sp"
        android:textStyle="bold" />

    <!-- Pronunciación / Transliteración -->
    <TextView
        android:id="@+id/tv_transliteration"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="4dp"
        android:textColor="#7F8C8D"
        android:textSize="13sp"
        android:textStyle="italic" />

    <!-- Botonera -->
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:gravity="right"
        android:layout_marginTop="10dp">

        <ImageButton
            android:id="@+id/btn_copy"
            android:layout_width="40dp"
            android:layout_height="40dp"
            android:background="?android:attr/selectableItemBackgroundBorderless"
            android:src="@android:drawable/ic_menu_save"
            android:contentDescription="Copiar ruso" />

        <ImageButton
            android:id="@+id/btn_speak"
            android:layout_width="40dp"
            android:layout_height="40dp"
            android:layout_marginLeft="16dp"
            android:background="?android:attr/selectableItemBackgroundBorderless"
            android:src="@android:drawable/ic_btn_speak_now"
            android:contentDescription="Escuchar pronunciación" />

    </LinearLayout>
</LinearLayout>`;
}

export function generateColorsXml(): string {
  return `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="colorPrimary">#4A1521</color>
    <color name="colorPrimaryDark">#300E15</color>
    <color name="colorAccent">#C0392B</color>
    <color name="bgLight">#FAF6F6</color>
</resources>`;
}

export function generateStylesXml(): string {
  return `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <!-- Customize your theme here. -->
        <item name="colorPrimary">@color/colorPrimary</item>
        <item name="colorPrimaryDark">@color/colorPrimaryDark</item>
        <item name="colorAccent">@color/colorAccent</item>
    </style>
</resources>`;
}
