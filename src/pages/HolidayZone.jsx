export default function HolidayFun({
  goBack,
  goToSelfLearning,
  goToFun,
}) {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-gradient-to-b from-sky-100 via-pink-50 to-yellow-50 overflow-hidden">

      {/* bubbles */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-purple-100 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-sky-100 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-40 right-20 w-14 h-14 bg-pink-100 rounded-full animate-bounce opacity-50"></div>

      {/* back */}
      <button
        onClick={goBack}
        className="absolute top-5 left-5 bg-white/70 backdrop-blur px-4 py-2 rounded-full font-bold shadow"
      >
        ← Back
      </button>

      {/* card */}
      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-[35px] shadow-lg p-6">

        <h1 className="text-center text-3xl font-black text-gray-700">
          🌈 Holiday Zone
        </h1>

        <div className="mt-8 space-y-5">

          <div
            onClick={goToSelfLearning}
            className="cursor-pointer p-5 rounded-3xl font-bold text-xl bg-pink-50 hover:scale-105 transition"
          >
            🛡 Self Learning
          </div>

          <div
            onClick={goToFun}
            className="cursor-pointer p-5 rounded-3xl font-bold text-xl bg-sky-50 hover:scale-105 transition"
          >
            🎯 Fun Activities
          </div>

        </div>

      </div>
    </div>
  );
}