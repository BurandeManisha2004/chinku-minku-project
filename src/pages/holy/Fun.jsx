import { useMemo, useState } from "react";

export default function Fun({ goBack }) {

  const data = [
    { marathi: "सफरचंद", en: "Apple" },
    { marathi: "केळे", en: "Banana" },
    { marathi: "कुत्रा", en: "Dog" },
    { marathi: "मांजर", en: "Cat" },
    { marathi: "गाय", en: "Cow" },
    { marathi: "पाणी", en: "Water" },
    { marathi: "झाड", en: "Tree" },
    { marathi: "घर", en: "House" },
    { marathi: "पुस्तक", en: "Book" },
    { marathi: "शाळा", en: "School" }
  ];

  const [game, setGame] = useState(null);

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [msg, setMsg] = useState("");
  const [options, setOptions] = useState([]);

  const [selectedM, setSelectedM] = useState(null);
  const [matched, setMatched] = useState([]);

  // ✅ FIXED shuffle (won’t change every render)
  const shuffledEnglish = useMemo(() => {
    return [...data.map(d => d.en)].sort(() => 0.5 - Math.random());
  }, []);

  const startMCQ = () => {
    setGame("mcq");
    setIndex(0);
    setScore(0);
    setMsg("");
    setMatched([]);
    setOptions(getOptions(0));
  };

  const getOptions = (i) => {
    const current = data[i];

    const wrong = data
      .filter(x => x.en !== current.en)
      .slice(0, 3)
      .map(x => x.en);

    return [...wrong, current.en].sort(() => 0.5 - Math.random());
  };

  const handleMCQ = (opt) => {
    const current = data[index];

    if (opt === current.en) {
      setScore(prev => prev + 1);
      setMsg("🎉 Correct!");

      setTimeout(() => {
        setMsg("");
        const next = index + 1;

        if (next < data.length) {
          setIndex(next);
          setOptions(getOptions(next));
        } else {
          setGame("end");
        }
      }, 600);

    } else {
      setMsg("❌ Try Again!");
      setTimeout(() => setMsg(""), 600);
    }
  };

  const handleMatch = (marathi, english) => {
    const correct = data.find(d => d.marathi === marathi)?.en;

    if (correct === english) {
      setMatched(prev => [...prev, marathi]);
      setMsg("🎉 Correct!");
    } else {
      setMsg("❌ Wrong!");
    }

    setSelectedM(null);
    setTimeout(() => setMsg(""), 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-pink-100 p-4">

      {/* HEADER */}
      <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow">

        <button onClick={goBack} className="font-bold text-blue-600">
          ← Back
        </button>

        <h1 className="font-black text-xl text-pink-500">
          🎮 Fun Game
        </h1>

        <div className="font-bold text-green-600">
          ⭐ {score + matched.length}
        </div>

      </div>

      {/* MENU */}
      {!game && (
        <div className="mt-10 grid gap-6">

          <button
            onClick={startMCQ}
            className="bg-white p-6 rounded-3xl shadow font-black text-xl"
          >
            📚 MCQ Quiz
          </button>

          <button
            onClick={() => setGame("match")}
            className="bg-white p-6 rounded-3xl shadow font-black text-xl"
          >
            🔗 Match Game
          </button>

        </div>
      )}

      {/* MCQ */}
      {game === "mcq" && data[index] && (
        <>
          <div className="mt-8 bg-white p-6 rounded-3xl shadow text-center">
            <h2 className="text-2xl font-black">Marathi Word</h2>
            <div className="text-4xl mt-3 font-black text-blue-600">
              {data[index].marathi}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleMCQ(opt)}
                className="bg-white p-4 rounded-2xl shadow font-bold"
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="text-center mt-4 font-bold">
            {index + 1} / {data.length}
          </div>

          {msg && <div className="text-center mt-4 text-2xl">{msg}</div>}
        </>
      )}

      {/* MATCH */}
      {game === "match" && (
        <div className="grid grid-cols-2 gap-4 mt-6">

          <div>
            {data.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedM(item.marathi)}
                className="p-4 mb-2 bg-white rounded-xl shadow cursor-pointer"
              >
                {item.marathi}
              </div>
            ))}
          </div>

          <div>
            {shuffledEnglish.map((en, i) => (
              <div
                key={i}
                onClick={() => selectedM && handleMatch(selectedM, en)}
                className="p-4 mb-2 bg-white rounded-xl shadow cursor-pointer"
              >
                {en}
              </div>
            ))}
          </div>

        </div>
      )}

      {/* END */}
      {game === "end" && (
        <div className="text-center mt-20 bg-white p-8 rounded-3xl shadow">
          <h1 className="text-3xl font-black text-green-600">
            🎉 Completed!
          </h1>

          <button
            onClick={() => setGame(null)}
            className="mt-5 bg-blue-500 text-white px-6 py-3 rounded-full"
          >
            🔄 Play Again
          </button>
          <button></button>
        </div>
      )}

    </div>
  );
}