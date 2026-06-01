import { useState } from "react";

export default function Quiz({ goBack }) {

  const questions = [
    {
      q: "Apple means?",
      options: ["सफरचंद", "कुत्रा", "शाळा"],
      answer: "सफरचंद"
    },
    {
      q: "Dog means?",
      options: ["मांजर", "कुत्रा", "पुस्तक"],
      answer: "कुत्रा"
    },
    {
      q: "School means?",
      options: ["घर", "शाळा", "खेळ"],
      answer: "शाळा"
    },
    {
      q: "Book means?",
      options: ["पुस्तक", "गाडी", "झाड"],
      answer: "पुस्तक"
    },
    {
      q: "Cat means?",
      options: ["मांजर", "हत्ती", "फळ"],
      answer: "मांजर"
    }
  ];

  const [index, setIndex] = useState(0);
  const [chocolates, setChocolates] = useState(0);
  const [msg, setMsg] = useState("");

  const current = questions[index];

  const checkAnswer = (opt) => {

    if (opt === current.answer) {
      setChocolates(c => c + 1);
      setMsg("🎉 Correct! +1 Chocolate 🍫");
    } else {
      setMsg("❌ Wrong! Try again");
    }

    setTimeout(() => {
      if (index < questions.length - 1) {
        setIndex(i => i + 1);
      } else {
        setIndex(0);
      }
      setMsg("");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 to-pink-200 flex justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border-4 border-yellow-300 overflow-hidden">

        {/* TOP BAR */}
        <div className="bg-yellow-500 text-white px-5 py-4 flex justify-between items-center">

          <button onClick={goBack} className="text-2xl font-black">
            ←
          </button>

          <h1 className="font-black text-lg">
            🏆 Final Quiz
          </h1>

          <div className="font-black">
            🍫 {chocolates}
          </div>

        </div>

        {/* HEADER */}
        <div className="text-center p-4">
          <h2 className="text-xl font-black text-yellow-700">
            Answer & Win Chocolates 🎉
          </h2>
          <p className="text-gray-600 text-sm">
            Choose correct answer
          </p>
        </div>

        {/* QUESTION */}
        <div className="p-5 text-center">

          <h2 className="text-lg font-black mb-4">
            {current.q}
          </h2>

          <div className="space-y-3">
            {current.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => checkAnswer(opt)}
                className="w-full bg-blue-100 p-3 rounded-xl font-bold active:scale-95"
              >
                {opt}
              </button>
            ))}
          </div>

          {msg && (
            <p className="mt-4 font-bold text-purple-700">
              {msg}
            </p>
          )}

        </div>

        {/* FOOTER */}
        <div className="text-center p-3 text-sm text-gray-500">
          🎯 Learn • Play • Win 🍫
        </div>

      </div>
    </div>
  );
}