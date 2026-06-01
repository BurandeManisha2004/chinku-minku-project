export default function FirstStdChapters({ goBack, setPage }) {

  const chapters = [
    { id: 1, title: "Alphabets A–Z", emoji: "🔤", color: "#ecf9f1", page: "alphabets" },
    { id: 2, title: "Numbers 1–100", emoji: "🔢", color: "#dbeafe", page: "numbers" },
    { id: 3, title: "Colors", emoji: "🎨", color: "#ede9fe", page: "colors" },
    { id: 4, title: "Fruits", emoji: "🍎", color: "#fef3c7", page: "fruits" },
    { id: 5, title: "Vegetables", emoji: "🥕", color: "#d1fae5", page: "vegetables" },
    { id: 6, title: "Animals", emoji: "🐶", color: "#fee2e2", page: "animals" },
    { id: 7, title: "Birds", emoji: "🐦", color: "#e0f2fe", page: "birds" },
    { id: 8, title: "Body Parts", emoji: "🧠", color: "#fce7f3", page: "bodyparts" },
    // { id: 9, title: "Family Members", emoji: "👨‍👩‍👧‍👦", color: "#fef9c3", page: "familymembers" },
    { id: 9, title: "Family Members", emoji: "👨‍👩‍👧‍👦", color: "#fef9c3", page: "familymembers" }
    // { id: 10, title: "Things at Home", emoji: "🏠", color: "#e0e7ff", page: "home" },
    // { id: 11, title: "Things in School", emoji: "🏫", color: "#cffafe", page: "school" },
    // { id: 12, title: "Action Words", emoji: "🏃", color: "#f1f5f9", page: "actions" },
    // { id: 13, title: "Daily Questions", emoji: "❓", color: "#fee2e2", page: "questions" },
    // { id: 14, title: "Fun Revision Quiz", emoji: "🎯", color: "#fef3c7", page: "quiz" },
  ];

  const getMaxPoints = (id) => {
    const values = [10, 15, 20];
    return values[id % values.length];
  };

  return (
    <div className="min-h-screen bg-green-100 p-4 flex flex-col items-center">

      {/* HEADER */}
      <div className="w-full max-w-3xl flex items-center justify-between mb-6">

        <button
          onClick={goBack}
          className="text-green-700 font-bold text-lg"
        >
          ← Back
        </button>

        <h1 className="text-xl sm:text-2x2 font-black text-green-00">
      1st Standard Learning Path
        </h1>

      </div>

      <p className="text-green-700 font-semibold mb-4 text-center">
        Earn points by completing lessons 🚀
      </p>

      {/* GRID */}
      <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-3 gap-4">

        {chapters.map((ch) => (
          <div
            key={ch.id}
            onClick={() => setPage(ch.page)}
            className="rounded-2xl p-4 shadow-md text-center font-bold cursor-pointer hover:scale-105 transition duration-300"
            style={{ backgroundColor: ch.color }}
          >
            <div className="text-4xl">{ch.emoji}</div>

            <h2 className="mt-2 text-gray-800 text-sm">
              Chapter {ch.id}
            </h2>

            <p className="text-green-900 font-black text-sm">
              {ch.title}
            </p>

            <div className="mt-2 text-sm font-bold text-green-900 opacity-80">
              ⭐ 0/{getMaxPoints(ch.id)} Points
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}