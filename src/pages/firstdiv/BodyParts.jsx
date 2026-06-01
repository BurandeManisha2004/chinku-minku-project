import { useState, useEffect } from "react";

export default function BodyParts({ goBack }) {

  const bodyParts = [
    {
      name: "Eye",
      image: "https://tse1.mm.bing.net/th/id/OIP.om1l51pR6g93Za-eYNS61wHaC-?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Ear",
      image: "https://thfvnext.bing.com/th/id/OIP.i-kUEd9GaiG7CqmL6oSApgHaEJ?o=7&cb=thfvnextfalconrm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Nose",
      image: "https://tse1.explicit.bing.net/th/id/OIP.Y5YnNpCYFiCvqR6k5ZgWtwHaIF?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Mouth",
      image: "https://thfvnext.bing.com/th/id/OIP.ScFbuYQ-K2DOW65jNYprpAHaD6?w=311&h=180&c=7&r=0&o=7&cb=thfvnextfalcon&dpr=1.5&pid=1.7&rm=3"
    },
    {
      name: "Hand",
      image: "https://static.vecteezy.com/system/resources/previews/014/676/530/original/hand-icon-cartoon-style-vector.jpg"
    },
    {
      name: "Leg",
      image: "https://img.freepik.com/premium-vector/cartoon-human-legs-illustration-vector-graphic-lower-body-flat-design_599292-11033.jpg?w=2000"
    },
    {
      name: "Foot",
      image: "https://thfvnext.bing.com/th/id/OIP.o3Bk9f7eAXhrxXiuuV0mLgHaHa?w=196&h=196&c=7&r=0&o=7&cb=thfvnextfalcon&dpr=1.5&pid=1.7&rm=3"
    },
    {
      name: "Finger",
      image: "https://tse1.explicit.bing.net/th/id/OIP.2HRFKF8hHCaowA4LfvgQigHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Teeth",
      image: "https://thfvnext.bing.com/th/id/OIP.uSC0va48oqDvULj3gZGZVQHaEV?o=7&cb=thfvnextfalconrm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Tongue",
      image: "https://thfvnext.bing.com/th/id/OIP.pg6oVbZ5YyDxBHpH0wDaUwHaGx?o=7&cb=thfvnextfalconrm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Head",
      image: "https://tse4.mm.bing.net/th/id/OIP.QCu3swjXTyvTQeAD2bduYgHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3"
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
          bodyParts[current].name
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
          "linear-gradient(to bottom, #ffe4e6, #bfdbfe)",
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

        {/* Image Frame */}
        <div
          style={{
            width: "650px",
            height: "450px",
            borderRadius: "40px",
            border: "12px solid white",

            backgroundImage: `url(${bodyParts[current].image})`,
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
          {bodyParts[current].name}
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
            prev < bodyParts.length - 1
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