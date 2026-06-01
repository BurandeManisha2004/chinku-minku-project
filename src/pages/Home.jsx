import boy from "../assets/boy.png";
import girl from "../assets/girl.png";
import holiday from "../assets/holiday.png";

export default function Home({ goToFriend }) {

  return (

    <div className="min-h-screen p-3 sm:p-6 bg-sky-200">

      <div className="max-w-7xl mx-auto bg-sky-50 rounded-3xl shadow-lg overflow-hidden border-4 border-sky-300">

        {/* NAVBAR */}
        <div className="bg-white px-4 sm:px-8 py-5 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-md">

          <div className="flex items-center gap-4">

            <img src={boy} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />

            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-blue-700">
                Chintu Minku
              </h1>
              <p className="text-gray-500 font-semibold text-sm sm:text-base">
                English Adventure
              </p>
            </div>

          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-5 items-center text-sm sm:text-lg">

            <button className="bg-blue-500 text-white px-5 py-2 rounded-full font-black">
              Home
            </button>

            <button className="font-bold text-gray-700">
              1st Standard
            </button>

            <button className="font-bold text-gray-700">
              2nd Standard
            </button>

            <button className="font-bold text-gray-700">
              Holiday Fun
            </button>

          </div>

        </div>

        {/* HERO */}
        <div className="relative px-4 sm:px-8 pt-10 pb-16 bg-sky-100">

          <div className="text-center">

            <h2 className="text-5xl sm:text-7xl font-black text-blue-700">
              Chintu
            </h2>

            <h2 className="text-5xl sm:text-7xl font-black text-pink-500 mt-2">
              Minku
            </h2>

            <h3 className="text-2xl sm:text-4xl font-black mt-4 text-gray-800">
              English Adventure
            </h3>

            <p className="mt-5 text-lg sm:text-2xl text-green-700 font-black">
              चला खेळत खेळत इंग्रजी शिकुया!
            </p>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

            {/* 1st Std */}
            <div className="bg-green-500 rounded-3xl p-7 text-white shadow-lg flex flex-col">

              <div className="text-3xl mb-4">📚</div>

              <h2 className="text-4xl font-black">1st</h2>
              <p className="font-black text-xl mt-1">Standard</p>

              <img src={boy} className="w-40 h-52 object-contain mx-auto mt-5" />

              <button
                onClick={goToFriend}
                className="bg-white text-gray-800 w-full py-4 rounded-full mt-auto font-black text-xl"
              >
                Start
              </button>

            </div>

            {/* 2nd Std */}
            <div className="bg-blue-500 rounded-3xl p-7 text-white shadow-lg flex flex-col">

              <div className="text-3xl mb-4">✏️</div>

              <h2 className="text-4xl font-black">2nd</h2>
              <p className="font-black text-xl mt-1">Standard</p>

              <img src={girl} className="w-40 h-52 object-contain mx-auto mt-5" />

              <button
                onClick={goToFriend}
                className="bg-white text-gray-800 w-full py-4 rounded-full mt-auto font-black text-xl"
              >
                Start
              </button>

            </div>

            {/* Holiday */}
            <div className="bg-purple-500 rounded-3xl p-7 text-white shadow-lg flex flex-col">

              <div className="text-3xl mb-4">🎨</div>

              <h2 className="text-4xl font-black">Holiday</h2>
              <p className="font-black text-xl mt-1">Fun</p>

              <img src={holiday} className="w-40 h-52 object-contain mx-auto mt-5" />

              <button
                onClick={goToFriend}
                className="bg-white text-gray-800 w-full py-4 rounded-full mt-auto font-black text-xl"
              >
                Start
              </button>

            </div>

          </div>

        </div>

        {/* 🟡 BOTTOM BAR */}
        <div className="bg-yellow-200 text-gray-800 py-6 px-4 sm:px-8 flex flex-col sm:flex-row justify-around items-center gap-4 font-bold text-center">

          <div>🛡 Safe Learning</div>
          <div>🎯 Fun Activities</div>
          <div>🎤 Voice Learning</div>
          <div>⭐ Learn with Fun</div>

        </div>

      </div>

    </div>

  );
}