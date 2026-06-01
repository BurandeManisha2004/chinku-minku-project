import { useState } from "react";

export default function AnimalsActions({ goBack }) {

  const data = [
    {
      animalMarathi: "कुत्रा",
      animalEnglish: "Dog",
      sentenceMarathi: "कुत्रा धावत आहे.",
      sentenceEnglish: "The dog is running.",
      emoji: "🐶",
    },
    {
      animalMarathi: "मांजर",
      animalEnglish: "Cat",
      sentenceMarathi: "मांजर झोपत आहे.",
      sentenceEnglish: "The cat is sleeping.",
      emoji: "🐱",
    },
    {
      animalMarathi: "गाय",
      animalEnglish: "Cow",
      sentenceMarathi: "गाय गवत खात आहे.",
      sentenceEnglish: "The cow is eating grass.",
      emoji: "🐄",
    },
    {
      animalMarathi: "पक्षी",
      animalEnglish: "Bird",
      sentenceMarathi: "पक्षी आकाशात उडत आहे.",
      sentenceEnglish: "The bird is flying in the sky.",
      emoji: "🐦",
    },
    {
      animalMarathi: "घोडा",
      animalEnglish: "Horse",
      sentenceMarathi: "घोडा वेगाने धावत आहे.",
      sentenceEnglish: "The horse is running fast.",
      emoji: "🐎",
    },
    {
      animalMarathi: "माकड",
      animalEnglish: "Monkey",
      sentenceMarathi: "माकड झाडावर उडी मारत आहे.",
      sentenceEnglish: "The monkey is jumping on the tree.",
      emoji: "🐒",
    },
  ];

  const [index, setIndex] = useState(0);
  const item = data[index];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-blue-200 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-green-300">

        {/* TOP BAR */}
        <div className="bg-green-500 text-white px-5 py-4 flex justify-between items-center">

          <button
            onClick={goBack}
            className="text-2xl font-black"
          >
            ←
          </button>

          <h1 className="font-black text-lg">
            Animals & Actions 🐾
          </h1>

          <span className="animate-pulse">🔊</span>
        </div>

        {/* MAIN CARD */}
        <div className="p-6 text-center">

          {/* EMOJI */}
          <div className="text-7xl mb-4">
            {item.emoji}
          </div>

          {/* ANIMAL NAME */}
          <h2 className="text-3xl font-black text-green-700">
            {item.animalEnglish}
          </h2>

          <p className="text-lg font-bold text-gray-600">
            {item.animalMarathi}
          </p>

          {/* SENTENCE BOX */}
          <div className="mt-5 bg-green-50 rounded-2xl p-5 shadow space-y-3">

            {/* ENGLISH SENTENCE */}
            <p className="text-xl font-black text-gray-800">
              {item.sentenceEnglish}
            </p>

            {/* MARATHI SENTENCE */}
            <p className="text-lg font-bold text-gray-600">
              {item.sentenceMarathi}
            </p>

          </div>

        </div>

        {/* NAVIGATION */}
        <div className="flex justify-between p-4">

          {index > 0 && (
            <button
              onClick={() => setIndex(index - 1)}
              className="bg-pink-500 text-white px-4 py-2 rounded-xl font-black"
            >
              ⬅ Previous
            </button>
          )}

          {index < data.length - 1 && (
            <button
              onClick={() => setIndex(index + 1)}
              className="bg-green-600 text-white px-4 py-2 rounded-xl font-black"
            >
              Next ➡
            </button>
          )}

        </div>

        {/* PROGRESS */}
        <div className="px-5 pb-5">

          <div className="text-sm font-bold text-gray-600">
            Progress: {index + 1}/{data.length}
          </div>

          <div className="w-full bg-gray-200 h-3 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-green-500 h-3 rounded-full transition-all duration-300"
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