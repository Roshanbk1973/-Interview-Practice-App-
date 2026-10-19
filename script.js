/* =====================================
   JINAN UNIVERSITY INTERVIEW PRACTICE
   JAVASCRIPT
   ===================================== */

"use strict";

// =====================================
// INTERVIEW QUESTIONS DATABASE
// =====================================

const questions = [

  {
    id: 1,
    important: true,
    question: "自己紹介(じこしょうかい)をお願(ねが)いします。",
    nepali: "आफ्नो परिचय दिनुहोस्।",
    answer:
      "はじめまして。\n" +
      "私(わたし)の名前(なまえ)はヤダブ・スレンドラ・クマルです。\n" +
      "ネパールから来(き)ました。\n" +
      "今(いま)、日本(にほん)で勉強(べんきょう)しています。\n" +
      "どうぞよろしくお願(ねが)いします。",
    meaning:
      "नमस्कार। मेरो नाम यादव सुरेन्द्र कुमार हो। " +
      "म नेपालबाट आएको हुँ। अहिले जापानमा पढ्दै छु। धन्यवाद।"
  },

  {
    id: 2,
    important: true,
    question: "お名前(なまえ)は何(なん)ですか。",
    nepali: "तपाईंको नाम के हो?",
    answer:
      "私(わたし)の名前(なまえ)は" +
      "ヤダブ・スレンドラ・クマルです。",
    meaning: "मेरो नाम यादव सुरेन्द्र कुमार हो।"
  },

  {
    id: 3,
    important: true,
    question: "生年月日(せいねんがっぴ)を教(おし)えてください。",
    nepali: "जन्ममिति भन्नुहोस्।",
    answer:
      "1998年(せんきゅうひゃくきゅうじゅうはちねん)" +
      "7月(しちがつ)19日(じゅうくにち)です。",
    meaning: "मेरो जन्ममिति सन् 1998 जुलाई 19 हो।"
  },

  {
    id: 4,
    important: false,
    question: "何歳(なんさい)ですか。",
    nepali: "तपाईं कति वर्षको हुनुहुन्छ?",
    answer:
      "28歳(にじゅうはっさい)です。",
    meaning: "म २८ वर्षको हुँ।"
  },

  {
    id: 5,
    important: true,
    question: "どこの国(くに)から来(き)ましたか。",
    nepali: "कुन देशबाट आउनुभएको हो?",
    answer:
      "ネパールから来(き)ました。",
    meaning: "म नेपालबाट आएको हुँ।"
  },

  {
    id: 6,
    important: true,
    question: "なぜ日本(にほん)に来(き)ましたか。",
    nepali: "जापान किन आउनुभयो?",
    answer:
      "日本(にほん)で勉強(べんきょう)したいからです。\n" +
      "日本(にほん)の文化(ぶんか)も好(す)きです。",
    meaning:
      "म जापानमा पढ्न चाहन्छु। " +
      "मलाई जापानी संस्कृति पनि मन पर्छ।"
  },

  {
    id: 7,
    important: true,
    question:
      "なぜこの大学(だいがく)に入(はい)りたいですか。",
    nepali: "यो विश्वविद्यालयमा किन पढ्न चाहनुहुन्छ?",
    answer:
      "この大学(だいがく)でたくさん勉強(べんきょう)したいです。\n" +
      "新(あたら)しいことを学(まな)びたいです。",
    meaning:
      "यो विश्वविद्यालयमा धेरै पढ्न र नयाँ कुरा सिक्न चाहन्छु।"
  },

  {
    id: 8,
    important: true,
    question:
      "大学(だいがく)で何(なに)を勉強(べんきょう)したいですか。",
    nepali: "विश्वविद्यालयमा के पढ्न चाहनुहुन्छ?",
    answer:
      "ビジネスを勉強(べんきょう)したいです。\n" +
      "日本語(にほんご)ももっと勉強(べんきょう)したいです。",
    meaning:
      "म Business र जापानी भाषा पढ्न चाहन्छु। " +
      "आवेदन गरेको वास्तविक विषयअनुसार यो उत्तर बदल्नुहोस्।"
  },

  {
    id: 9,
    important: true,
    question:
      "なぜ大学(だいがく)に行(い)きたいですか。",
    nepali: "विश्वविद्यालय किन जान चाहनुहुन्छ?",
    answer:
      "もっと勉強(べんきょう)したいからです。\n" +
      "将来(しょうらい)のために頑張(がんば)りたいです。",
    meaning:
      "म अझ धेरै पढ्न चाहन्छु। " +
      "भविष्यका लागि मेहनत गर्न चाहन्छु।"
  },

  {
    id: 10,
    important: true,
    question:
      "将来(しょうらい)の夢(ゆめ)は何(なん)ですか。",
    nepali: "भविष्यको सपना के हो?",
    answer:
      "将来(しょうらい)は日本(にほん)で働(はたら)きたいです。\n" +
      "いい仕事(しごと)をしたいです。",
    meaning:
      "भविष्यमा जापानमा राम्रो काम गर्न चाहन्छु।"
  },

  {
    id: 11,
    important: true,
    question:
      "卒業後(そつぎょうご)は何(なに)をしたいですか。",
    nepali: "पढाइ सकेपछि के गर्न चाहनुहुन्छ?",
    answer:
      "日本(にほん)で仕事(しごと)をしたいです。\n" +
      "大学(だいがく)で勉強(べんきょう)したことを使(つか)いたいです。",
    meaning:
      "जापानमा काम गर्न र विश्वविद्यालयमा सिकेको ज्ञान प्रयोग गर्न चाहन्छु।"
  },

  {
    id: 12,
    important: false,
    question:
      "日本語(にほんご)は難(むずか)しいですか。",
    nepali: "जापानी भाषा गाह्रो छ?",
    answer:
      "はい、少(すこ)し難(むずか)しいです。\n" +
      "でも、おもしろいです。",
    meaning:
      "हो, अलि गाह्रो छ। तर रमाइलो छ।"
  },

  {
    id: 13,
    important: true,
    question:
      "日本語(にほんご)をどのくらい勉強(べんきょう)しましたか。",
    nepali: "जापानी भाषा कति समय पढ्नुभयो?",
    answer:
      "〇年(ねん)ぐらい勉強(べんきょう)しました。\n" +
      "今(いま)も毎日(まいにち)勉強(べんきょう)しています。",
    meaning:
      "करिब ... वर्ष पढेको छु। अहिले पनि दैनिक पढ्दै छु।"
  },

  {
    id: 14,
    important: true,
    question:
      "日本語能力試験(にほんごのうりょくしけん)を受(う)けましたか。",
    nepali: "JLPT परीक्षा दिनुभएको छ?",
    answer:
      "いいえ、まだ受(う)けていません。\n" +
      "これから頑張(がんば)りたいです。",
    meaning:
      "अहिलेसम्म दिएको छैन। अब मेहनत गर्न चाहन्छु। " +
      "वास्तवमा परीक्षा दिएको भए उत्तर बदल्नुहोस्।"
  },

  {
    id: 15,
    important: false,
    question:
      "日本(にほん)の生活(せいかつ)はどうですか。",
    nepali: "जापानको जीवन कस्तो छ?",
    answer:
      "日本(にほん)の生活(せいかつ)は楽(たの)しいです。\n" +
      "とても便利(べんり)です。",
    meaning:
      "जापानको जीवन रमाइलो र सुविधाजनक छ।"
  },

  {
    id: 16,
    important: false,
    question:
      "日本(にほん)のどんなところが好(す)きですか。",
    nepali: "जापानको के मन पर्छ?",
    answer:
      "日本(にほん)のきれいなところが好(す)きです。\n" +
      "日本(にほん)の食(た)べ物(もの)も好(す)きです。",
    meaning:
      "मलाई जापानको सफाइ र खाना मन पर्छ।"
  },

  {
    id: 17,
    important: false,
    question:
      "日本(にほん)で困(こま)ったことはありますか。",
    nepali: "जापानमा समस्या भएको छ?",
    answer:
      "はい、あります。\n" +
      "最初(さいしょ)は日本語(にほんご)が難(むずか)しかったです。\n" +
      "でも、今(いま)は少(すこ)し話(はな)せます。",
    meaning:
      "सुरुमा जापानी भाषा गाह्रो थियो। अहिले अलिअलि बोल्न सक्छु।"
  },

  {
    id: 18,
    important: true,
    question:
      "あなたの長所(ちょうしょ)は何(なん)ですか。",
    nepali: "तपाईंको राम्रो पक्ष के हो?",
    answer:
      "私(わたし)はまじめです。\n" +
      "いつも一生懸命(いっしょうけんめい)頑張(がんば)ります。",
    meaning:
      "म इमानदार छु। सधैँ मेहनत गर्छु।"
  },

  {
    id: 19,
    important: false,
    question:
      "あなたの短所(たんしょ)は何(なん)ですか。",
    nepali: "तपाईंको कमजोर पक्ष के हो?",
    answer:
      "少(すこ)し心配(しんぱい)しすぎます。\n" +
      "でも、よく考(かんが)えて行動(こうどう)します。",
    meaning:
      "म कहिलेकाहीँ धेरै चिन्ता गर्छु। " +
      "तर राम्रोसँग सोचेर काम गर्छु।"
  },

  {
    id: 20,
    important: false,
    question:
      "趣味(しゅみ)は何(なん)ですか。",
    nepali: "तपाईंको Hobby के हो?",
    answer:
      "私(わたし)の趣味(しゅみ)は音楽(おんがく)を聞(き)くことです。",
    meaning:
      "मेरो Hobby संगीत सुन्नु हो।"
  },

  {
    id: 21,
    important: false,
    question:
      "休(やす)みの日(ひ)は何(なに)をしますか。",
    nepali: "बिदाको दिन के गर्नुहुन्छ?",
    answer:
      "日本語(にほんご)を勉強(べんきょう)します。\n" +
      "音楽(おんがく)も聞(き)きます。",
    meaning:
      "जापानी पढ्छु र संगीत सुन्छु।"
  },

  {
    id: 22,
    important: true,
    question:
      "アルバイトをしていますか。",
    nepali: "पार्टटाइम काम गर्नुहुन्छ?",
    answer:
      "はい、しています。",
    meaning:
      "हो, गर्छु। नगर्ने भए いいえ、していません। भन्नुहोस्।"
  },

  {
    id: 23,
    important: true,
    question:
      "学費(がくひ)は誰(だれ)が払(はら)いますか。",
    nepali: "पढाइ खर्च कसले तिर्छ?",
    answer:
      "家族(かぞく)が払(はら)います。",
    meaning:
      "परिवारले तिर्छ। वास्तविक अवस्थाअनुसार उत्तर बदल्नुहोस्।"
  },

  {
    id: 24,
    important: true,
    question:
      "ご家族(かぞく)は何人(なんにん)ですか。",
    nepali: "परिवारमा कति जना हुनुहुन्छ?",
    answer:
      "家族(かぞく)は〇人(にん)です。",
    meaning:
      "परिवारमा ... जना छौँ।"
  },

  {
    id: 25,
    important: false,
    question:
      "今(いま)、どこに住(す)んでいますか。",
    nepali: "अहिले कहाँ बस्नुहुन्छ?",
    answer:
      "今(いま)、千葉県(ちばけん)に住(す)んでいます。",
    meaning:
      "अहिले चिबा प्रिफेक्चरमा बस्छु। " +
      "आफ्नो वास्तविक बस्ने ठाउँअनुसार बदल्नुहोस्।"
  },

  {
    id: 26,
    important: true,
    question:
      "今(いま)、どこの学校(がっこう)で勉強(べんきょう)していますか。",
    nepali: "अहिले कुन स्कुलमा पढ्नुहुन्छ?",
    answer:
      "今(いま)、〇〇学校(がっこう)で勉強(べんきょう)しています。",
    meaning:
      "अहिले ... स्कुलमा पढ्दै छु।"
  },

  {
    id: 27,
    important: false,
    question:
      "学校(がっこう)は楽(たの)しいですか。",
    nepali: "स्कुल रमाइलो छ?",
    answer:
      "はい、とても楽(たの)しいです。\n" +
      "友達(ともだち)もいます。",
    meaning:
      "हो, धेरै रमाइलो छ। साथीहरू पनि छन्।"
  },

  {
    id: 28,
    important: true,
    question:
      "大学(だいがく)に入(はい)ったら何(なに)をしますか。",
    nepali: "विश्वविद्यालयमा भर्ना भएपछि के गर्नुहुन्छ?",
    answer:
      "毎日(まいにち)学校(がっこう)に行(い)きます。\n" +
      "一生懸命(いっしょうけんめい)勉強(べんきょう)します。",
    meaning:
      "हरेक दिन स्कुल जान्छु र मेहनत गरेर पढ्छु।"
  },

  {
    id: 29,
    important: false,
    question:
      "友達(ともだち)と一緒(いっしょ)に勉強(べんきょう)できますか。",
    nepali: "साथीसँग मिलेर पढ्न सक्नुहुन्छ?",
    answer:
      "はい、できます。\n" +
      "友達(ともだち)と一緒(いっしょ)に頑張(がんば)ります。",
    meaning:
      "हो, सक्छु। साथीहरूसँग मिलेर मेहनत गर्छु।"
  },

  {
    id: 30,
    important: true,
    question:
      "最後(さいご)に何(なに)か質問(しつもん)はありますか。",
    nepali: "अन्तिममा केही प्रश्न छ?",
    answer:
      "はい。\n" +
      "大学(だいがく)に入(はい)る前(まえ)に、" +
      "何(なに)を勉強(べんきょう)したらいいですか。\n" +
      "本日(ほんじつ)はありがとうございました。",
    meaning:
      "हो। विश्वविद्यालयमा भर्ना हुनुअघि के पढ्दा राम्रो हुन्छ? " +
      "आजको लागि धन्यवाद।"
  }

];


// =====================================
// STORAGE
// =====================================

const STORAGE_KEY = "jinan-interview-progress-v1";
const THEME_KEY = "jinan-interview-theme-v1";

function loadProgress() {
  try {
    const data = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    if (!Array.isArray(data)) return new Set();

    return new Set(
      data.filter(id =>
        Number.isInteger(id) &&
        questions.some(q => q.id === id)
      )
    );
  } catch {
    return new Set();
  }
}

let completed = loadProgress();
let currentFilter = "all";


// =====================================
// ELEMENTS
// =====================================

const container =
  document.getElementById("questionsContainer");

const searchInput =
  document.getElementById("searchInput");

const completedCount =
  document.getElementById("completedCount");

const totalQuestions =
  document.getElementById("totalQuestions");

const importantCount =
  document.getElementById("importantCount");

const progressPercent =
  document.getElementById("progressPercent");

const progressText =
  document.getElementById("progressText");

const progressBar =
  document.getElementById("progressBar");

const visibleCount =
  document.getElementById("visibleCount");

const emptyMessage =
  document.getElementById("emptyMessage");


// =====================================
// JAPANESE VOICE
// =====================================

function cleanJapanese(text) {
  return text.replace(
    /([一-龯々〆ヶ]+)\(([\u3040-\u309fー]+)\)/g,
    "$2"
  );
}

function speakJapanese(text) {

  if (!("speechSynthesis" in window)) {
    alert("यो Browser मा Japanese Voice उपलब्ध छैन।");
    return;
  }

  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(
    cleanJapanese(text)
  );

  utterance.lang = "ja-JP";
  utterance.rate = 0.82;
  utterance.pitch = 1;
  utterance.volume = 1;

  const voices = speechSynthesis.getVoices();

  const japaneseVoice = voices.find(
    voice => voice.lang.toLowerCase().startsWith("ja")
  );

  if (japaneseVoice) {
    utterance.voice = japaneseVoice;
  }

  speechSynthesis.speak(utterance);
}


// =====================================
// PROGRESS
// =====================================

function saveProgress() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...completed])
  );
}

function updateProgress() {

  const total = questions.length;
  const done = completed.size;

  const percentage = total
    ? Math.round((done / total) * 100)
    : 0;

  totalQuestions.textContent = total;

  completedCount.textContent = done;

  importantCount.textContent =
    questions.filter(q => q.important).length;

  progressPercent.textContent = percentage + "%";

  progressText.textContent = `${done} / ${total}`;

  progressBar.style.width = percentage + "%";
}


// =====================================
// CREATE HTML ELEMENT
// =====================================

function createElement(tag, className, text) {

  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;
}


// =====================================
// QUESTION CARD
// =====================================

function createQuestionCard(q) {

  const card = createElement(
    "article",
    "question-card" + (q.important ? " important" : "")
  );

  card.id = `question-${q.id}`;

  // HEADER

  const header = createElement(
    "div",
    "question-header"
  );

  header.appendChild(
    createElement(
      "span",
      "question-number",
      `QUESTION ${String(q.id).padStart(2, "0")}`
    )
  );

  if (q.important) {
    header.appendChild(
      createElement(
        "span",
        "important-tag",
        "⭐ IMPORTANT"
      )
    );
  }

  card.appendChild(header);

  // BODY

  const body = createElement(
    "div",
    "question-body"
  );

  body.appendChild(
    createElement(
      "h3",
      "question-japanese",
      q.question
    )
  );

  body.appendChild(
    createElement(
      "p",
      "question-nepali",
      "🇳🇵 " + q.nepali
    )
  );

  // QUESTION VOICE

  const questionVoice = createElement(
    "button",
    "voice-btn",
    "🔊 Listen Question"
  );

  questionVoice.type = "button";

  questionVoice.addEventListener("click", () => {
    speakJapanese(q.question);
  });

  body.appendChild(questionVoice);

  // ANSWER BOX

  const answerBox = createElement(
    "div",
    "answer-box"
  );

  answerBox.appendChild(
    createElement(
      "div",
      "answer-label",
      "答(こた)え / ANSWER"
    )
  );

  answerBox.appendChild(
    createElement(
      "p",
      "answer-japanese",
      q.answer
    )
  );

  answerBox.appendChild(
    createElement(
      "p",
      "answer-nepali",
      "🇳🇵 " + q.meaning
    )
  );

  body.appendChild(answerBox);

  // ACTION BUTTONS

  const actions = createElement(
    "div",
    "question-actions"
  );

  const answerVoice = createElement(
    "button",
    "voice-btn",
    "🔊 Listen Answer"
  );

  answerVoice.type = "button";

  answerVoice.addEventListener("click", () => {
    speakJapanese(q.answer);
  });

  actions.appendChild(answerVoice);

  // RECORDING BUTTON

  const recordButton = createElement(
    "button",
    "record-btn",
    "🎙️ Record Practice"
  );

  recordButton.type = "button";

  recordButton.addEventListener("click", () => {
    toggleRecording(recordButton);
  });

  actions.appendChild(recordButton);

  // COMPLETE BUTTON

  const completeButton = createElement(
    "button",
    "complete-btn",
    completed.has(q.id)
      ? "✅ Completed"
      : "☑ Mark Completed"
  );

  completeButton.type = "button";

  if (completed.has(q.id)) {
    completeButton.classList.add("done");
  }

  completeButton.addEventListener("click", () => {

    if (completed.has(q.id)) {
      completed.delete(q.id);
    } else {
      completed.add(q.id);
    }

    saveProgress();
    updateProgress();
    renderQuestions();

  });

  actions.appendChild(completeButton);

  body.appendChild(actions);
  card.appendChild(body);

  return card;
}


// =====================================
// SEARCH AND FILTER
// =====================================

function getFilteredQuestions() {

  const search = searchInput.value
    .trim()
    .toLowerCase();

  return questions.filter(q => {

    const searchableText = [
      q.question,
      q.nepali,
      q.answer,
      q.meaning,
      cleanJapanese(q.question),
      cleanJapanese(q.answer)
    ].join(" ").toLowerCase();

    const matchesSearch =
      searchableText.includes(search);

    let matchesFilter = true;

    if (currentFilter === "important") {
      matchesFilter = q.important;
    }

    if (currentFilter === "completed") {
      matchesFilter = completed.has(q.id);
    }

    if (currentFilter === "remaining") {
      matchesFilter = !completed.has(q.id);
    }

    return matchesSearch && matchesFilter;

  });
}


// =====================================
// RENDER QUESTIONS
// =====================================

function renderQuestions() {

  const filtered = getFilteredQuestions();

  container.replaceChildren();

  const fragment = document.createDocumentFragment();

  filtered.forEach(q => {
    fragment.appendChild(createQuestionCard(q));
  });

  container.appendChild(fragment);

  visibleCount.textContent =
    `${filtered.length} Questions`;

  emptyMessage.hidden = filtered.length > 0;

  updateProgress();
}


// =====================================
// FILTER BUTTONS
// =====================================

document.querySelectorAll(".filter-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      currentFilter = button.dataset.filter;

      document.querySelectorAll(".filter-btn")
        .forEach(btn => {
          btn.classList.remove("active");
        });

      button.classList.add("active");

      renderQuestions();

    });

  });


// =====================================
// LIVE SEARCH
// =====================================

searchInput.addEventListener("input", () => {
  renderQuestions();
});


// =====================================
// RANDOM QUESTION
// =====================================

document.getElementById("randomBtn")
  .addEventListener("click", () => {

    // Show all questions before selecting.
    currentFilter = "all";
    searchInput.value = "";

    document.querySelectorAll(".filter-btn")
      .forEach(btn => {
        btn.classList.toggle(
          "active",
          btn.dataset.filter === "all"
        );
      });

    renderQuestions();

    const randomIndex = Math.floor(
      Math.random() * questions.length
    );

    const randomQuestion = questions[randomIndex];

    const element = document.getElementById(
      `question-${randomQuestion.id}`
    );

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }

  });


// =====================================
// RESET PROGRESS
// =====================================

document.getElementById("resetBtn")
  .addEventListener("click", () => {

    const confirmed = confirm(
      "सबै अभ्यास Progress Reset गर्न चाहनुहुन्छ?"
    );

    if (!confirmed) return;

    completed.clear();

    saveProgress();
    renderQuestions();

  });


// =====================================
// DARK MODE
// =====================================

const themeToggle =
  document.getElementById("themeToggle");

const savedTheme = localStorage.getItem(THEME_KEY);

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

function updateThemeButton() {
  themeToggle.textContent =
    document.body.classList.contains("dark")
      ? "☀️"
      : "🌙";
}

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const theme =
    document.body.classList.contains("dark")
      ? "dark"
      : "light";

  localStorage.setItem(THEME_KEY, theme);

  updateThemeButton();

});

updateThemeButton();


// =====================================
// BACK TO TOP
// =====================================

const backToTop =
  document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  backToTop.style.display =
    window.scrollY > 350
      ? "block"
      : "none";

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// =====================================
// VOICE RECORDING
// =====================================

let mediaRecorder = null;
let audioChunks = [];
let recordingStream = null;
let activeRecordButton = null;

async function toggleRecording(button) {

  if (mediaRecorder && mediaRecorder.state === "recording") {

    mediaRecorder.stop();
    return;

  }

  if (
    !navigator.mediaDevices ||
    !navigator.mediaDevices.getUserMedia ||
    typeof MediaRecorder === "undefined"
  ) {
    alert(
      "यो Browser मा Recording उपलब्ध छैन। " +
      "HTTPS Website र Microphone Permission आवश्यक छ।"
    );
    return;
  }

  try {

    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true
      });

    recordingStream = stream;
    audioChunks = [];

    mediaRecorder = new MediaRecorder(stream);
    activeRecordButton = button;

    mediaRecorder.ondataavailable = event => {

      if (event.data.size > 0) {
        audioChunks.push(event.data);
      }

    };

    mediaRecorder.onstop = () => {

      const mimeType =
        mediaRecorder.mimeType || "audio/webm";

      const audioBlob = new Blob(
        audioChunks,
        { type: mimeType }
      );

      const audioURL =
        URL.createObjectURL(audioBlob);

      const audio = new Audio(audioURL);

      audio.onended = () => {
        URL.revokeObjectURL(audioURL);
      };

      audio.play().catch(() => {
        alert("Recording playback सुरु गर्न सकिएन।");
      });

      if (activeRecordButton) {
        activeRecordButton.textContent =
          "🎙️ Record Practice";
      }

      recordingStream.getTracks()
        .forEach(track => track.stop());

      recordingStream = null;
      activeRecordButton = null;

    };

    mediaRecorder.start();

    button.textContent = "⏹ Stop Recording";

  } catch (error) {

    console.error(error);

    alert(
      "Microphone Permission दिनुहोस्।"
    );

  }

}


// =====================================
// INITIALIZE APP
// =====================================

renderQuestions();

console.log(
  "JINAN UNIVERSITY INTERVIEW PRACTICE READY"
);
