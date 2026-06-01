function CategoryCard({ title, emoji, color, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${color} p-6 rounded-3xl shadow-xl cursor-pointer hover:scale-105 transition`}
    >

      <div className="text-6xl">
        {emoji}
      </div>

      <h2 className="text-3xl font-bold text-white mt-4">
        {title}
      </h2>

    </div>
  )
}

export default CategoryCard