import { useState } from "react";

export default function ReadingPractice({ goBack }) {

  const passages = [
    {
      title: "Morning Routine",
      emoji: "🌅",
      english:
        "I wake up early in the morning. I brush my teeth, take a bath, and get ready for school. I eat breakfast and go to school happily.",
      marathi:
        "मी सकाळी लवकर उठतो. मी दात घासतो, आंघोळ करतो आणि शाळेसाठी तयार होतो. मी नाश्ता करतो आणि आनंदाने शाळेत जातो."
    },
    {
      title: "My School",
      emoji: "🏫",
      english:
        "My school is very big and clean. I learn many subjects like English, Maths, and Science. I love my teachers and friends.",
      marathi:
        "माझी शाळा खूप मोठी आणि स्वच्छ आहे. मी इंग्रजी, गणित आणि विज्ञान शिकतो. मला माझे शिक्षक आणि मित्र आवडतात."
    },
    {
      title: "Healthy Food",
      emoji: "🍎",
      english:
        "We should eat healthy food like fruits and vegetables. Junk food is not good for our body. Healthy food keeps us strong.",
      marathi:
        "आपण फळे आणि भाज्या यांसारखे आरोग्यदायी अन्न खावे. जंक फूड आपल्या शरीरासाठी चांगले नाही. आरोग्यदायी अन्न आपल्याला मजबूत ठेवते."
    },
    {
      title: "My Family",
      emoji: "👨‍👩‍👧",
      english:
        "I live with my family. My father, mother, and siblings love me very much. We eat, play, and stay happy together.",
      marathi:
        "मी माझ्या कुटुंबासोबत राहतो. माझे वडील, आई आणि भावंडे मला खूप प्रेम करतात. आम्ही एकत्र खातो, खेळतो आणि आनंदी राहतो."
    },
    {
      title: "My Pet",
      emoji: "🐶",
      english:
        "I have a cute pet dog. It plays with me every day. I feed it and take care of it. My pet makes me happy.",
      marathi:
        "माझ्याकडे एक गोंडस कुत्रा आहे. तो रोज माझ्यासोबत खेळतो. मी त्याला खायला देतो आणि काळजी घेतो. माझा पाळीव प्राणी मला आनंदी ठेवतो."
    }
  ];

  const [index, setIndex] = useState(0);

  const item = passages[index];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-200 to-orange-200 p-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border-4 border-yellow-300 overflow-hidden">

        {/* TOP BAR */}
        <div className="bg-yellow-500 text-white px-5 py-4 flex justify-between items-center">

          <button onClick={goBack} className="text-2xl font-black">
            ←
          </button>

          <h1 className="font-black text-lg">
            📘 Reading Practice
          </h1>

          <span>🔊</span>
        </div>

        {/* CONTENT */}
        <div className="p-6 text-center">

          <div className="text-6xl mb-3">{item.emoji}</div>

          <h2 className="text-2xl font-black text-yellow-700">
            {item.title}
          </h2>

          <p className="text-gray-700 mt-4 font-semibold leading-relaxed">
            {item.english}
          </p>

          <p className="text-gray-500 mt-3 font-bold">
            {item.marathi}
          </p>

        </div>

        {/* NAV */}
        <div className="flex justify-between p-4">

          {index > 0 && (
            <button
              onClick={() => setIndex(index - 1)}
              className="bg-pink-500 text-white px-4 py-2 rounded-xl font-black"
            >
              Previous
            </button>
          )}

          {index < passages.length - 1 && (
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
            {index + 1}/{passages.length}
          </div>

          <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
            <div
              className="bg-yellow-500 h-3 rounded-full"
              style={{
                width: `${((index + 1) / passages.length) * 100}%`
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}