export default function Colors({ goBack }) {

  const colors = [
    { marathi: "लाल", name: "Red", meaning: "Apple 🍎", color: "red" },
    { marathi: "निळा", name: "Blue", meaning: "Sky ☁️", color: "blue" },
    { marathi: "हिरवा", name: "Green", meaning: "Grass 🌿", color: "green" },
    { marathi: "पिवळा", name: "Yellow", meaning: "Sun ☀️", color: "#eab308" },
    { marathi: "नारिंगी", name: "Orange", meaning: "Fruit 🍊", color: "orange" },
    { marathi: "गुलाबी", name: "Pink", meaning: "Flower 🌸", color: "pink" },
    { marathi: "जांभळा", name: "Purple", meaning: "Grapes 🍇", color: "purple" },
    { marathi: "काळा", name: "Black", meaning: "Night 🌙", color: "black" },
    { marathi: "पांढरा", name: "White", meaning: "Cloud ☁️", color: "#e5e7eb" }
  ];

  // 🎤 VOICE FUNCTION
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">

      {/* HEADER */}
      <div className="flex items-center justify-between bg-white p-3 shadow">

        <button
          onClick={goBack}
          className="font-bold text-blue-600"
        >
          ← Back
        </button>

        <h1 className="font-bold text-xl text-gray-800">
          Colors
        </h1>

        <div></div>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 p-4">

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

          {colors.map((c, i) => (

            <div
              key={i}
              onClick={() => speak(c.name)}
              className="bg-white rounded-xl shadow p-3 flex items-center gap-3 cursor-pointer hover:scale-105 transition"
            >

              {/* COLOR CIRCLE */}
              <div
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: c.color }}
              ></div>

              {/* TEXT */}
              <div>

                {/* Marathi FIRST */}
                <div className="font-bold text-green-600 text-sm">
                  {c.marathi}
                </div>

                {/* English */}
                <div className="font-bold text-gray-800">
                  {c.name}
                </div>

                <div className="text-sm text-gray-500">
                  {c.meaning}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}