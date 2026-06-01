import { useState } from "react";

export default function MyDay({ goBack }) {

  const data = [
    {
      emoji: "🌅",
      marathi: "मी सकाळी उठतो",
      english: "I wake up in the morning",
      color: "from-yellow-300 to-orange-200",
    },
    {
      emoji: "🪥",
      marathi: "मी दात घासतो",
      english: "I brush my teeth",
      color: "from-blue-300 to-sky-200",
    },
    {
      emoji: "🍳",
      marathi: "मी नाश्ता करतो",
      english: "I eat breakfast",
      color: "from-pink-300 to-red-200",
    },
    {
      emoji: "🏫",
      marathi: "मी शाळेत जातो",
      english: "I go to school",
      color: "from-purple-300 to-indigo-200",
    },
    {
      emoji: "📚",
      marathi: "मी अभ्यास करतो",
      english: "I study",
      color: "from-green-300 to-emerald-200",
    },
    {
      emoji: "🎮",
      marathi: "मी खेळतो",
      english: "I play games",
      color: "from-cyan-300 to-sky-200",
    },
    {
      emoji: "🍽️",
      marathi: "मी जेवण करतो",
      english: "I eat lunch/dinner",
      color: "from-orange-300 to-yellow-200",
    },
    {
      emoji: "🌙",
      marathi: "मी झोपतो",
      english: "I sleep at night",
      color: "from-indigo-400 to-purple-300",
    },
  ];

  const [index, setIndex] = useState(0);

  const item = data[index];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-blue-200 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-200">

        {/* TOP BAR */}
        <div className="bg-blue-500 text-white px-5 py-4 flex items-center justify-between">

          <button
            onClick={goBack}
            className="text-2xl font-black hover:scale-110 duration-300"
          >
            ←
          </button>

          <h1 className="font-black text-lg">
            My Day 🌞
          </h1>

          <span className="text-xl animate-pulse">🔊</span>
        </div>

        {/* MAIN CARD */}
        <div className={`p-6 text-center bg-gradient-to-b ${item.color}`}>

          <div className="text-7xl mb-4 animate-bounce">
            {item.emoji}
          </div>

          <h2 className="text-2xl font-black text-white drop-shadow">
            {item.english}
          </h2>

          <p className="text-lg font-bold text-white mt-2">
            {item.marathi}
          </p>

          {/* small hint */}
          <p className="text-xs text-white/80 mt-3">
            Learn daily routine step by step ✨
          </p>

        </div>

        {/* NAVIGATION */}
        <div className="flex justify-between p-4 gap-3">

          {index > 0 && (
            <button
              onClick={() => setIndex(index - 1)}
              className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-black py-2 rounded-xl shadow"
            >
              ⬅ Previous
            </button>
          )}

          {index < data.length - 1 && (
            <button
              onClick={() => setIndex(index + 1)}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-black py-2 rounded-xl shadow"
            >
              Next ➡
            </button>
          )}

        </div>

        {/* PROGRESS BAR */}
        <div className="px-5 pb-5">

          <div className="flex justify-between text-sm font-bold text-gray-700">
            <span>Progress</span>
            <span>{index + 1}/{data.length}</span>
          </div>

          <div className="w-full bg-gray-200 h-3 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full transition-all duration-300"
              style={{
                width: `${((index + 1) / data.length) * 100}%`
              }}
            />
          </div>
        </div>

        {/* BOTTOM DECORATION */}
        <div className="flex justify-center gap-2 text-2xl pb-4">
          <span>🌈</span>
          <span>⭐</span>
          <span>🎉</span>
        </div>

      </div>
    </div>
  );
}