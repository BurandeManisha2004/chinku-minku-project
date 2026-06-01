import { useState, useEffect } from "react";

export default function Numbers({ goBack }) {
  const numbers = [
    { num: 1, word: "One" },
    { num: 2, word: "Two" },
    { num: 3, word: "Three" },
    { num: 4, word: "Four" },
    { num: 5, word: "Five" },
    { num: 6, word: "Six" },
    { num: 7, word: "Seven" },
    { num: 8, word: "Eight" },
    { num: 9, word: "Nine" },
    { num: 10, word: "Ten" },
    { num: 11, word: "Eleven" },
    { num: 12, word: "Twelve" },
    { num: 13, word: "Thirteen" },
    { num: 14, word: "Fourteen" },
    { num: 15, word: "Fifteen" },
    { num: 16, word: "Sixteen" },
    { num: 17, word: "Seventeen" },
    { num: 18, word: "Eighteen" },
    { num: 19, word: "Nineteen" },
    { num: 20, word: "Twenty" },
  ];

  const [current, setCurrent] = useState(0);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    let interval;

    if (listening) {
      const speak = () => {
        const msg = new SpeechSynthesisUtterance(
          numbers[current].word
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
          "linear-gradient(to bottom, #fef9c3, #bfdbfe)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Back Button */}
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
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        ← Back
      </button>

      {/* Listen Button */}
      <button
        onClick={() => setListening(!listening)}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "10px 15px",
          border: "none",
          borderRadius: "10px",
          background: "#2563eb",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        🔊 {listening ? "Stop" : "Listen"}
      </button>

      {/* Center Number */}
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            fontSize: "420px",
            fontWeight: "bold",
            color: "#263bdc",
// animation: "swing 2s ease-in-out infinite"
animation: "funMove 3s ease-in-out infinite"
          }}
        >
          {numbers[current].num}
        </div>

        <div
          style={{
            fontSize: "40px",
            marginTop: "20px",
            fontWeight: "bold",
            color: "#1e3a8a"
          }}
        >
          {numbers[current].word}
        </div>
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
          fontSize: "18px",
          border: "none",
          borderRadius: "12px",
          background: "#f97316",
          color: "white",
          cursor: "pointer"
        }}
      >
        ⬅ Prev
      </button>

      {/* Next */}
      <button
        onClick={() =>
          setCurrent((prev) =>
            prev < numbers.length - 1
              ? prev + 1
              : prev
          )
        }
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          padding: "15px 25px",
          fontSize: "18px",
          border: "none",
          borderRadius: "12px",
          background: "#22c55e",
          color: "white",
          cursor: "pointer"
        }}
      >
        Next ➡
      </button>

      <style>
{`@keyframes funMove {
  0% {
    transform: translateX(-40px) rotate(-15deg);
  }
  50% {
    transform: translateX(40px) rotate(15deg);
  }
  100% {
    transform: translateX(-40px) rotate(-15deg);
  }

}
`}
</style>
    </div>
  );
}