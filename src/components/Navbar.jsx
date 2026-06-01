function Navbar() {
  return (
    <div className="bg-white p-4 rounded-3xl shadow-lg flex justify-between items-center">

      <div>
        <h1 className="text-3xl font-bold text-blue-700">
          Chintu Minku
        </h1>

        <p className="text-gray-500">
          English Adventure
        </p>
      </div>

      <button className="bg-yellow-400 px-5 py-2 rounded-full font-bold">
        Login
      </button>

    </div>
  )
}

export default Navbar