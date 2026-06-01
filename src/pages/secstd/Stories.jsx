import { useState } from "react";

export default function Stories({ goBack }) {

  const stories = [
    {
      title: "The Honest Boy",
      marathi: "प्रामाणिक मुलगा",
      english:
        "A boy always speaks the truth. One day he finds a wallet on the road and returns it to the owner. Everyone praises him for his honesty.",
      emoji: "👦💰"
    },
    {
      title: "The Clever Fox",
      marathi: "चतुर कोल्हा",
      english:
        "A clever fox tricks other animals to get food. But later he realizes that honesty is more important than tricks.",
      emoji: "🦊🌲"
    },
    {
      title: "The Greedy Dog",
      marathi: "लोभी कुत्रा",
      english:
        "A dog sees his reflection in water holding a bone. He tries to grab it and loses his own bone because of greed.",
      emoji: "🐶🍖"
    },
    {
      title: "The Little Bird",
      marathi: "लहान पक्षी",
      english:
        "A small bird learns how to fly with courage. After practice, it becomes strong and flies high in the sky freely.",
      emoji: "🐦🌈"
    },
    {
      title: "The Lion and Mouse",
      marathi: "सिंह आणि उंदीर",
      english:
        "A small mouse helps a lion by freeing him from a net. Later, the lion saves the mouse and they become friends.",
      emoji: "🦁🐭"
    },
    {
      title: "The Hardworking Farmer",
      marathi: "कष्टाळू शेतकरी",
      english:
        "A farmer works hard every day in his field. Because of his hard work, he grows healthy crops and becomes successful.",
      emoji: "👨‍🌾🌾"
    },
    {
      title: "The Thirsty Crow",
      marathi: "तहानलेला कावळा",
      english:
        "A thirsty crow finds a pot with little water. He drops stones into the pot and raises the water level to drink it.",
      emoji: "🐦💧"
    },
    {
      title: "The Kind Girl",
      marathi: "दयाळू मुलगी",
      english:
        "A kind girl helps everyone in her village. Because of her kindness, everyone loves and respects her.",
      emoji: "👧❤️"
    }
  ];

  const [index, setIndex] = useState(0);

  const item = stories[index];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-200 to-blue-200 p-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-indigo-300">

        {/* TOP BAR */}
        <div className="bg-indigo-500 text-white px-5 py-4 flex justify-between items-center">

          <button onClick={goBack} className="text-2xl font-black">
            ←
          </button>

          <h1 className="font-black text-lg">
            📖 Stories Time
          </h1>

          <span>🔊</span>
        </div>

        {/* CONTENT */}
        <div className="p-6 text-center">

          <div className="text-6xl mb-4">{item.emoji}</div>

          <h2 className="text-2xl font-black text-indigo-700">
            {item.title}
          </h2>

          <p className="text-sm font-bold text-gray-500 mt-1">
            {item.marathi}
          </p>

          <p className="text-gray-700 mt-4 font-semibold leading-relaxed">
            {item.english}
          </p>

        </div>

        {/* NAVIGATION */}
        <div className="flex justify-between p-4">

          {index > 0 && (
            <button
              onClick={() => setIndex(index - 1)}
              className="bg-pink-500 text-white px-4 py-2 rounded-xl font-black"
            >
              Previous
            </button>
          )}

          {index < stories.length - 1 && (
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
          <div className="text-sm font-bold text-gray-600">
            {index + 1}/{stories.length}
          </div>

          <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
            <div
              className="bg-indigo-500 h-3 rounded-full"
              style={{
                width: `${((index + 1) / stories.length) * 100}%`
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}