export default function SecondStdChapters({ goBack, openPage }) {

  const chapters = [
    { id: 1, title: "Pronouns", emoji: "👦", color: "bg-pink-100" },
    { id: 2, title: "Daily Sentences", emoji: "💬", color: "bg-yellow-100" },
    { id: 3, title: "School Things", emoji: "🎒", color: "bg-blue-100" },
    { id: 4, title: "Family & Friends", emoji: "👨‍👩‍👧", color: "bg-purple-100" },
    { id: 5, title: "Animals & Actions", emoji: "🐶", color: "bg-green-100" },
    { id: 6, title: "My Day", emoji: "⏰", color: "bg-cyan-100" },
    { id: 7, title: "Opposites", emoji: "🍦", color: "bg-orange-100" },
    { id: 8, title: "Simple Stories", emoji: "📖", color: "bg-red-100" },
    { id: 9, title: "Reading Practice", emoji: "🧒", color: "bg-indigo-100" },
    { id: 10, title: "Writing Practice", emoji: "✏️", color: "bg-teal-100" },
    { id: 11, title: "Holiday Activities", emoji: "⛱️", color: "bg-lime-100" },
    { id: 12, title: "Final Quiz", emoji: "🏆", color: "bg-amber-100" },
  ];

  const getMaxPoints = (id) => {
    const values = [15, 20, 25];
    return values[id % values.length];
  };

  const handleClick = (title) => {
    switch (title) {

      case "Pronouns":
        openPage("pronouns");
        break;

      case "Daily Sentences":
        openPage("dailysentences");
        break;

      case "School Things":
        openPage("schoolthings");
        break;

      case "Family & Friends":
        openPage("familyfriends");
        break;

      case "Animals & Actions":
        openPage("animalsactions");
        break;

      case "My Day":
        openPage("myday");
        break;

      case "Opposites":
        openPage("opposites");
        break;

      case "Simple Stories":
        openPage("stories");
        break;

      case "Reading Practice":
        openPage("reading");
        break;

      case "Writing Practice":
        openPage("writing");
        break;

      case "Holiday Activities":
        openPage("holidayactivities"); // ✅ FIXED
        break;

      case "Final Quiz":
        openPage("quiz");
        break;

      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-sky-200 p-4 flex justify-center">

      <div className="w-full max-w-5xl bg-[#eefcff] rounded-3xl shadow-2xl overflow-hidden border-4 border-sky-300">

        <div className="bg-blue-500 text-white px-5 py-4 flex items-center justify-between">
          <button onClick={goBack} className="font-black text-2xl">←</button>
          <h1 className="font-black text-lg sm:text-2xl">📚 2nd Standard</h1>
          <div className="text-2xl">🔊</div>
        </div>

        <div className="text-center pt-5 px-4">
          <h2 className="text-2xl font-black text-blue-700">
            Learn English Easily ✨
          </h2>
          <p className="text-gray-600 font-semibold mt-2">
            Select a chapter to start learning
          </p>
        </div>

        <div className="p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

          {chapters.map((ch) => {
            const maxPoints = getMaxPoints(ch.id);

            return (
              <div
                key={ch.id}
                onClick={() => handleClick(ch.title)}
                className={`${ch.color} rounded-2xl p-4 shadow-md cursor-pointer border border-white hover:shadow-xl duration-300`}
              >
                <div className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black">
                  {ch.id}
                </div>

                <h2 className="mt-3 text-sm sm:text-base font-black text-gray-800">
                  {ch.title}
                </h2>

                <div className="text-5xl text-center my-4">
                  {ch.emoji}
                </div>

                <div className="bg-white rounded-xl py-2 text-sm font-black text-gray-700 text-center">
                  ⭐ 0/{maxPoints}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}