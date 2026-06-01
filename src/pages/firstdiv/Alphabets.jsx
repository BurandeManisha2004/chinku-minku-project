// export default function Alphabets({ goBack }) {

//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
      
//       {/* 🔙 BACK BUTTON */}
//       <div style={{ textAlign: "left", marginBottom: "10px" }}>
     
{/* <button
  onClick={() => goBack && goBack()}
  style={{
    padding: "8px 12px",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer"
  }}
>
  ← Back
</button> */}
//       </div>

//       <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
//         🔤 Alphabets A to Z
//       </h1>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(5, 1fr)",
//           gap: "10px",
//           marginTop: "20px"
//         }}
//       >
//         {letters.map((l) => (
//           <div
//             key={l}
//             style={{
//               padding: "15px",
//               backgroundColor: "#dcfce7",
//               borderRadius: "10px",
//               fontWeight: "bold",
//               fontSize: "20px",
//               textAlign: "center",
//               boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
//             }}
//           >
//             {l}
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }





import { useState } from "react";
import appleImg from "../../assets/night.mp4";
export default function Alphabets({ goBack }) {
  const data = [
    {
      letter: "A",
      word: "Apple",
      marathi: "सफरचंद",
      img: "https://i.ytimg.com/vi/7jFRy5QIXL4/maxresdefault.jpg",
      // video: "https://www.w3schools.com/html/mov_bbb.mp4"
       video: "/videos/apl1.mp4"
    },
    {
      letter: "B",
      word: "butterfly",
      marathi: "चेंडू",
      img: "https://img.freepik.com/premium-vector/alphabet-letter-b-butterfly_106715-4.jpg?w=2000",
      video: "/videos/but.mp4"
    },


     {
      letter: "C",
      word: "Cat",
      marathi: "चेंडू",
      img: " https://img.freepik.com/premium-vector/red-cat-vector-isolated-white-background-letter-c-flashcard_514344-6909.jpg?w=2000",
      video: "/videos/cat.mp4"
    },
     {
      letter: "D",
      word: "Dog",
      marathi: "सफरचंद",
      img: "https://c8.alamy.com/comp/KE3CPM/flashcard-letter-d-is-for-dog-illustration-KE3CPM.jpg",
      // video: "https://www.w3schools.com/html/mov_bbb.mp4"
       video: "/videos/dog.mp4"
    },
    {
      letter: "E",
      word: "Elephant",
      marathi: "चेंडू",
      img: "https://tse4.mm.bing.net/th/id/OIP.Jblzp2kPwENFjaCL2s1dLQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      video: "/videos/ele.mp4"
    },

  {
      letter: "F",
      word: "Frog",
      marathi: "चेंडू",
      img: " https://tse1.mm.bing.net/th/id/OIP.5XuAZ75fYMQJ-JZ4RojxZwHaIA?rs=1&pid=ImgDetMain&o=7&rm=3",
      video: "/videos/frog1.mp4"
    },
     {
      letter: "G",
      word: "Graps",
      marathi: "चेंडू",
      img: " https://img.freepik.com/premium-photo/isolated-fruit-alphabet-kids-g-grapes_599862-7896.jpg",
      video: "/videos/graps1.mp4"
    },
    {
      letter: "H",
      word: "Horse",
      marathi: "सफरचंद",
      img: "https://img.freepik.com/premium-vector/alphabet-h-horse-vector-educational_1050288-184.jpg?w=2000",
      // video: "https://www.w3schools.com/html/mov_bbb.mp4"
       video: "/videos/hors.mp4"
    },
    {
      letter: "J",
      word: "Juice",
      marathi: "चेंडू",
      img: "https://media.istockphoto.com/id/615287192/vector/flashcard-letter-j-is-for-juice.jpg?s=612x612&w=0&k=20&c=ShbgQsSnDoAO18LFcO4mcxFwrwMXGDhjw_-M4uH53WE=",
      video: "/videos/juice.mp4"
    },


     {
      letter: "K",
      word: "Kite",
      marathi: "चेंडू",
      img: "https://c8.alamy.com/comp/2GW7E12/flashcard-letter-k-is-for-kite-2GW7E12.jpg",
      video: "/videos/kite.mp4"
    },
     {
      letter: "L",
      word: "Lion",
      marathi: "सफरचंद",
      img: "https://thumbs.dreamstime.com/b/l-lion-abc-game-kids-word-letter-learning-words-study-english-cartoon-character-cute-animal-color-vector-illustration-174176015.jpg",
      // video: "https://www.w3schools.com/html/mov_bbb.mp4"
       video: "/videos/lion.mp4"
    },
    {
      letter: "M",
      word: "Monkey",
      marathi: "चेंडू",
      img: "https://img.freepik.com/premium-vector/m-monkey-alphabet-learning_249251-156.jpg?w=1480",
      video: "/videos/monky.mp4"
    },

  {
      letter: "N",
      word: "Night",
      marathi: "चेंडू",
      img: appleImg,
      // " https://tse1.mm.bing.net/th/id/OIP.5XuAZ75fYMQJ-JZ4RojxZwHaIA?rs=1&pid=ImgDetMain&o=7&rm=3",
      video: "/videos/night.mp4"
    },
     {
      letter: "O",
      word: "Orange",
      marathi: "चेंडू",
      img: "https://thumbs.dreamstime.com/b/alphabet-word-o-orange-vector-illustration-letter-114718102.jpg",
      video: "/videos/orange.mp4"
    },
     {
      letter: "P",
      word: "Pencil",
      marathi: "चेंडू",
      img: "https://tse4.mm.bing.net/th/id/OIP.lkhATf20Ce76-OH1xO099QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      video: "/videos/pencil.mp4"
    },
     {
      letter: "Q",
      word: "Queen",
      marathi: "सफरचंद",
      img: "https://cdn1.vectorstock.com/i/1000x1000/04/60/letter-q-tracing-queen-vector-32030460.jpg", // video: "https://www.w3schools.com/html/mov_bbb.mp4"
       video: "/videos/quuen.mp4"
    },
    {
      letter: "R",
      word: "Rabit",
      marathi: "चेंडू",
      img: "https://static.vecteezy.com/system/resources/previews/001/252/033/original/r-for-rabbit-vector.jpg",    
       video: "/videos/rabbit.mp4"
    },

  {
      letter: "S",
      word: "Sun",
      marathi: "चेंडू",
      img: " https://c8.alamy.com/comp/2HWP57G/alphabet-s-is-for-sun-vector-image-alphabet-flash-card-2HWP57G.jpg",   video: "/videos/sun.mp4"
    },
     {
      letter: "T",
      word: "Tamato",
      marathi: "चेंडू",
      img: "https://tse1.mm.bing.net/th/id/OIP.uAacii6Nn4H_tuEjB-lLxQHaHn?rs=1&pid=ImgDetMain&o=7&rm=3",     video: "/videos/tamato.mp4"
    },
    {
      letter: "U",
      word: "Umbrell",
      marathi: "चेंडू",
      img: "   https://tse2.mm.bing.net/th/id/OIP.PuvGy31AtUmZXvsKk7Yw4AHaF-?rs=1&pid=ImgDetMain&o=7&rm=3",   video: "/videos/night.mp4"
    },
     {
      letter: "O",
      word: "Orange",
      marathi: "चेंडू",
      img: "https://thumbs.dreamstime.com/b/alphabet-word-o-orange-vector-illustration-letter-114718102.jpg",
      video: "/videos/umbrell.mp4"
    },
     {
      letter: "V",
      word: "Van",
      marathi: "चेंडू",
      img: "https://c8.alamy.com/comp/2GTA60A/flashcard-letter-v-is-for-van-2GTA60A.jpg",
       video: "/videos/van.mp4"
    },
     {
      letter: "W",
      word: "Watermelon",
      marathi: "सफरचंद",
      img: "https://c8.alamy.com/comp/T7K4P0/watermelon-alphabet-isolated-on-white-background-letter-w-T7K4P0.jpg",       video: "/videos/watermelon.mp4"
    },
    {
      letter: "X",
      word: "Xray",
      marathi: "चेंडू",
      img: "https://th.bing.com/th/id/OIP.q1ZfqLiYhKn6UDoQjBb6pgHaH_?w=173&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",       video: "/videos/xray.mp4"
    },

  {
      letter: "Y",
      word: "Yello",
      marathi: "चेंडू",
      img: "https://c8.alamy.com/comp/GN5HDW/y-is-for-yellow-GN5HDW.jpg",
              video: "/videos/yello.mp4"
    },
     {
      letter: "Z",
      word: "Zebra",
      marathi: "चेंडू",
      img: "https://cdn1.vectorstock.com/i/1000x1000/98/65/animals-alphabet-z-is-for-zebra-vector-21429865.jpg",        video: "/videos/zebra1.mp4"
    }
  ];

  // step = 0 → image
  // step = 1 → video
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);

  const current = data[index];


  // const [index, setIndex] = useState(0);
  // const current = data[index];

  const speak = () => {
    const text = `${current.letter} for ${current.word}. ${current.marathi}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "IN-HI";
    speechSynthesis.speak(utterance);
  };


  const next = () => {
    if (step === 0) {
      // first go to video
      setStep(1);
    } else {
      // next letter image
      if (index < data.length - 1) {
        setIndex(index + 1);
        setStep(0);
      }
    }
  };

  const prev = () => {
    if (step === 1) {
      setStep(0);
    } else if (index > 0) {
      setIndex(index - 1);
      setStep(1);
    }
  };

 return (
  <div className="relative w-screen h-screen overflow-hidden bg-green">
<button
  onClick={goBack}
  className="absolute top-4 left-4 z-[9999]"
  style={{
    padding: "8px 12px",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer"
  }}
>
  ← Back
</button>
    {step === 0 ? (
      <div className="absolute inset-0 bg-green">

        {/* Blur Background */}
        {/* <img
          src={current.img}
          alt=""
        /> */}
          {/* className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110" */}


        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-green/40"></div>

        {/* Main Image */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img
            src={current.img}
            alt={current.word}
            className="max-w-[95%] max-h-[85%] object-contain drop-shadow-2xl rounded-3xl z-10"
          />
        </div>

      </div>
    ) : (
<div className="absolute inset-0">

  {/* Blur Video Background */}
  <video
    src={current.video}
    autoPlay
    muted
    loop
    className="
      absolute inset-0
      w-full
      h-full
      object-cover
      blur-3xl
      scale-125
      opacity-40
    "
  />

  {/* White Overlay */}
  <div className="absolute inset-0 bg-white/20"></div>

  {/* Main Video */}
  <div className="absolute inset-0 flex items-center justify-center p-4">
    <video
      src={current.video}
      controls
      autoPlay
      className="
        w-[95%]
        h-[85%]
        object-contain
        rounded-3xl
        shadow-[0_0_60px_rgba(255,255,255,0.9)]
        z-10
      "
    />
  </div>

</div>
    )}

    {/* SPEAK BUTTON */}
    <button
      onClick={speak}
      className="
        absolute top-5 right-5
        px-5 py-3
        rounded-xl
        border border-white/40
        bg-black/40
        backdrop-blur-md
        text-white
        font-bold
        shadow-lg
        z-50
      "
    >
      🔊 Speak
    </button>

    {/* NAVIGATION */}
    <div className="absolute bottom-5 left-0 w-full px-8 flex justify-between z-50">
      <button
        onClick={prev}
        className="
          px-5 py-3
          rounded-xl
          border border-white/40
          bg-black/40
          backdrop-blur-md
          text-white
          font-bold
        "
      >
        ⬅ Prev
      </button>

      <button
        onClick={next}
        className="
          px-5 py-3
          rounded-xl
          border border-white/40
          bg-black/40
          backdrop-blur-md
          text-white
          font-bold
        "
      >
        Next ➡
      </button>
    </div>

  </div>
);
};