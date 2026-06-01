export default function SelfLearning({
  goBack,
  goToAlphabet,
  goToNumber,
  goToColor,
  goToAnimal,
  goToFun
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-pink-50 to-yellow-50 p-5">

      <button onClick={goBack} className="mb-4 bg-white px-4 py-2 rounded-full font-bold shadow">
        ← Back
      </button>

      <h1 className="text-3xl font-black text-center text-blue-700 mb-6">
        🌈 Self Learning
      </h1>

      <div className="grid grid-cols-2 gap-5 max-w-md mx-auto">

        <div onClick={goToAlphabet} className="bg-pink-100 p-6 rounded-2xl shadow cursor-pointer">
          🔤 Alphabet
        </div>

        <div onClick={goToNumber} className="bg-sky-100 p-6 rounded-2xl shadow cursor-pointer">
          🔢 Numbers
        </div>

        <div onClick={goToColor} className="bg-yellow-100 p-6 rounded-2xl shadow cursor-pointer">
          🎨 Colors
        </div>

        <div onClick={goToAnimal} className="bg-green-100 p-6 rounded-2xl shadow cursor-pointer">
          🐾 Animals
        </div>

        <div
          onClick={goToFun}
          className="col-span-2 bg-purple-100 p-6 rounded-2xl shadow cursor-pointer text-center"
        >
          🎮 Fun Game
        </div>

      </div>
    </div>
  );
}