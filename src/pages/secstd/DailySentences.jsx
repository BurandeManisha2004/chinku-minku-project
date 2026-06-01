import { useState } from "react";

export default function DailySentences({ goBack }) {

  const sentences = [
    {
      marathi: "मी शाळेत जातो.",
      english: "I go to school.",
      emoji: "🏫",
      bg: "from-pink-500 to-pink-200",
    },
    {
      marathi: "मला आंबा आवडतो.",
      english: "I like mango.",
      emoji: "🥭",
      bg: "from-yellow-500 to-yellow-200",
    },
    {
      marathi: "ती नाचते.",
      english: "She dances.",
      emoji: "💃",
      bg: "from-purple-500 to-pink-300",
    },
    {
      marathi: "तो क्रिकेट खेळतो.",
      english: "He plays cricket.",
      emoji: "🏏",
      bg: "from-blue-500 to-blue-200",
    },
    {
      marathi: "हे माझे पुस्तक आहे.",
      english: "This is my book.",
      emoji: "📘",
      bg: "from-cyan-500 to-cyan-200",
    },
    {
      marathi: "कुत्रा धावत आहे.",
      english: "The dog is running.",
      emoji: "🐶",
      bg: "from-green-500 to-green-200",
    },
    {
      marathi: "आई स्वयंपाक करते.",
      english: "Mother cooks food.",
      emoji: "👩‍🍳",
      bg: "from-orange-500 to-orange-200",
    },
    {
      marathi: "मला दूध आवडते.",
      english: "I like milk.",
      emoji: "🥛",
      bg: "from-indigo-500 to-indigo-200",
    },
    {
      marathi: "आम्ही मित्र आहोत.",
      english: "We are friends.",
      emoji: "🧑‍🤝‍🧑",
      bg: "from-red-500 to-red-200",
    },
    {
      marathi: "बाळ झोपले आहे.",
      english: "The baby is sleeping.",
      emoji: "👶",
      bg: "from-teal-500 to-teal-200",
    },
  ];

  const [current, setCurrent] = useState(0);
  const item = sentences[current];

  const nextCard = () => {
    if (current < sentences.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevCard = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  // ⭐ VOICE FUNCTION
  const speak = () => {
    const text = `${item.marathi}. ${item.english}`;

    const utterance = new SpeechSynthesisUtterance(text);

    // optional settings (child-friendly)
    utterance.lang = "en-IN"; // works for English + Indian accent
    utterance.rate = 0.9;     // slightly slow for kids
    utterance.pitch = 1.1;    // a bit fun voice

    window.speechSynthesis.cancel(); // stop previous speech
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-sky-200 flex justify-center items-center p-4">

      <div className="w-full max-w-md bg-[#eefcff] rounded-3xl shadow-2xl overflow-hidden border-4 border-sky-300">

        {/* TOP BAR */}
        <div className="bg-blue-500 text-white px-5 py-4 flex items-center justify-between">

          <button onClick={goBack} className="text-xl font-black">
            ←
          </button>

          <h1 className="font-black text-xl">
            Daily Sentences
          </h1>

          {/* 🔊 VOICE BUTTON */}
          <button
            onClick={speak}
            className="text-2xl active:scale-90 transition"
          >
            🔊
          </button>

        </div>

        {/* CONTENT */}
        <div className="p-5">

          {/* CARD */}
          <div
            className={`bg-gradient-to-b ${item.bg} rounded-3xl p-6 shadow-xl text-center duration-500`}
          >

            <div className="text-7xl mb-4 animate-bounce">
              {item.emoji}
            </div>

            <h2 className="text-3xl font-black text-white leading-snug">
              {item.marathi}
            </h2>

            <div className="bg-white/80 rounded-2xl p-4 mt-5">

              <p className="text-2xl font-black text-gray-800">
                {item.english}
              </p>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex justify-between mt-6 gap-3">

            {current > 0 && (
              <button
                onClick={prevCard}
                className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-2xl font-black shadow-lg"
              >
                ⬅ Previous
              </button>
            )}

            {current < sentences.length - 1 && (
              <button
                onClick={nextCard}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl font-black shadow-lg"
              >
                Next ➡
              </button>
            )}

          </div>

          {/* PROGRESS */}
          <div className="mt-6">

            <div className="flex justify-between mb-2">
              <p className="font-bold text-blue-700">
                Learning Progress
              </p>

              <p className="font-black text-blue-700">
                {current + 1}/{sentences.length}
              </p>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">

              <div
                className="bg-yellow-400 h-full rounded-full"
                style={{
                  width: `${((current + 1) / sentences.length) * 100}%`
                }}
              ></div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}