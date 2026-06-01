import { useState } from "react";

export default function SchoolThings({ goBack }) {

  const data = [
    { emoji: "📘", marathi: "पुस्तक", english: "Book" },
    { emoji: "✏️", marathi: "पेन्सिल", english: "Pencil" },
    { emoji: "📏", marathi: "पट्टी", english: "Scale" },
    { emoji: "🎒", marathi: "दप्तर", english: "Bag" },
    { emoji: "🖊️", marathi: "पेन", english: "Pen" },
  ];

  const [i, setI] = useState(0);
  const item = data[i];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-indigo-200 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">

        <div className="bg-blue-500 text-white px-5 py-4 flex justify-between">
          <button onClick={goBack} className="text-2xl">←</button>
          <h1 className="font-black">School Things</h1>
          <span>🔊</span>
        </div>

        <div className="text-center p-6 bg-blue-100">

          <div className="text-7xl">{item.emoji}</div>
          <h2 className="text-3xl font-black mt-3">{item.english}</h2>
          <p className="text-xl font-bold">{item.marathi}</p>

        </div>

        <div className="flex justify-between p-4">

          {i > 0 && (
            <button onClick={() => setI(i - 1)} className="bg-blue-500 text-white px-4 py-2 rounded-xl">
              Prev
            </button>
          )}

          {i < data.length - 1 && (
            <button onClick={() => setI(i + 1)} className="bg-green-500 text-white px-4 py-2 rounded-xl">
              Next
            </button>
          )}

        </div>

      </div>
    </div>
  );
}