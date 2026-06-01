export default function Alphabet({ goBack }) {

  const letters = [
    { letter: "A", word: "Apple 🍎", color: "#fef3c7" },
    { letter: "B", word: "Ball ⚽", color: "#dbeafe" },
    { letter: "C", word: "Cat 🐱", color: "#fce7f3" },
    { letter: "D", word: "Dog 🐶", color: "#dcfce7" },
    { letter: "E", word: "Elephant 🐘", color: "#ede9fe" },
    { letter: "F", word: "Fish 🐟", color: "#cffafe" },
    { letter: "G", word: "Goat 🐐", color: "#fef9c3" },
    { letter: "H", word: "Hen 🐔", color: "#fee2e2" },
    { letter: "I", word: "Ice Cream 🍦", color: "#e0f2fe" },
    { letter: "J", word: "Juice 🧃", color: "#dcfce7" },
    { letter: "K", word: "Kite 🪁", color: "#fef3c7" },
    { letter: "L", word: "Lion 🦁", color: "#fde68a" },
    { letter: "M", word: "Monkey 🐒", color: "#e9d5ff" },
    { letter: "N", word: "Nest 🪺", color: "#cffafe" },
    { letter: "O", word: "Orange 🍊", color: "#fed7aa" },
    { letter: "P", word: "Parrot 🦜", color: "#dcfce7" },
    { letter: "Q", word: "Queen 👑", color: "#fce7f3" },
    { letter: "R", word: "Rabbit 🐰", color: "#dbeafe" },
    { letter: "S", word: "Sun ☀️", color: "#fef08a" },
    { letter: "T", word: "Tiger 🐯", color: "#fed7aa" },
    { letter: "U", word: "Umbrella ☂️", color: "#e0e7ff" },
    { letter: "V", word: "Violin 🎻", color: "#f3e8ff" },
    { letter: "W", word: "Whale 🐋", color: "#cffafe" },
    { letter: "X", word: "Xylophone 🎵", color: "#fde68a" },
    { letter: "Y", word: "Yak 🐂", color: "#dcfce7" },
    { letter: "Z", word: "Zebra 🦓", color: "#f3f4f6" },
  ];

  // 🎤 Speak function
  const speak = (letter, word) => {
    const cleanWord = word.split(" ")[0]; // removes emoji part
    const text = `${letter} ${letter} for ${cleanWord}`;

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 0.9; // slow & clear for kids
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="min-h-screen bg-sky-100 p-4">

      {/* HEADER */}
      <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow">

        <button
          onClick={goBack}
          className="font-black text-blue-700 text-lg"
        >
          ← Back
        </button>

        <h1 className="text-xl sm:text-3xl font-black text-pink-500">
          🔤 A to Z Alphabet
        </h1>

        <div></div>
      </div>

      {/* TITLE */}
      <p className="text-center mt-4 font-bold text-gray-700">
        Learn Alphabets with Fun 🎉
      </p>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">

        {letters.map((item, index) => (

          <div
            key={index}
            onClick={() => speak(item.letter, item.word)}
            className="p-5 rounded-2xl shadow text-center font-black hover:scale-105 transition cursor-pointer"
            style={{ backgroundColor: item.color }}
          >

            <div className="text-5xl">{item.letter}</div>

            <div className="mt-2 text-gray-700 text-sm sm:text-base">
              {item.word}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}