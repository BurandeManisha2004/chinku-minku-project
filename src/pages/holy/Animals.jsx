export default function Animals({ goBack }) {

  const animals = [
    { marathi: "कुत्रा", name: "Dog", emoji: "🐶" },
    { marathi: "मांजर", name: "Cat", emoji: "🐱" },
    { marathi: "गाय", name: "Cow", emoji: "🐮" },
    { marathi: "सिंह", name: "Lion", emoji: "🦁" },
    { marathi: "वाघ", name: "Tiger", emoji: "🐯" },
    { marathi: "हत्ती", name: "Elephant", emoji: "🐘" },
    { marathi: "माकड", name: "Monkey", emoji: "🐵" },
    { marathi: "घोडा", name: "Horse", emoji: "🐴" },
    { marathi: "मेंढी", name: "Sheep", emoji: "🐑" },
    { marathi: "बकरी", name: "Goat", emoji: "🐐" },
    { marathi: "ससा", name: "Rabbit", emoji: "🐰" },
    { marathi: "डुक्कर", name: "Pig", emoji: "🐷" },
    { marathi: "कोल्हा", name: "Fox", emoji: "🦊" },
    { marathi: "पांडा", name: "Panda", emoji: "🐼" },
    { marathi: "अस्वल", name: "Bear", emoji: "🐻" },
    { marathi: "हरीण", name: "Deer", emoji: "🦌" },
    { marathi: "झेब्रा", name: "Zebra", emoji: "🦓" },
    { marathi: "जिराफ", name: "Giraffe", emoji: "🦒" }
  ];

  // 🔊 Voice function
  const speak = (text) => {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.rate = 0.9;
    msg.pitch = 1;
    window.speechSynthesis.speak(msg);
  };

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">

      {/* HEADER */}
      <div className="flex items-center justify-between bg-white p-3 shadow">
        <button onClick={goBack} className="font-bold text-blue-600">
          ← Back
        </button>

        <h1 className="font-bold text-xl">
          🐾 Animals Learning
        </h1>

        <div></div>
      </div>

      {/* TITLE */}
      <p className="text-center mt-2 text-gray-600 font-medium">
        Marathi + English Animals 🔊
      </p>

      {/* GRID */}
      <div className="flex-1 p-4 grid grid-cols-2 sm:grid-cols-3 gap-4">

        {animals.map((a, i) => (

          <div
            key={i}
            onClick={() => speak(a.name)}
            className="bg-white rounded-2xl shadow-md p-4 text-center cursor-pointer hover:scale-105 transition"
          >

            {/* EMOJI */}
            <div className="text-5xl">{a.emoji}</div>

            {/* MARATHI (TOP) */}
            <div className="mt-2 text-green-600 font-bold text-sm">
              {a.marathi}
            </div>

            {/* ENGLISH */}
            <div className="font-bold text-gray-800">
              {a.name}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}