import { useState, useEffect } from "react";

export default function Vegetables({ goBack }) {

  const vegetables = [
    {
      name: "Potato",
      image: "https://images6.alphacoders.com/420/thumb-1920-420023.jpg"
    },
    {
      name: "Tomato",
      image: "https://images8.alphacoders.com/399/399003.jpg"
    },
    {
      name: "Onion",
      image: "https://tse1.mm.bing.net/th/id/OIP.ccLyHCakcAtaz7b4uaRM-AHaE7?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Carrot",
      image: "https://tse1.mm.bing.net/th/id/OIP.NQoblU6aVDk4w-pjm_mqRgHaGD?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Brinjal",
      image: "https://tse1.mm.bing.net/th/id/OIP.v9xh2rnmlG2WClFbCLrU8AHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
  
    {
      name: "Cucumber",
      image: "https://tse3.mm.bing.net/th/id/OIP.VKG1qNp4bQnOTWVzO1DJiwHaEo?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
 {
      name: "Pea",
      image: "https://cdn.pixabay.com/photo/2019/01/28/04/07/vegetable-3959593_1280.jpg"
    },
     {
      name: "Chili",
      image: "https://tse2.mm.bing.net/th/id/OIP.sB2zrzQ1NyuBmTHz_hwqegHaF1?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3"
    },


  ];

  const [current, setCurrent] = useState(0);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    let interval;

    if (listening) {

      const speak = () => {
        speechSynthesis.cancel();

        const msg = new SpeechSynthesisUtterance(
          vegetables[current].name
        );

        msg.rate = 0.8;
        msg.pitch = 1.2;

        speechSynthesis.speak(msg);
      };

      speak();

      interval = setInterval(() => {
        speak();
      }, 1200);
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
          "linear-gradient(to bottom, #c3f0fe, #9fc6f4)",
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
          if (listening) {
            speechSynthesis.cancel();
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

      {/* Center */}
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            width: "550px",
            height: "450px",
            borderRadius: "40px",
            border: "12px solid white",

            backgroundImage: `url(${vegetables[current].image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",

            boxShadow: "0 0 30px rgba(0,0,0,0.3)",

            animation:
              "magicFrame 2.5s ease-in-out infinite"
          }}
        />

        <h1
          style={{
            marginTop: "30px",
            fontSize: "60px",
            fontWeight: "bold",
            color: "black"
          }}
        >
          {vegetables[current].name}
        </h1>
      </div>

      {/* Prev */}
      <button
        onClick={() =>
          setCurrent(prev =>
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
          setCurrent(prev =>
            prev < vegetables.length - 1
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
        `}
      </style>

    </div>
  );
}