import { useState, useEffect } from "react";
export default function FamilyMembers({ goBack }) {

  const familyMembers = [
    {
      name: "Father",
      image: "https://cdn-icons-png.flaticon.com/512/3048/3048122.png"
    },
    {
      name: "Mother",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
    },
    {
      name: "Brother",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png"
    },
    {
      name: "Sister",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140057.png"
    },
    {
      name: "Grandfather",
      image: "https://cdn-icons-png.flaticon.com/512/1999/1999625.png"
    },
    {
      name: "Grandmother",
      image: "https://cdn-icons-png.flaticon.com/512/1999/1999633.png"
    },
    {
      name: "Uncle",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
    },
    {
      name: "Aunt",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
    },
    {
      name: "Baby",
      image: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png"
    },
    {
      name: "Family",
      image: "https://cdn-icons-png.flaticon.com/512/201/201818.png"
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
          familyMembers[current].name
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
          color: "white",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        ← Back
      </button>

      {/* Listen Button */}
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
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        🔊 {listening ? "Stop" : "Listen"}
      </button>

      {/* Center Section */}
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >

        {/* Image Box */}
        <div
          style={{
            width: "650px",
            height: "450px",
            borderRadius: "40px",
            border: "12px solid white",

            // backgroundImage:
            //   url(${familyMembers[current].image}),
              backgroundImage: `url(${familyMembers[current].image})`,

            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "white",

            boxShadow:
              "0 0 40px rgba(0,0,0,0.25)"
          }}
        />

        {/* Name */}
        <h1
          style={{
            marginTop: "25px",
            fontSize: "60px",
            fontWeight: "bold",
            color: "#111827",
            textShadow:
              "0 0 15px rgba(0,0,0,0.15)"
          }}
        >
          {familyMembers[current].name}
        </h1>

      </div>

      {/* Prev Button */}
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
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        ⬅ Prev
      </button>

      {/* Next Button */}
      <button
        onClick={() =>
          setCurrent(prev =>
            prev < familyMembers.length - 1
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
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Next ➡
      </button>

    </div>
  );
} 