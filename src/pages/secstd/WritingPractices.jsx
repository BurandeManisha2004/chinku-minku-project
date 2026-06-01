import { useState } from "react";

export default function WritingPractices({ goBack }) {

  const data = [
    {
      title: "My Name",
      prompt: "My name is ______.",
      example: "My name is Rahul.",
      emoji: "🧒"
    },
    {
      title: "My School",
      prompt: "I study in ______ school.",
      example: "I study in ABC school.",
      emoji: "🏫"
    },
    {
      title: "My Pet",
      prompt: "I have a ______.",
      example: "I have a dog.",
      emoji: "🐶"
    },
    {
      title: "My Friend",
      prompt: "My best friend is ______.",
      example: "My best friend is Riya.",
      emoji: "👫"
    },
    {
      title: "My Favorite Food",
      prompt: "My favorite food is ______.",
      example: "My favorite food is pizza.",
      emoji: "🍕"
    }
  ];

  const [index, setIndex] = useState(0);
  const item = data[index];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-100 to-orange-100 p-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-yellow-300">

        {/* TOP BAR */}
        <div className="bg-yellow-500 text-white px-5 py-4 flex justify-between items-center">
          <button onClick={goBack} className="text-2xl font-black">←</button>
          <h1 className="font-black">✏️ Writing Practice</h1>
          <span>🔊</span>
        </div>

        {/* CONTENT */}
        <div className="p-6 text-center">

          <div className="text-6xl">{item.emoji}</div>

          <h2 className="text-2xl font-black text-yellow-700 mt-3">
            {item.title}
          </h2>

          <div className="mt-5 bg-yellow-100 p-4 rounded-xl">
            <p className="font-bold text-gray-700">
              Fill in the blank:
            </p>

            <p className="text-lg font-black mt-2">
              {item.prompt}
            </p>
          </div>

          <div className="mt-4 bg-green-100 p-4 rounded-xl">
            <p className="font-bold text-green-700">
              Example:
            </p>
            <p className="font-black text-green-800">
              {item.example}
            </p>
          </div>

        </div>

        {/* NAV */}
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
              className="bg-yellow-500 h-3 rounded-full"
              style={{
                width: `${((index + 1) / data.length) * 100}%`
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}