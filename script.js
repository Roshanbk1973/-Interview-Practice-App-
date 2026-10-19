"use strict";

/* ========================================
   JINAN UNIVERSITY INTERVIEW PRACTICE
   30 QUESTIONS - N5 LEVEL
   ======================================== */

const questions = [
  {
    id: 1,
    important: true,
    question: "自己紹介(じこしょうかい)をお願(ねが)いします。",
    nepali: "आफ्नो परिचय दिनुहोस्।",
    answer: "はじめまして。\n私(わたし)の名前(なまえ)はヤダブ・スレンドラ・クマルです。\nネパールから来(き)ました。\n今(いま)、日本(にほん)で勉強(べんきょう)しています。\nどうぞよろしくお願(ねが)いします。",
    meaning: "नमस्कार। मेरो नाम यादव सुरेन्द्र कुमार हो। म नेपालबाट आएको हुँ। अहिले जापानमा पढ्दै छु। धन्यवाद।"
  },
  {
    id: 2,
    important: true,
    question: "お名前(なまえ)は何(なん)ですか。",
    nepali: "तपाईंको नाम के हो?",
    answer: "私(わたし)の名前(なまえ)はヤダブ・スレンドラ・クマルです。",
    meaning: "मेरो नाम यादव सुरेन्द्र कुमार हो।"
  },
  {
    id: 3,
    important: true,
    question: "生年月日(せいねんがっぴ)を教(おし)えてください。",
    nepali: "जन्ममिति भन्नुहोस्।",
    answer: "1998年(せんきゅうひゃくきゅうじゅうはちねん)7月(しちがつ)19日(じゅうくにち)です。",
    meaning: "मेरो जन्ममिति सन् 1998 जुलाई 19 हो।"
  },
  {
    id: 4,
    important: false,
    question: "何歳(なんさい)ですか。",
    nepali: "कति वर्षको हुनुहुन्छ?",
    answer: "28歳(にじゅうはっさい)です。",
    meaning: "म २८ वर्षको हुँ।"
  },
  {
    id: 5,
    important: true,
    question: "どこの国(くに)から来(き)ましたか。",
    nepali: "कुन देशबाट आउनुभएको हो?",
    answer: "ネパールから来(き)ました。",
    meaning: "म नेपालबाट आएको हुँ।"
  },
  {
    id: 6,
    important: true,
    question: "なぜ日本(にほん)に来(き)ましたか。",
    nepali: "जापान किन आउनुभयो?",
    answer: "日本(にほん)で勉強(べんきょう)したかったからです。\n日本(にほん)の文化(ぶんか)も好(す)きです。",
    meaning: "जापानमा पढ्न चाहन्थेँ। जापानी संस्कृति पनि मन पर्छ।"
  },
  {
    id: 7,
    important: true,
    question: "なぜこの大学(だいがく)に入(はい)りたいですか。",
    nepali: "यो विश्वविद्यालयमा किन पढ्न चाहनुहुन्छ?",
    answer: "この大学(だいがく)でたくさん勉強(べんきょう)したいです。\n新(あたら)しいことを学(まな)びたいです。",
    meaning: "यो विश्वविद्यालयमा धेरै पढ्न र नयाँ कुरा सिक्न चाहन्छु।"
  },
  {
    id: 8,
    important: true,
    question: "大学(だいがく)で何(なに)を勉強(べんきょう)したいですか。",
    nepali: "विश्वविद्यालयमा के पढ्न चाहनुहुन्छ?",
    answer: "ビジネスを勉強(べんきょう)したいです。\n日本語(にほんご)ももっと勉強(べんきょう)したいです。",
    meaning: "Business र जापानी भाषा पढ्न चाहन्छु। वास्तविक आवेदन विषयअनुसार बदल्नुहोस्।"
  },
  {
    id: 9,
    important: true,
    question: "なぜ大学(だいがく)に行(い)きたいですか。",
    nepali: "विश्वविद्यालय किन जान चाहनुहुन्छ?",
    answer: "もっと勉強(べんきょう)したいからです。\n将来(しょうらい)のために頑張(がんば)りたいです。",
    meaning: "अझ धेरै पढ्न र भविष्यका लागि मेहनत गर्न चाहन्छु।"
  },
  {
    id: 10,
    important: true,
    question: "将来(しょうらい)の夢(ゆめ)は何(なん)ですか。",
    nepali: "भविष्यको सपना के हो?",
    answer: "将来(しょうらい)は日本(にほん)で働(はたら)きたいです。\nいい仕事(しごと)をしたいです。",
    meaning: "भविष्यमा जापानमा राम्रो काम गर्न चाहन्छु।"
  },
  {
    id: 11,
    important: true,
    question: "卒業後(そつぎょうご)は何(なに)をしたいですか。",
    nepali: "पढाइ सकेपछि के गर्न चाहनुहुन्छ?",
    answer: "日本(にほん)で仕事(しごと)をしたいです。\n大学(だいがく)で勉強(べんきょう)したことを使(つか)いたいです。",
    meaning: "जापानमा काम गर्न र सिकेको ज्ञान प्रयोग गर्न चाहन्छु।"
  },
  {
    id: 12,
    important: false,
    question: "日本語(にほんご)は難(むずか)しいですか。",
    nepali: "जापानी भाषा गाह्रो छ?",
    answer: "はい、少(すこ)し難(むずか)しいです。\nでも、おもしろいです。",
    meaning: "हो, अलि गाह्रो छ। तर रमाइलो छ।"
  },
  {
    id: 13,
    important: true,
    question: "日本語(にほんご)をどのくらい勉強(べんきょう)しましたか。",
    nepali: "जापानी भाषा कति समय पढ्नुभयो?",
    answer: "〇年(ねん)ぐらい勉強(べんきょう)しました。\n今(いま)も毎日(まいにち)勉強(べんきょう)しています。",
    meaning: "करिब ... वर्ष पढेको छु। अहिले पनि दैनिक पढ्दै छु।"
  },
  {
    id: 14,
    important: true,
    question: "日本語能力試験(にほんごのうりょくしけん)を受(う)けましたか。",
    nepali: "JLPT परीक्षा दिनुभएको छ?",
    answer: "いいえ、まだ受(う)けていません。\nこれから頑張(がんば)りたいです。",
    meaning: "अहिलेसम्म दिएको छैन। दिएको भए वास्तविक नतिजाअनुसार बदल्नुहोस्।"
  },
  {
    id: 15,
    important: false,
    question: "日本(にほん)の生活(せいかつ)はどうですか。",
    nepali: "जापानको जीवन कस्तो छ?",
    answer: "日本(にほん)の生活(せいかつ)は楽(たの)しいです。\nとても便利(べんり)です。",
    meaning: "जापानको जीवन रमाइलो र सुविधाजनक छ।"
  },
  {
    id: 16,
    important: false,
    question: "日本(にほん)のどんなところが好(す)きですか。",
    nepali: "जापानको के मन पर्छ?",
    answer: "日本(にほん)のきれいなところが好(す)きです。\n食(た)べ物(もの)も好(す)きです。",
    meaning: "मलाई जापानको सफाइ र खाना मन पर्छ।"
  },
  {
    id: 17,
    important: false,
    question: "日本(にほん)で困(こま)ったことはありますか。",
    nepali: "जापानमा समस्या भएको छ?",
    answer: "はい、あります。\n最初(さいしょ)は日本語(にほんご)が難(むずか)しかったです。\nでも、今(いま)は少(すこ)し話(はな)せます。",
    meaning: "सुरुमा जापानी गाह्रो थियो। अहिले अलिअलि बोल्न सक्छु।"
  },
  {
    id: 18,
    important: true,
    question: "あなたの長所(ちょうしょ)は何(なん)ですか。",
    nepali: "तपाईंको राम्रो पक्ष के हो?",
    answer: "私(わたし)はまじめです。\nいつも一生懸命(いっしょうけんめい)頑張(がんば)ります。",
    meaning: "म इमानदार छु। सधैँ मेहनत गर्छु।"
  },
  {
    id: 19,
    important: false,
    question: "あなたの短所(たんしょ)は何(なん)ですか。",
    nepali: "तपाईंको कमजोर पक्ष के हो?",
    answer: "少(すこ)し心配(しんぱい)しすぎます。\nでも、よく考(かんが)えて行動(こうどう)します。",
    meaning: "कहिलेकाहीँ धेरै चिन्ता गर्छु। तर सोचेर काम गर्छु।"
  },
  {
    id: 20,
    important: false,
    question: "趣味(しゅみ)は何(なん)ですか。",
    nepali: "तपाईंको Hobby के हो?",
    answer: "私(わたし)の趣味(しゅみ)は音楽(おんがく)を聞(き)くことです。",
    meaning: "मेरो Hobby संगीत सुन्नु हो।"
  },
  {
    id: 21,
    important: false,
    question: "休(やす)みの日(ひ)は何(なに)をしますか。",
    nepali: "बिदाको दिन के गर्नुहुन्छ?",
    answer: "日本語(にほんご)を勉強(べんきょう)します。\n音楽(おんがく)も聞(き)きます。",
    meaning: "जापानी पढ्छु र संगीत सुन्छु।"
  },
  {
    id: 22,
    important: true,
    question: "アルバイトをしていますか。",
    nepali: "पार्टटाइम काम गर्नुहुन्छ?",
    answer: "はい、しています。",
    meaning: "हो, गर्छु। नगर्ने भए いいえ、していません। भन्नुहोस्।"
  },
  {
    id: 23,
    important: true,
    question: "学費(がくひ)は誰(だれ)が払(はら)いますか。",
    nepali: "पढाइ खर्च कसले तिर्छ?",
    answer: "家族(かぞく)が払(はら)います。",
    meaning: "परिवारले तिर्छ। वास्तविक अवस्थाअनुसार बदल्नुहोस्।"
  },
  {
    id: 24,
    important: true,
    question: "ご家族(かぞく)は何人(なんにん)ですか。",
    nepali: "परिवारमा कति जना हुनुहुन्छ?",
    answer: "家族(かぞく)は〇人(にん)です。",
    meaning: "परिवारमा ... जना छौँ।"
  },
  {
    id: 25,
    important: false,
    question: "今(いま)、どこに住(す)んでいますか。",
    nepali: "अहिले कहाँ बस्नुहुन्छ?",
    answer: "今(いま)、千葉県(ちばけん)に住(す)んでいます。",
    meaning: "अहिले चिबा प्रिफेक्चरमा बस्छु। वास्तविक ठाउँअनुसार बदल्नुहोस्।"
  },
  {
    id: 26,
    important: true,
    question: "今(いま)、どこの学校(がっこう)で勉強(べんきょう)していますか。",
    nepali: "अहिले कुन स्कुलमा पढ्नुहुन्छ?",
    answer: "今(いま)、〇〇学校(がっこう)で勉強(べんきょう)しています。",
    meaning: "अहिले ... स्कुलमा पढ्दै छु।"
  },
  {
    id: 27,
    important: false,
    question: "学校(がっこう)は楽(たの)しいですか。",
    nepali: "स्कुल रमाइलो छ?",
    answer: "はい、とても楽(たの)しいです。\n友達(ともだち)もいます。",
    meaning: "हो, रमाइलो छ। साथीहरू पनि छन्।"
  },
  {
    id: 28,
    important: true,
    question: "大学(だいがく)に入(はい)ったら何(なに)をしますか。",
    nepali: "विश्वविद्यालयमा भर्ना भएपछि के गर्नुहुन्छ?",
    answer: "毎日(まいにち)学校(がっこう)に行(い)きます。\n一生懸命(いっしょうけんめい)勉強(べんきょう)します。",
    meaning: "हरेक दिन स्कुल जान्छु र मेहनत गरेर पढ्छु।"
  },
  {
    id: 29,
    important: false,
    question: "友達(ともだち)と一緒(いっしょ)に勉強(べんきょう)できますか。",
    nepali: "साथीसँग मिलेर पढ्न सक्नुहुन्छ?",
    answer: "はい、できます。\n友達(ともだち)と一緒(いっしょ)に頑張(がんば)ります。",
    meaning: "हो, सक्छु। साथीहरूसँग मिलेर मेहनत गर्छु।"
  },
  {
    id: 30,
    important: true,
    question: "最後(さいご)に何(なに)か質問(しつもん)はありますか。",
    nepali: "अन्तिममा केही प्रश्न छ?",
    answer: "はい。\n大学(だいがく)に入(はい)る前(まえ)に、何(なに)を勉強(べんきょう)したらいいですか。\n本日(ほんじつ)はありがとうございました。",
    meaning: "विश्वविद्यालयमा भर्ना हुनुअघि के पढ्दा राम्रो हुन्छ? आजको लागि धन्यवाद।"
  }
];

/* ========================================
   APP SETTINGS
   ======================================== */

const STORAGE_KEY = "jinan-practice-v2";
const THEME_KEY = "jinan-theme-v2";

let completed = new Set();
let currentFilter = "all";

try {
  const saved = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
  );
  if (Array.isArray(saved)) {
    completed = new Set(saved);
  }
} catch (error) {
  completed = new Set();
}

/* ========================================
   JAPANESE SPEAKER
   ======================================== */

function cleanJapanese(text) {
  return text.replace(
    /([一-龯々〆ヶ]+)\(([\u3040-\u309fー]+)\)/g,
    "$2"
  );
}

function speakJapanese(text) {
  if (!("speechSynthesis" in window)) {
    alert("Japanese Voice यो Browser मा उपलब्ध छैन।");
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(
    cleanJapanese(text)
  );

  speech.lang = "ja-JP";
  speech.rate = 0.8;
  speech.pitch = 1;

  const voices = speechSynthesis.getVoices();
  const japaneseVoice = voices.find(
    voice => voice.lang.startsWith("ja")
  );

  if (japaneseVoice) {
    speech.voice = japaneseVoice;
  }

  speechSynthesis.speak(speech);
}

/* ========================================
   PROGRESS
   ======================================== */

function updateProgress() {
  const total = questions.length;
  const done = completed.size;
  const percent = Math.round((done / total) * 100);

  document.getElementById("totalQuestions").textContent = total;
  document.getElementById("completedCount").textContent = done;
  document.getElementById("importantCount").textContent =
    questions.filter(q => q.important).length;
  document.getElementById("progressPercent").textContent =
    percent + "%";
  document.getElementById("progressText").textContent =
    done + " / " + total;
  document.getElementById("progressBar").style.width =
    percent + "%";
}

function saveProgress() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...completed])
  );
}

/* ========================================
   QUESTION CARDS
   ======================================== */

function renderQuestions() {
  const container =
    document.getElementById("questionsContainer");

  const search =
    document.getElementById("searchInput")
      .value.toLowerCase().trim();

  container.innerHTML = "";

  const filtered = questions.filter(q => {
    const text = (
      q.question + " " +
      q.nepali + " " +
      q.answer + " " +
      q.meaning
    ).toLowerCase();

    if (!text.includes(search)) return false;

    if (currentFilter === "important") {
      return q.important;
    }

    if (currentFilter === "completed") {
      return completed.has(q.id);
    }

    if (currentFilter === "remaining") {
      return !completed.has(q.id);
    }

    return true;
  });

  filtered.forEach(q => {
    const card = document.createElement("article");
    card.className =
      "question-card" + (q.important ? " important" : "");
    card.id = "question-" + q.id;

    const header = document.createElement("div");
    header.className = "question-header";

    const number = document.createElement("span");
    number.className = "question-number";
    number.textContent =
      "QUESTION " + String(q.id).padStart(2, "0");

    header.appendChild(number);

    if (q.important) {
      const tag = document.createElement("span");
      tag.className = "important-tag";
      tag.textContent = "⭐ IMPORTANT";
      header.appendChild(tag);
    }

    card.appendChild(header);

    const body = document.createElement("div");
    body.className = "question-body";

    const question = document.createElement("h3");
    question.className = "question-japanese";
    question.textContent = q.question;
    body.appendChild(question);

    const nepali = document.createElement("p");
    nepali.className = "question-nepali";
    nepali.textContent = "🇳🇵 " + q.nepali;
    body.appendChild(nepali);

    const questionSpeaker = document.createElement("button");
    questionSpeaker.className = "voice-btn";
    questionSpeaker.textContent = "🔊 Listen Question";
    questionSpeaker.onclick = () => speakJapanese(q.question);
    body.appendChild(questionSpeaker);

    const answerBox = document.createElement("div");
    answerBox.className = "answer-box";

    const label = document.createElement("div");
    label.className = "answer-label";
    label.textContent = "答(こた)え / ANSWER";
    answerBox.appendChild(label);

    const answer = document.createElement("p");
    answer.className = "answer-japanese";
    answer.textContent = q.answer;
    answerBox.appendChild(answer);

    const meaning = document.createElement("p");
    meaning.className = "answer-nepali";
    meaning.textContent = "🇳🇵 " + q.meaning;
    answerBox.appendChild(meaning);

    body.appendChild(answerBox);

    const actions = document.createElement("div");
    actions.className = "question-actions";

    const answerSpeaker = document.createElement("button");
    answerSpeaker.className = "voice-btn";
    answerSpeaker.textContent = "🔊 Listen Answer";
    answerSpeaker.onclick = () => speakJapanese(q.answer);
    actions.appendChild(answerSpeaker);

    const recordButton = document.createElement("button");
    recordButton.className = "record-btn";
    recordButton.textContent = "🎙️ Record Practice";
    recordButton.onclick = () => toggleRecording(recordButton);
    actions.appendChild(recordButton);

    const completeButton = document.createElement("button");
    completeButton.className =
      "complete-btn" + (completed.has(q.id) ? " done" : "");
    completeButton.textContent =
      completed.has(q.id)
        ? "✅ Completed"
        : "☑ Mark Completed";

    completeButton.onclick = () => {
      if (completed.has(q.id)) {
        completed.delete(q.id);
      } else {
        completed.add(q.id);
      }

      saveProgress();
      renderQuestions();
    };

    actions.appendChild(completeButton);
    body.appendChild(actions);
    card.appendChild(body);
    container.appendChild(card);
  });

  document.getElementById("visibleCount").textContent =
    filtered.length + " Questions";

  document.getElementById("emptyMessage").hidden =
    filtered.length !== 0;

  updateProgress();
}

/* ========================================
   SEARCH AND FILTERS
   ======================================== */

document.getElementById("searchInput")
  .addEventListener("input", renderQuestions);

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    renderQuestions();
  });
});

/* ========================================
   RANDOM QUESTION
   ======================================== */

document.getElementById("randomBtn")
  .addEventListener("click", () => {
    currentFilter = "all";

    document.getElementById("searchInput").value = "";

    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.toggle(
        "active",
        btn.dataset.filter === "all"
      );
    });

    renderQuestions();

    const random = questions[
      Math.floor(Math.random() * questions.length)
    ];

    document.getElementById("question-" + random.id)
      .scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
  });

/* ========================================
   RESET
   ======================================== */

document.getElementById("resetBtn")
  .addEventListener("click", () => {
    if (confirm("सबै Progress Reset गर्ने?")) {
      completed.clear();
      saveProgress();
      renderQuestions();
    }
  });

/* ========================================
   DARK MODE
   ======================================== */

const themeToggle =
  document.getElementById("themeToggle");

if (localStorage.getItem(THEME_KEY) === "dark") {
  document.body.classList.add("dark");
}

function updateTheme() {
  themeToggle.textContent =
    document.body.classList.contains("dark")
      ? "☀️"
      : "🌙";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    THEME_KEY,
    document.body.classList.contains("dark")
      ? "dark"
      : "light"
  );

  updateTheme();
});

updateTheme();

/* ========================================
   BACK TO TOP
   ======================================== */

const backToTop =
  document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display =
    window.scrollY > 350 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* ========================================
   VOICE RECORDING
   ======================================== */

let recorder = null;
let audioChunks = [];
let activeButton = null;
let microphoneStream = null;

async function toggleRecording(button) {
  if (recorder && recorder.state === "recording") {
    recorder.stop();
    return;
  }

  if (
    !navigator.mediaDevices ||
    !navigator.mediaDevices.getUserMedia ||
    typeof MediaRecorder === "undefined"
  ) {
    alert("यो Browser मा Recording उपलब्ध छैन।");
    return;
  }

  try {
    microphoneStream =
      await navigator.mediaDevices.getUserMedia({
        audio: true
      });

    audioChunks = [];
    recorder = new MediaRecorder(microphoneStream);
    activeButton = button;

    recorder.ondataavailable = event => {
      if (event.data.size > 0) {
        audioChunks.push(event.data);
      }
    };

    recorder.onstop = () => {
      const blob = new Blob(audioChunks, {
        type: recorder.mimeType
      });

      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);

      audio.play().catch(() => {
        alert("Recording सुन्न सकिएन।");
      });

      audio.onended = () => {
        URL.revokeObjectURL(url);
      };

      microphoneStream.getTracks().forEach(track => {
        track.stop();
      });

      if (activeButton && activeButton.isConnected) {
        activeButton.textContent = "🎙️ Record Practice";
      }

      activeButton = null;
      microphoneStream = null;
    };

    recorder.start();
    button.textContent = "⏹ Stop Recording";

  } catch (error) {
    console.error(error);
    alert("Microphone Permission दिनुहोस्।");
  }
}

/* ========================================
   START APPLICATION
   ======================================== */

renderQuestions();

console.log(
  "JINAN UNIVERSITY INTERVIEW APP READY"
);
