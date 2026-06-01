import { useState, useEffect } from "react";

export default function Pronouns({ goBack }) {

  const pronouns = [
    { word: "I", marathi: "मी", emoji: "😊", sentence: "I am happy.", bg: "from-pink-500 to-pink-200" },
    { word: "You", marathi: "तू / तुम्ही", emoji: "😄", sentence: "You are smart.", bg: "from-yellow-400 to-yellow-200" },
    { word: "He", marathi: "तो", emoji: "👦", sentence: "He is playing.", bg: "from-blue-500 to-blue-200" },
    { word: "She", marathi: "ती", emoji: "👧", sentence: "She is dancing.", bg: "from-purple-500 to-pink-300" },
    { word: "It", marathi: "ते", emoji: "🐶", sentence: "It is running.", bg: "from-green-500 to-green-200" },
    { word: "We", marathi: "आपण / आम्ही", emoji: "👨‍👩‍👧", sentence: "We are friends.", bg: "from-cyan-500 to-cyan-200" },
    { word: "They", marathi: "ते", emoji: "🧑‍🤝‍🧑", sentence: "They are playing.", bg: "from-orange-500 to-orange-200" },
    { word: "This", marathi: "हे", emoji: "📘", sentence: "This is my book.", bg: "from-red-500 to-red-200" },
    { word: "That", marathi: "ते", emoji: "🏠", sentence: "That is a house.", bg: "from-indigo-500 to-indigo-200" },
    { word: "These", marathi: "ही", emoji: "📚", sentence: "These are books.", bg: "from-teal-500 to-teal-200" },
    { word: "Those", marathi: "ती", emoji: "🌳", sentence: "Those are trees.", bg: "from-emerald-500 to-emerald-200" },
  ];

  const [current, setCurrent] = useState(0);

  const item = pronouns[current];

  // 🔊 ONLY WORD SOUND
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  // auto speak ONLY WORD when card changes
  useEffect(() => {
    speak(item.word);
  }, [current]);

  const nextCard = () => {
    if (current < pronouns.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevCard = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="min-h-screen bg-sky-200 flex justify-center items-center p-4">

      <div className="w-full max-w-md bg-[#eefcff] rounded-3xl shadow-2xl overflow-hidden border-4 border-sky-300">

        {/* TOP BAR */}
        <div className="bg-blue-500 text-white px-5 py-4 flex items-center justify-between">

          <button onClick={goBack} className="text-xl font-black">
            ←
          </button>

          <h1 className="font-black text-xl">Pronouns</h1>

          {/* 🔊 SOUND BUTTON */}
          <button
            onClick={() => speak(item.word)}
            className="text-2xl animate-pulse"
          >
            🔊
          </button>

        </div>

        {/* CONTENT */}
        <div className="p-5">

          <div className={`bg-gradient-to-b ${item.bg} rounded-3xl p-6 shadow-xl text-center`}>

            <div className="text-7xl mb-4">{item.emoji}</div>

            <h2 className="text-5xl font-black text-white drop-shadow-lg">
              {item.word}
            </h2>

            <p className="text-2xl font-bold text-white mt-2">
              {item.marathi}
            </p>

            <div className="bg-white/80 rounded-2xl p-4 mt-5">
              <p className="text-lg font-black text-gray-800">
                {item.sentence}
              </p>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex justify-between mt-6 gap-3">

            {current > 0 && (
              <button
                onClick={prevCard}
                className="flex-1 bg-pink-500 text-white py-3 rounded-2xl font-black"
              >
                ⬅ Previous
              </button>
            )}

            {current < pronouns.length - 1 && (
              <button
                onClick={nextCard}
                className="flex-1 bg-green-500 text-white py-3 rounded-2xl font-black"
              >
                Next ➡
              </button>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}0