import { useNavigate, useLocation } from "react-router-dom"

function BottomNav() {

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-around shadow-2xl rounded-t-3xl max-w-sm mx-auto">

      <button
        onClick={() => navigate("/")}
        className={`text-3xl ${location.pathname === "/" ? "scale-125" : ""}`}
      >
        🏠
      </button>

      <button
        onClick={() => navigate("/learn")}
        className={`text-3xl ${location.pathname === "/learn" ? "scale-125" : ""}`}
      >
        📚
      </button>

      <button
        onClick={() => navigate("/games")}
        className={`text-3xl ${location.pathname === "/games" ? "scale-125" : ""}`}
      >
        🎮
      </button>

      <button
        onClick={() => navigate("/profile")}
        className={`text-3xl ${location.pathname === "/profile" ? "scale-125" : ""}`}
      >
        👤
      </button>

    </div>
  )
}

export default BottomNav