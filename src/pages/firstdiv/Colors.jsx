import { useState, useEffect } from "react";
import laughSound from "../../assets/laugh.aac";
export default function Colors({ goBack }) {
  const colors = [
     { name: "Red", color: "#ef4444", emoji: "🍎" },
  { name: "Blue", color: "#3b82f6", emoji: "🐟" },
  { name: "Green", color: "#22c55e", emoji: "🌳" },
  { name: "Yellow", color: "#facc15", emoji: "⭐" },
  { name: "Orange", color: "#f97316", emoji: "🍊" },
  { name: "Purple", color: "#a855f7", emoji: "🦄" },
  { name: "Pink", color: "#ec4899", emoji: "🌸" },

  { name: "Brown", color: "#92400e",emoji: "🏀"}, 
  { name: "Black", color: "#111827",emoji: "🐀" }, 
  { name: "White", color: "#ffffff",emoji: "🌥️" }
  ];

  const [current, setCurrent] = useState(0);
  const [listening, setListening] = useState(false);

  const laughAudio = new Audio(laughSound);
laughAudio.loop = true;
  useEffect(() => {
    let interval;

    if (listening) {
      const speak = () => {
        const msg = new SpeechSynthesisUtterance(
          colors[current].name
        );
        msg.rate = 0.8;
        msg.pitch = 1.2;
        speechSynthesis.speak(msg);
      };

      speak();

      interval = setInterval(() => {
        speak();
      }, 2000);
    }

    return () => {
      clearInterval(interval);
      speechSynthesis.cancel();
    };
  }, [listening, current]);

  return (
    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(to bottom, #fef9c3, #9fc6f4)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Back */}
      <button
        onClick={() => goBack && goBack()}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          padding: "10px 15px",
          border: "none",
          borderRadius: "10px",
          background: "#16a34a",
          color: "white",
          fontWeight: "bold"
        }}
      >
        ← Back
      </button>

      {/* Listen */}
      <button
        onClick={() => {
  if (!listening) {
    laughAudio.play();
  } else {
    laughAudio.pause();
    laughAudio.currentTime = 0;
  }

  setListening(!listening);
}}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "10px 15px",
          border: "none",
          borderRadius: "10px",
          background: "#2563eb",
          color: "white",
          fontWeight: "bold"
        }}
      >
        🔊 {listening ? "Stop" : "Listen"}
      </button>

      {/* Center Color Frame */}
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        {/* <div
          style={{
            width: "450px",
            height: "450px",
            borderRadius: "40px",
            border: "12px solid white",
            backgroundColor: colors[current].color,

            boxShadow: `
              0 0 20px ${colors[current].color},
              0 0 40px ${colors[current].color},
              0 0 80px ${colors[current].color}
            `,

            animation: "magicFrame 2.5s ease-in-out infinite"
          }}
        /> */}
<div
  style={{
    width: "550px",
    height: "450px",
    borderRadius: "40px",
    border: "12px solid white",
    backgroundColor: colors[current].color,
    boxShadow: `
      0 0 20px ${colors[current].color},
      0 0 40px ${colors[current].color},
      0 0 80px ${colors[current].color}
    `,
    animation: "magicFrame 2.5s ease-in-out infinite",

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}
>
  <div
    style={{
      fontSize: "180px",
      animation: "laughEmoji 0.7s infinite"
    }}
  >
    {colors[current].emoji}
  </div>
</div>
        <h1
          style={{
            marginTop: "30px",
            fontSize: "60px",
            fontWeight: "bold",
            color: colors[current].color,
            textShadow: `0 0 20px ${colors[current].color}`
          }}
        >
          {colors[current].name}
        </h1>
      </div>

      {/* Prev */}
      <button
        onClick={() =>
          setCurrent((prev) =>
            prev > 0 ? prev - 1 : 0
          )
        }
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          padding: "15px 25px",
          border: "none",
          borderRadius: "12px",
          background: "#f97316",
          color: "white",
          fontSize: "18px",
          fontWeight: "bold"
        }}
      >
        ⬅ Prev
      </button>

      {/* Next */}
      <button
        onClick={() =>
          setCurrent((prev) =>
            prev < colors.length - 1
              ? prev + 1
              : prev
          )
        }
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          padding: "15px 25px",
          border: "none",
          borderRadius: "12px",
          background: "#22c55e",
          color: "white",
          fontSize: "18px",
          fontWeight: "bold"
        }}
      >
        Next ➡
      </button>

      <style>
        {`
          @keyframes magicFrame {
            0% {
              transform: scale(1) rotate(-3deg);
            }

            50% {
              transform: scale(1.08) rotate(3deg);
            }

            100% {
              transform: scale(1) rotate(-3deg);
            }
          }

@keyframes laughEmoji {
  0% {
    transform: translateX(0) translateY(0);
  }

  25% {
    transform: translateX(-8px) translateY(-5px);
  }

  50% {
    transform: translateX(8px) translateY(0);
  }

  75% {
    transform: translateX(-8px) translateY(-5px);
  }

  100% {
    transform: translateX(0) translateY(0);
  }
}

        `}
      </style>
    </div>
  );
}