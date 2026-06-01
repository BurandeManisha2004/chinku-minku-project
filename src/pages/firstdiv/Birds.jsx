import { useState, useEffect } from "react";

export default function Birds({ goBack }) {

  const birds = [
    {
      name: "Parrot",
      image: "https://tse3.mm.bing.net/th/id/OIP.Ct8gRWSHnCcLr7ozTKmePAHaIp?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
      avatar: "🦜"
    },
    {
      name: "Peacock",
      image: "https://static.vecteezy.com/system/resources/previews/048/625/027/large_2x/peacock-displaying-its-feathers-in-a-garden-nature-background-free-photo.jpg",
      avatar: "🦚"
    },
    {
      name: "Sparrow",
      image: "https://cdn.britannica.com/70/131170-050-014B2062/House-sparrow.jpg",
      avatar: "🐤"
    },
    {
      name: "Duck",
      image: "https://tse1.mm.bing.net/th/id/OIP.NnIbHC2jRcesJZ7JaDCgAgHaE7?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
      avatar: "🦆"
    },
    {
      name: "Eagle",
      image: "https://static.vecteezy.com/system/resources/previews/030/497/833/non_2x/majestic-bald-eagle-flying-mid-air-with-spread-wings-and-talons-generated-by-ai-free-photo.jpg",
      avatar: "🦅"
    },
    {
      name: "Crow",
image:"https://tse1.mm.bing.net/th/id/OIP.RBKQx_VnePTMguEXfC_Z4AHaFj?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
      avatar: "🐦‍⬛"
    },
    {
      name: "Butterfly",
image:"https://species.idaho.gov/wp-content/uploads/2021/08/ghows-TX-200909283-908d8e60.jpg",
      avatar: "🦋"
    }

  ];
  const [current, setCurrent] = useState(0);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    let interval;

    if (listening) {
      const speak = () => {
        speechSynthesis.cancel();

        const msg = new SpeechSynthesisUtterance(
          birds[current].name
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
          "linear-gradient(to bottom, #c3fefe, #9fc6f4)",
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
            width: "650px",
            height: "450px",
            borderRadius: "40px",
            border: "12px solid white",

            backgroundImage: `url(${birds[current].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",

            boxShadow:
              "0 0 40px rgba(0,0,0,0.3)"
          }}
        />

        <h1
          style={{
            marginTop: "25px",
            fontSize: "60px",
            fontWeight: "bold"
          }}
        >
          {birds[current].name}
        </h1>
      </div>

      {/* Flying Bird */}
      <div
        key={current}
        style={{
          position: "absolute",
          top: "70px",
          left: "-80px",
          fontSize: "80px",
          zIndex: 999,
          animation:
            "flyBird 10s linear infinite, flap 0.4s infinite"
        }}
      >
        {birds[current].avatar}
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
            prev < birds.length - 1
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

          @keyframes flyBird {

            0% {
              left: -80px;
              top: 120px;
            }

            10% {
              top: 80px;
            }

            20% {
              top: 150px;
            }

            30% {
              top: 60px;
            }

            40% {
              top: 170px;
            }

            50% {
              top: 50px;
            }

            60% {
              top: 140px;
            }

            70% {
              top: 70px;
            }

            80% {
              top: 130px;
            }

            90% {
              top: 90px;
            }

            100% {
              left: calc(100% - 80px);
              top: 120px;
            }
          }

          @keyframes flap {

            0% {
              transform: scale(1) rotate(-12deg);
            }

            50% {
              transform: scale(1.2) rotate(12deg);
            }

            100% {
              transform: scale(1) rotate(-12deg);
            }
          }

        `}
      </style>

    </div>
  );
} 