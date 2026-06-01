import { useState, useEffect } from "react";

export default function Animals({ goBack }) {

  const animals = [
    {
      name: "Cat",
      image: "https://img.freepik.com/premium-photo/cat-table-with-brown-background_865967-49804.jpg",
      avatar: "🐈"
    },
    {
      name: "Dog",
      image: "https://tse2.mm.bing.net/th/id/OIP.8sZWMY1EFwa8JOLK-UGJVAHaFn?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
      avatar: "🐕"
    },
    {
      name: "Lion",
      image: "https://tse3.mm.bing.net/th/id/OIP.y6MXl1TwB-x2bZFfTsh7MAHaEK?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
      avatar: "🦁"
    },
    {
      name: "Elephant",
      image: "https://tse2.mm.bing.net/th/id/OIP.0zuiKlJO7C_k5wU-PQvvZgHaE7?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
      avatar: "🐘"
    },
    {
      name: "Monkey",
      image: "https://thfvnext.bing.com/th/id/OIP.uPDe18QA1SWLkAmHTE2qVgHaE8?o=7&cb=thfvnextfalconrm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      avatar: "🐵"
    },
    {
      name: "Cow",
      image: "https://tse1.mm.bing.net/th/id/OIP.eTOpV2CVtM8i_kJgkVAt9gHaE8?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
      avatar: "🐄"
    },
      {
      name: "Buffelo",
      image: "https://cdn.britannica.com/63/145563-050-5E0EC254/water-buffalo.jpg",
      avatar: "🐃"
    },
      {
      name: "Bull",
      image: "https://cdn.pixabay.com/photo/2017/08/15/17/35/bull-2644808_1280.jpg",
      avatar: "🐂"
    },
      {
      name: "Rat",
      image: "https://cdn.britannica.com/26/65326-050-53232216/Norway-rat.jpg",
      avatar: "🐀"
    },
      {
      name: "Horse",
      image: "https://static.vecteezy.com/system/resources/thumbnails/022/778/226/small_2x/brown-horse-galloping-in-the-field-illustration-ai-generative-free-photo.jpg",
      avatar: "🫏"
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
          animals[current].name
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

            backgroundImage: `url(${animals[current].image})`,
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
          {animals[current].name}
        </h1>

      </div>

      {/* Moving Animal Avatar */}
 <div
  key={current}
  style={{
    position: "absolute",
    bottom: "90px",
    right: "20px",
    fontSize: "70px",
    animation: "walkAnimalReverse 8s linear infinite"
  }}
>
  {animals[current].avatar}
</div>
        {/* {animals[current].avatar} */}
      {/* </div> */}

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
            prev < animals.length - 1
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
@keyframes walkAnimalReverse {

  0% {
    right: 20px;
    transform: translateY(0px) rotate(10deg);
  }

  10% {
    transform: translateY(-10px) rotate(-10deg);
  }

  20% {
    transform: translateY(0px) rotate(10deg);
  }

  30% {
    transform: translateY(-10px) rotate(-10deg);
  }

  40% {
    transform: translateY(0px) rotate(10deg);
  }

  50% {
    transform: translateY(-10px) rotate(-10deg);
  }

  60% {
    transform: translateY(0px) rotate(10deg);
  }

  70% {
    transform: translateY(-10px) rotate(-10deg);
  }

  80% {
    transform: translateY(0px) rotate(10deg);
  }

  90% {
    transform: translateY(-10px) rotate(-10deg);
  }

  100% {
    right: calc(100% - 120px);
    transform: translateY(0px) rotate(10deg);
  }
}
`}
</style>

    </div>
  );
} 
