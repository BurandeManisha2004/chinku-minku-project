import { useState } from "react";
import DailyQuiz from "./DailyQuiz";
export default function SelectClass({

  goBack,
  goToFirstStd,
  goToSecondStd,
  goToHoliday
}) {
    const [showQuiz, setShowQuiz] = useState(false);

if (showQuiz) {
  return <DailyQuiz goBack={() => setShowQuiz(false)} />;
}
  return (

    <div className="min-h-screen bg-sky-200 flex items-center justify-center p-4">

      {/* MAIN CARD */}
      <div className="w-full max-w-md bg-[#eefcff] rounded-3xl border-4 border-sky-300 shadow-2xl overflow-hidden">

        {/* TOP */}
        <div className="p-4">

          <button
            onClick={goBack}
            className="text-blue-700 font-bold text-lg"
          >
            ← Back
          </button>

        </div>

        {/* TITLE */}
        <div className="text-center px-4">

          <h1 className="text-3xl font-black text-gray-800">
            Choose Standard
          </h1>

          <p className="text-green-700 font-bold mt-2">
            इयत्ता निवडा
          </p>

        </div>

        {/* STANDARD BOXES */}
        <div className="p-4 space-y-4 mt-5">

          {/* 1ST */}
          <button
            onClick={goToFirstStd}
            className="w-full bg-[#e7f7cf] rounded-2xl p-5 flex items-center justify-between shadow-md hover:scale-[1.02] duration-300"
          >

            <div className="flex items-center gap-4">

              <div className="text-5xl">📘</div>

              <div className="text-left">

                <h2 className="text-2xl font-black text-gray-800">
                  1st Standard
                </h2>

                <p className="text-gray-600 font-semibold">
                  Start Learning
                </p>

              </div>

            </div>

            <div className="text-3xl">➜</div>

          </button>

          {/* 2ND */}
          <button
            onClick={goToSecondStd}
            className="w-full bg-[#dceeff] rounded-2xl p-5 flex items-center justify-between shadow-md hover:scale-[1.02] duration-300"
          >

            <div className="flex items-center gap-4">

              <div className="text-5xl">📗</div>

              <div className="text-left">

                <h2 className="text-2xl font-black text-gray-800">
                  2nd Standard
                </h2>

                <p className="text-gray-600 font-semibold">
                  Fun Activities
                </p>

              </div>

            </div>

            <div className="text-3xl">➜</div>

          </button>

          {/* HOLIDAY */}
          <button
            onClick={goToHoliday}
            className="w-full bg-[#efd8ff] rounded-2xl p-5 flex items-center justify-between shadow-md hover:scale-[1.02] duration-300"
          >

            <div className="flex items-center gap-4">

              <div className="text-5xl">🏖</div>

              <div className="text-left">

                <h2 className="text-2xl font-black text-gray-800">
                  Holiday Fun
                </h2>

                <p className="text-gray-600 font-semibold">
                  Learn With Games
                </p>

              </div>

            </div>

            <div className="text-3xl">➜</div>

          </button>

        </div>
        {/* DAILY PRACTICE CARD */}
<div className="p-4">

  <div
    className="w-full bg-gradient-to-r from-yellow-200 via-pink-200 to-orange-200 rounded-3xl p-6 shadow-xl border-2 border-yellow-300 hover:scale-[1.02] duration-300 cursor-pointer"
    onClick={() => setShowQuiz(true)}
  >

    <div className="flex items-center justify-between">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">

        <div className="text-5xl">🧠</div>

        <div>
          <h2 className="text-2xl font-black text-gray-800">
            Daily Questions Practice
          </h2>

          <p className="text-gray-700 font-semibold mt-1">
            रोज नवीन प्रश्न सोडवा आणि शिका
          </p>
        </div>

      </div>

      {/* ARROW */}
      <div className="text-3xl">➜</div>

    </div>

  </div>

</div>

      </div>

    </div>
  );
}