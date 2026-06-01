import { useState } from "react";

export default function Opposites({ goBack }) {

  const data = [
    { a: "Big", b: "Small", marathiA: "मोठा", marathiB: "लहान", emoji: "🏀🪀", color: "from-pink-400 to-pink-200" },
    { a: "Hot", b: "Cold", marathiA: "गरम", marathiB: "थंड", emoji: "🔥🧊", color: "from-red-400 to-blue-200" },
    { a: "Day", b: "Night", marathiA: "दिवस", marathiB: "रात्र", emoji: "🌞🌙", color: "from-yellow-300 to-indigo-300" },
    { a: "Fast", b: "Slow", marathiA: "वेगवान", marathiB: "हळू", emoji: "🚀🐢", color: "from-green-400 to-lime-200" },
    { a: "Happy", b: "Sad", marathiA: "आनंदी", marathiB: "दु:खी", emoji: "😊😢", color: "from-purple-400 to-blue-200" },
    { a: "Up", b: "Down", marathiA: "वर", marathiB: "खाली", emoji: "⬆️⬇️", color: "from-orange-400 to-yellow-200" },
  ];

  const [index, setIndex] = useState(0);
  const item = data[index];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-300 to-blue-200 p-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-300">

        {/* TOP BAR */}
        <div className="bg-blue-500 text-white px-5 py-4 flex justify-between">
          <button onClick={goBack} className="text-2xl font-black">←</button>
          <h1 className="font-black">Opposites ⚡</h1>
          <span>🔊</span>
        </div>

        {/* CARD */}
        <div className={`p-6 text-center bg-gradient-to-b ${item.color}`}>
          <div className="text-6xl mb-4">{item.emoji}</div>

          <h2 className="text-3xl font-black text-white">
            {item.a} ↔ {item.b}
          </h2>

          <p className="text-white font-bold mt-2">
            {item.marathiA} ↔ {item.marathiB}
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-between p-4">

          {index > 0 && (
            <button
              onClick={() => setIndex(index - 1)}
              className="bg-pink-500 text-white px-4 py-2 rounded-xl font-black"
            >
              Previous
            </button>
          )}

          {index < data.length - 1 && (
            <button
              onClick={() => setIndex(index + 1)}
              className="bg-green-500 text-white px-4 py-2 rounded-xl font-black"
            >
              Next
            </button>
          )}

        </div>

        {/* PROGRESS */}
        <div className="px-5 pb-5">
          <div className="text-sm font-bold">
            {index + 1}/{data.length}
          </div>

          <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
            <div
              className="bg-blue-500 h-3 rounded-full"
              style={{ width: `${((index + 1) / data.length) * 100}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}