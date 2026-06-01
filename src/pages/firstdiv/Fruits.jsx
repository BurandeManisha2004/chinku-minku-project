import { useState, useEffect } from "react";

export default function Fruits({ goBack }) {

  const fruits = [
    {
      name: "Apple",
      image: "https://tse3.mm.bing.net/th/id/OIP.kzo22vGPqcf7d5w_QJhrfQHaFj?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
      color: "#ff4d4d"
    },
    {
      name: "Mango",
      image: "https://tse3.mm.bing.net/th/id/OIP.R7k1I2p3JvS0jwFarM6dmQHaDt?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
      color: "#ffb300"
    },
    {
      name: "Banana",
      image: "https://cdn.pixabay.com/photo/2015/11/05/23/08/banana-1025109_1280.jpg",
      color: "#ffe600"
    },
    {
      name: "Orange",
      image: "https://as1.ftcdn.net/jpg/04/16/30/46/1000_F_416304690_nOiivYOL6CGofeD5uq2H8T2nOrlTLVOy.jpg",
      color: "#ff7b00"
    },
    {
      name: "Grapes",
      image: "https://static.vecteezy.com/system/resources/previews/033/247/513/non_2x/green-grapes-background-ai-generative-pro-photo.jpg",
      color: "#9333ea"
    },
    {
      name: "Watermelon",
      image: "https://tse1.mm.bing.net/th/id/OIP.vGy5Q3SNG-l1dYK4fzgbkgHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
      color: "#22c55e"
    },
    { name: "Guava", image: "https://as1.ftcdn.net/jpg/02/76/24/42/1000_F_276244267_Li7N625WuwPi8f7tQQZ1ke8quOFpGfFR.jpg" },       // पेरू
  { name: "Kiwi", image: "https://rare-gallery.com/uploads/posts/808927-Kiwi-Closeup-White-background.jpg" },
  { name: "Pineapple", image: "https://cdn.pixabay.com/photo/2020/04/29/12/47/pineapple-5108775_1280.jpg" },   // अननस
  { name: "Strawberry", image: "https://th.bing.com/th/id/R.335ee400f088ff80fc6bba1c311f96c1?rik=ZcC0SaLe6SSGZw&riu=http%3a%2f%2fdebbienet.com%2fwp-content%2fuploads%2f2015%2f02%2fstrawberry.jpg&ehk=E1hxcdA%2fspHhZeMcnceq%2blBjJtDaJsmJJ%2f6jgAhXVLI%3d&risl=&pid=ImgRaw&r=0" }
  ];

  const [current, setCurrent] = useState(0);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    let interval;

    if (listening) {
      const speak = () => {
        speechSynthesis.cancel();

        const msg = new SpeechSynthesisUtterance(
          fruits[current].name
        );

        msg.rate = 0.8;
        msg.pitch = 1.2;

        speechSynthesis.speak(msg);
      };

useEffect(() => {
  let interval;

  if (listening) {
    const speak = () => {
      speechSynthesis.cancel();

      const msg = new SpeechSynthesisUtterance(
        fruits[current].name
      );

      msg.rate = 0.8;
      msg.pitch = 1.2;

      speechSynthesis.speak(msg);
    };

    speak();

    interval = setInterval(() => {
      speak();
    }, 1200); // प्रत्येक 1.2 सेकंदांनी पुन्हा बोलेल
  }

  return () => {
    clearInterval(interval);
    speechSynthesis.cancel();
  };
}, [listening, current]);

      speak();

      interval = setInterval(() => {
        speak();
      }, 1800);
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
          "linear-gradient(to bottom, #c3effe, #9fc6f4)",
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

  backgroundImage: `url(${fruits[current].image})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",

  boxShadow: "0 0 30px rgba(0,0,0,0.3)",
  animation: "magicFrame 2.5s ease-in-out infinite"
}}
        >
          {/* <img
            src={fruits[current].image}
            alt={fruits[current].name}
            style={{
              width: "250px",
              height: "250px",
              objectFit: "contain",
              animation: "fruitDance 2s infinite"
            }}
          /> */}
        </div>

        <h1
          style={{
            marginTop: "30px",
            fontSize: "60px",
            fontWeight: "bold",
            color:"black",
            textShadow: `0 0 20px ${fruits[current].color}`
          }}
        >
          {fruits[current].name}
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
            prev < fruits.length - 1
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

          @keyframes fruitDance {
            0% {
              transform: translateY(0) rotate(-8deg);
            }
            50% {
              transform: translateY(-20px) rotate(8deg);
            }
            100% {
              transform: translateY(0) rotate(-8deg);
            }
          }
        `}
      </style>
    </div>
  );
}
//  mala yat audio file nahi takayachi mala fakt tech bolele website for example mango mango mango joparent apan stop nahi karat listen butoon toparent