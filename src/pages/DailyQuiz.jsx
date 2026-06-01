
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

const questions = [
  {
    question: "आपण काय खातो?",
    answer: "apple",
    speak: "आपण काय खातो?",
    options: [
      {
        name: "Apple",
        img: "https://images.pexels.com/photos/588587/pexels-photo-588587.jpeg"
      },
      {
        name: "Car",
        img: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg"
      },
      {
        name: "Phone",
        img: "https://m.media-amazon.com/images/I/61xO1VgVJcL.jpg"
      }
    ]
  },

  {
    question: "आपण काय पितो?",
    answer: "water",
    speak: "आपण काय पितो?",
    options: [
      {
        name: "Water",
        img: "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg"
      },
      {
        name: "Home",
        img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        name: "Light",
        img: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg"
      }
    ]
  },

  {
    question: "आपण कुठे राहतो?",
    answer: "home",
    speak: "आपण कुठे राहतो?",
    options: [
      {
        name: "Home",
        img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        name: "Apple",
        img: "https://images.pexels.com/photos/588587/pexels-photo-588587.jpeg"
      },
      {
        name: "Bus",
        img: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg"
      }
    ]
  },



  {
  question: "आकाशाचा रंग काय आहे?",
  answer: "blue",
  speak: "आकाशाचा रंग काय आहे?",
  options: [
    {
      name: "Blue",
      img: "https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg"
    },
    {
      name: "Banana",
      img: "https://images.pexels.com/photos/461208/pexels-photo-461208.jpeg"
    },
    {
      name: "Dog",
      img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
    }
  ]
},

{
  question: "आपण शाळेत कशाने जातो?",
  answer: "bus",
  speak: "आपण शाळेत कशाने जातो?",
  options: [
    {
      name: "Bus",
      img: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg"
    },
    {
      name: "Apple",
      img: "https://images.pexels.com/photos/588587/pexels-photo-588587.jpeg"
    },
    {
      name: "Bottle",
      img: "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg"
    }
  ]
},

{
  question: "आपण काय लिहितो?",
  answer: "pen",
  speak: "आपण काय लिहितो?",
  options: [
    {
      name: "Pen",
      img: "https://images.pexels.com/photos/606542/pexels-photo-606542.jpeg"
    },
    {
      name: "Car",
      img: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg"
    },
    {
      name: "Orange",
      img: "https://images.pexels.com/photos/42059/background-blue-bright-close-up-42059.jpeg"
    }
  ]
},

{
  question: "आपण कोणते फळ खातो?",
  answer: "banana",
  speak: "आपण कोणते फळ खातो?",
  options: [
    {
      name: "Banana",
      img: "https://images.pexels.com/photos/461208/pexels-photo-461208.jpeg"
    },
    {
      name: "Chair",
      img: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg"
    },
    {
      name: "Bike",
      img: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg"
    }
  ]
},

{
  question: "आपण वेळ कशात पाहतो?",
  answer: "clock",
  speak: "आपण वेळ कशात पाहतो?",
  options: [
    {
      name: "Clock",
      img: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg"
    },
    {
      name: "Mango",
      img: "https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg"
    },
    {
      name: "Train",
      img: "https://images.pexels.com/photos/302428/pexels-photo-302428.jpeg"
    }
  ]
},

{
  question: "आपण कुठे झोपतो?",
  answer: "bed",
  speak: "आपण कुठे झोपतो?",
  options: [
    {
      name: "Bed",
      img: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg"
    },
    {
      name: "Bus",
      img: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg"
    },
    {
      name: "Apple",
      img: "https://images.pexels.com/photos/588587/pexels-photo-588587.jpeg"
    }
  ]
},

{
  question: "मांजर इंग्लिश मध्ये काय म्हणतात?",
  answer: "cat",
  speak: "मांजर इंग्लिश मध्ये काय म्हणतात?",
  options: [
    {
      name: "Cat",
      img: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
    },
    {
      name: "Dog",
      img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
    },
    {
      name: "Fish",
      img: "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg"
    }
  ]
},

{
  question: "आपण काय घालतो?",
  answer: "shirt",
  speak: "आपण काय घालतो?",
  options: [
    {
      name: "Shirt",
      img: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
    },
    {
      name: "Bottle",
      img: "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg"
    },
    {
      name: "Fan",
      img: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg"
    }
  ]
}


];

// export default function DailyQuiz() {
export default function DailyQuiz({ goBack }) {
  const [index, setIndex] = useState(0);

  const [message, setMessage] = useState("");

  const [started, setStarted] = useState(false);

  const recognitionRef = useRef(null);

  const lockRef = useRef(true);

  const q = questions[index];
const [showVideo, setShowVideo] = useState(false);
  // 🔊 SPEAK FUNCTION
  const speak = (text, cb) => {

    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(text);

    const voices = window.speechSynthesis.getVoices();

    msg.voice =
      voices.find((v) => v.lang.includes("hi")) ||
      voices[0];

    msg.lang = "hi-IN";

     msg.rate = 0.9;

    msg.pitch = -8.1;

    msg.volume = 1;
    msg.onend = () => {
      if (cb) cb();
    };

    window.speechSynthesis.speak(msg);
  };

  // 🎤 START LISTENING
  const startListening = () => {

    const SR =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SR) {
      alert(
        "Speech Recognition supported नाही 😔 Chrome वापरा"
      );
      return;
    }

    const rec = new SR();

    recognitionRef.current = rec;

    rec.lang = "en-US";

    rec.continuous = false;

    rec.interimResults = false;

    rec.maxAlternatives = 1;

    rec.start();

    rec.onresult = (e) => {

      const voice = e.results[0][0].transcript
        .toLowerCase()
        .trim();

      console.log("Heard:", voice);

      checkAnswer(voice);
    };

    rec.onerror = (e) => {
      console.log(e.error);
    };

    rec.onend = () => {

      if (!lockRef.current) {

        setTimeout(() => {

          rec.start();

        }, 800);

      }
    };
  };

  // ▶ START GAME
//   const startGame = () => {

//     setStarted(true);

//     speechSynthesis.getVoices();

//     speak(
//       "🎮 Welcome childrens! चला मजा करूया!",
//       () => {

//         setTimeout(() => {

//           speak(q.speak, () => {

//             lockRef.current = false;

//             startListening();

//           });

//         }, 1200);

//       }
//     );
//   };


const startGame = () => {
  setStarted(true);
  setShowVideo(true);
};

useEffect(() => {
  setStarted(true);
  setShowVideo(true);
}, []);
  // 🔁 NEXT QUESTION
  useEffect(() => {

    if (index === 0 || !started) return;

    setMessage("");

    lockRef.current = true;

    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }

    setTimeout(() => {

      speak(q.speak, () => {

        lockRef.current = false;

        startListening();

      });

    }, 1200);

  }, [index]);

  // ✅ CHECK ANSWER
  const checkAnswer = (voice) => {

    const cleanedVoice = voice
      .toLowerCase()
      .replace(/[^a-zA-Z ]/g, "")
      .trim();

    const cleanedAnswer = q.answer
      .toLowerCase()
      .trim();

    const isCorrect =
      cleanedVoice === cleanedAnswer ||
      cleanedVoice.includes(cleanedAnswer) ||
      cleanedAnswer.includes(cleanedVoice);

    if (isCorrect) {

      const msg =
         `हो ${q.answer} correct answer`;

      setMessage("🎉"+ msg + " 👏");

      speak(msg);

      confetti({
        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 }
      });

      lockRef.current = true;

      setTimeout(() => {

        setIndex((p) =>
          (p + 1) % questions.length
        );

      }, 3000);

    } else {

      setMessage("😄 पुन्हा प्रयत्न करा!");

      speak("पुन्हा प्रयत्न करा");

    }
  };

  return (

    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden p-4 bg-gradient-to-br from-sky-300 via-pink-300 to-yellow-200">

{/* 🎬 INTRO VIDEO */}
{/* 🎬 INTRO VIDEO */}
{showVideo && (
  <div className="fixed inset-0 bg-white/90 flex items-center justify-center z-50">

    {/* 🎥 Video Frame */}
    <div className="w-[85%] h-[80%] bg-black rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden border-4 border-gray-800">

<video
  autoPlay
 className="w-full h-full object-contain"
  onEnded={() => {
    setShowVideo(false);

    setTimeout(() => {
      speak("चला गेम सुरू करूया!", () => {
        setTimeout(() => {
          speak(q.speak, () => {
            lockRef.current = false;
            startListening();
          });
        }, 800);
      });
    }, 500);
  }}
>
  <source src="/vedio1.mp4" type="video/mp4" />
</video>

    {/* 🎞 FILM GRAIN OVERLAY (extra cinematic feel) */}
    <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/noise.png')] z-20"></div>

      {/* </video> */}

    </div>

  </div>
)}
{/* 🔙 BACK BUTTON */}
{/* 🔙 BACK BUTTON */}
<div className="absolute top-5 left-5 z-50">
  <button
    onClick={() => {
      window.speechSynthesis.cancel();

      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }

      lockRef.current = true;

      goBack();
    }}
    className="bg-white px-5 py-2 rounded-full shadow-lg font-bold text-blue-700 hover:scale-105 transition"
  >
    ← Back
  </button>
</div>

      {/* 🌈 DECOR */}
      <div className="absolute text-6xl top-5 left-5 animate-bounce">
        ☁️
      </div>

      <div className="absolute text-6xl top-10 right-10 animate-bounce">
        🌈
      </div>

      <div className="absolute text-6xl bottom-10 left-10 animate-bounce">
        🌟
      </div>

      <div className="absolute text-6xl bottom-5 right-5 animate-bounce">
        🎊
      </div>

      {/* 🎮 TITLE */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-2xl animate-pulse text-center">

        🎮 Kids Cartoon Learning World 🎈

      </h1>

      {/* ▶ START BUTTON */}
      {/* {!started && (

        <button
          onClick={startGame}
          className="
          mt-10
          px-10
          py-5
          text-3xl
          font-bold
          bg-yellow-400
          hover:bg-yellow-500
          rounded-full
          shadow-2xl
          animate-bounce
        "
        >

          ▶ START GAME

        </button>

      )} */}

      {/* ❓ QUESTION */}
      {started && (

        <>
          <div className="mt-8 bg-white/90 p-6 sm:p-8 rounded-[40px] shadow-2xl border-4 border-yellow-300 w-[95%] sm:w-[90%] max-w-3xl text-center">

            <h2 className="text-2xl sm:text-4xl font-bold text-purple-700">

              {q.question}

            </h2>

          </div>

          {/* 🖼 OPTIONS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {q.options.map((opt, i) => (

              <div
                key={i}
                onClick={() =>
                  checkAnswer(
                    opt.name.toLowerCase()
                  )
                }
                className="
                w-[280px]
                h-[400px]
                bg-white
                rounded-[40px]
                shadow-2xl
                border-4
                border-pink-300
                flex
                flex-col
                items-center
                justify-center
                hover:scale-105
                transition
                cursor-pointer
              "
              >

                <img
                  src={opt.img}
                  alt={opt.name}
                  className="
                  w-[220px]
                  h-[220px]
                  object-cover
                  rounded-3xl
                  shadow-lg
                "
                />

                <h2 className="mt-5 text-3xl font-extrabold text-purple-700">

                  {opt.name}

                </h2>

              </div>

            ))}

          </div>

          {/* 💬 MESSAGE */}
          {message && (

            <div className="mt-10 bg-white px-8 py-4 rounded-full text-2xl lg:text-3xl font-bold text-green-600 animate-bounce shadow-2xl text-center">

              {message}

            </div>

          )}

        </>

      )}

    </div>
  );
}