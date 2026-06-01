export default function Numbers({ goBack }) {

  const ones = [
    "", "One", "Two", "Three", "Four", "Five",
    "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
    "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];

  const tens = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty",
    "Sixty", "Seventy", "Eighty", "Ninety"
  ];

  // 🇮🇳 FULL Marathi 1–100
  const marathiMap = [
    "", "एक", "दोन", "तीन", "चार", "पाच",
    "सहा", "सात", "आठ", "नऊ", "दहा",
    "अकरा", "बारा", "तेरा", "चौदा", "पंधरा",
    "सोळा", "सतरा", "अठरा", "एकोणीस", "वीस",
    "एकवीस", "बावीस", "तेवीस", "चोवीस", "पंचवीस",
    "सव्वीस", "सत्तावीस", "अठ्ठावीस", "एकोणतीस", "तीस",
    "एकतीस", "बत्तीस", "तेहेतीस", "चौतीस", "पस्तीस",
    "छत्तीस", "सदतीस", "अडतीस", "एकोणचाळीस", "चाळीस",
    "एकेचाळीस", "बेचाळीस", "त्रेचाळीस", "चौरेचाळीस", "पंचेचाळीस",
    "सेहेचाळीस", "सत्तेचाळीस", "अठ्ठेचाळीस", "एकोणपन्नास", "पन्नास",
    "एक्कावन्न", "बावन्न", "त्रेपन्न", "चोपन्न", "पंचावन्न",
    "छप्पन्न", "सत्तावन्न", "अठ्ठावन्न", "एकोणसाठ", "साठ",
    "एकसष्ट", "बासष्ट", "त्रेसष्ट", "चौसष्ट", "पासष्ट",
    "सहासष्ट", "सदुसष्ट", "अडुसष्ट", "एकोणसत्तर", "सत्तर",
    "एकाहत्तर", "बाहत्तर", "त्र्याहत्तर", "चौर्‍याहत्तर", "पंचाहत्तर",
    "शहात्तर", "सत्याहत्तर", "अठ्ठ्याहत्तर", "एकोणऐंशी", "ऐंशी",
    "एक्याऐंशी", "ब्याऐंशी", "त्र्याऐंशी", "चौऱ्याऐंशी", "पंच्याऐंशी",
    "शहाऐंशी", "सत्त्याऐंशी", "अठ्ठ्याऐंशी", "एकोणनव्वद", "नव्वद",
    "एक्याण्णव", "ब्याण्णव", "त्र्याण्णव", "चौर्‍याण्णव", "पंच्याण्णव",
    "शहाण्णव", "सत्त्याण्णव", "अठ्ठ्याण्णव", "नव्व्याण्णव", "शंभर"
  ];

  const getEnglish = (num) => {
    if (num === 100) return "One Hundred";

    if (num < 20) return ones[num];

    const ten = Math.floor(num / 10);
    const one = num % 10;

    if (num < 100) {
      return tens[ten] + (one ? " " + ones[one] : "");
    }

    return "";
  };

  const numbers = Array.from({ length: 100 }, (_, i) => {
    const num = i + 1;
    return {
      num,
      english: getEnglish(num),
      marathi: marathiMap[num]
    };
  });

  // 🎤 VOICE FUNCTION
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="min-h-screen bg-sky-100 p-4">

      {/* HEADER */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow">

        <button
          onClick={goBack}
          className="font-black text-blue-700 text-lg"
        >
          ← Back
        </button>

        <h1 className="font-black text-pink-500 text-xl sm:text-3xl">
          🔢 Numbers Learning
        </h1>

        <div></div>
      </div>

      {/* SUBTITLE */}
      <p className="text-center mt-4 text-gray-700 font-bold">
        Marathi + English Numbers 🎉
      </p>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">

        {numbers.map((item, index) => (

          <div
            key={index}
            onClick={() => speak(item.english)}
            className="bg-white rounded-2xl shadow p-4 text-center hover:scale-105 transition cursor-pointer"
          >

            {/* MARATHI */}
            <div className="text-lg font-bold text-green-600">
              {item.marathi}
            </div>

            {/* NUMBER */}
            <div className="text-3xl font-black text-blue-700">
              {item.num}
            </div>

            {/* ENGLISH */}
            <div className="mt-1 text-sm font-bold text-gray-800">
              {item.english}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}