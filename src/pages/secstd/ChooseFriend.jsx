import boy from "../assets/boy.png";
import girl from "../assets/girl.png";
import teacher from "../assets/teacher.jpg";

export default function ChooseFriend({ goBack, goNext }) {

  const handleSelect = () => {
    goNext(); // logic same
  };

  return (
    <div className="min-h-screen bg-sky-200 flex items-center justify-center p-4">

      {/* MAIN CARD */}
      <div className="w-full max-w-md bg-[#eefcff] rounded-3xl border-4 border-sky-300 shadow-2xl overflow-hidden relative">

        {/* TOP BAR */}
        <div className="p-4">
          <button
            onClick={goBack}
            className="text-blue-700 font-bold text-lg flex items-center gap-1"
          >
            ← Back
          </button>
        </div>

        {/* TITLE */}
        <div className="text-center -mt-1">
          <h1 className="text-3xl font-black text-gray-800">
            Choose Your Friend
          </h1>

          <p className="text-green-700 font-bold mt-1 text-lg">
            तुमचा मित्र निवडा
          </p>
        </div>

        {/* FRIEND CARDS */}
        <div className="grid grid-cols-3 gap-3 px-4 mt-6">

          {/* CHINTU */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-3 text-center shadow-sm hover:scale-105 duration-200">

            <img
              src={boy}
              alt="boy"
              className="w-24 h-28 object-contain mx-auto"
            />

            <h2 className="font-black text-gray-800 mt-2 text-lg">
              Chintu
            </h2>

            <button
              onClick={handleSelect}
              className="bg-green-500 hover:bg-green-600 text-white w-full mt-3 py-2 rounded-full text-lg shadow"
            >
              🔊
            </button>
          </div>

          {/* MINKU */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-3 text-center shadow-sm hover:scale-105 duration-200">

            <img
              src={girl}
              alt="girl"
              className="w-24 h-28 object-contain mx-auto"
            />

            <h2 className="font-black text-gray-800 mt-2 text-lg">
              Minku
            </h2>

            <button
              onClick={handleSelect}
              className="bg-pink-500 hover:bg-pink-600 text-white w-full mt-3 py-2 rounded-full text-lg shadow"
            >
              🔊
            </button>
          </div>

          {/* TEACHER */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-3 text-center shadow-sm hover:scale-105 duration-200">

            <img
              src={teacher}
              alt="teacher"
              className="w-24 h-28 object-cover rounded-xl mx-auto"
            />

            <h2 className="font-black text-gray-800 mt-2 text-lg">
              Teacher
            </h2>

            <button
              onClick={handleSelect}
              className="bg-purple-500 hover:bg-purple-600 text-white w-full mt-3 py-2 rounded-full text-lg shadow"
            >
              🔊
            </button>
          </div>

        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mx-4 mt-6 mb-4 bg-white rounded-2xl shadow-md flex items-center gap-3 p-3 border border-gray-200">

          {/* SMALL BOY IMAGE */}
          {/* <img
            src={boy}
            alt="boy"
            className="w-16 h-16 object-contain"
          /> */}

          {/* TEXT */}
          <div>
            <h3 className="font-bold text-gray-800 text-sm">
              नमस्कार! 
            </h3>

            <p className="text-gray-700 text-sm font-semibold mt-1">
              चला खेळत खेळत इंग्रजी शिकूया!
            </p>
          </div>

        </div>

        {/* GRASS DESIGN */}
        <div className="h-5 bg-gradient-to-r from-green-300 via-lime-300 to-green-300"></div>

      </div>
    </div>
  );
}