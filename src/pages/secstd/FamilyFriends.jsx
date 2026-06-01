import { useState } from "react";

export default function FamilyFriends({ goBack }) {

  const data = [
    {
      emoji: "👨",
      marathi: "वडील",
      english: "Father",
      meaning: "He takes care of me",
      color: "from-blue-400 to-blue-200",
    },
    {
      emoji: "👩",
      marathi: "आई",
      english: "Mother",
      meaning: "She loves me very much",
      color: "from-pink-400 to-pink-200",
    },
    {
      emoji: "👴",
      marathi: "आजोबा",
      english: "Grandfather",
      meaning: "He tells me stories",
      color: "from-yellow-400 to-yellow-200",
    },
    {
      emoji: "👵",
      marathi: "आज्जी",
      english: "Grandmother",
      meaning: "She gives me love and food",
      color: "from-green-400 to-green-200",
    },
    {
      emoji: "🧑‍🦱",
      marathi: "भाऊ",
      english: "Brother",
      meaning: "He plays with me",
      color: "from-purple-400 to-purple-200",
    },
    {
      emoji: "👧",
      marathi: "बहीण",
      english: "Sister",
      meaning: "She is my best friend",
      color: "from-red-400 to-red-200",
    },
    {
      emoji: "🧑‍🤝‍🧑",
      marathi: "मित्र",
      english: "Friend",
      meaning: "We play together",
      color: "from-cyan-400 to-cyan-200",
    },
  ];

  const [index, setIndex] = useState(0);

  const item = data[index];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-blue-200 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-sky-300">

        {/* TOP BAR */}
        <div className="bg-blue-500 text-white px-5 py-4 flex justify-between items-center">

          <button
            onClick={goBack}
            className="text-2xl font-black hover:scale-110 duration-300"
          >
            ←
          </button>

          <h1 className="font-black text-lg">
            Family & Friends 👨‍👩‍👧
          </h1>

          <span className="text-xl animate-pulse">🔊</span>

        </div>

        {/* MAIN CARD */}
        <div className={`p-6 text-center bg-gradient-to-b ${item.color}`}>

          {/* EMOJI */}
          <div className="text-7xl mb-3 animate-bounce">
            {item.emoji}
          </div>

          {/* ENGLISH WORD */}
          <h2 className="text-3xl font-black text-white drop-shadow">
            {item.english}
          </h2>

          {/* MARATHI WORD */}
          <p className="text-xl font-bold text-white mt-1">
            {item.marathi}
          </p>

          {/* MEANING BOX */}
          <div className="mt-4 bg-white/90 rounded-2xl p-4 shadow-md">
            <p className="text-lg font-bold text-gray-800">
              {item.meaning}
            </p>
          </div>

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

        {/* STARS */}
        <div className="flex justify-center gap-2 text-2xl pb-4">
          <span>⭐</span>
          <span>🌈</span>
          <span>🎉</span>
        </div>

      </div>
    </div>
  );
}