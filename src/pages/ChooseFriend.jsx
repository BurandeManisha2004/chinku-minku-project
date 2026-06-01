import { useState } from "react";
import boy from "../assets/boy.png";
import girl from "../assets/girl.png";

export default function ChooseFriend({ goBack, goNext }) {
  const [videoSrc, setVideoSrc] = useState(null);

  const handleSelect = (friend) => {
    const src =
      friend === "Chintu"
        ? "/videos/vedio1.mp4"
        : friend === "Minku"
        ? "/videos/chintu.mp4"
        : "/videos/teacher.mp4";

  console.log("Selected video:", src)
    setVideoSrc(src);
  };

  return (
    <div className="min-h-screen bg-sky-200 flex items-center justify-center p-4">

      {/* 🔥 VIDEO OVERLAY (IMPORTANT - outside everything) */}
     {videoSrc && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">

    {/* cinematic frame (NO animation) */}
    <div className="relative w-[95%] md:w-[70%] lg:w-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-300">

      {/* top glow bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400"></div>

      {/* video */}
<video
  key={videoSrc}
  src={videoSrc}
  controls
  autoPlay
  playsInline
  preload="auto"
  className="w-full max-h-[75vh] object-contain bg-black"
  onLoadedData={(e) => e.target.play()}
  onEnded={() => {
    setVideoSrc(null);
    goNext("done");
  }}
/>

      {/* bottom glow bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

      {/* label */}
      <div className="absolute top-4 left-4 bg-white/90 px-4 py-1 rounded-full text-sm font-bold text-purple-700 shadow">
        🎬 Magic Learning Video
      </div>

    </div>
    {/* SKIP BUTTON */}
<div className="absolute top-4 left-0 w-full flex justify-between items-center px-4 z-10">

  {/* BACK */}
  <button
    onClick={() => {
      setVideoSrc(null);
      goBack();
    }}
    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full font-bold shadow"
  >
    ⬅ Back
  </button>

  {/* SKIP */}
  <button
    onClick={() => {
      setVideoSrc(null);
      goNext("skipped");
    }}
    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full font-bold shadow"
  >
    Skip ⏭
  </button>

</div>
  </div>
)}
      <div className="w-full max-w-md bg-[#eefcff] rounded-3xl border-4 border-sky-300 shadow-2xl overflow-hidden">

        {/* BACK */}
        <div className="p-4">
          <button
            onClick={goBack}
            className="text-blue-700 font-bold text-lg"
          >
            ← Back
          </button>
        </div>

        {/* TITLE */}
        <div className="text-center px-4">
          <h1 className="text-3xl font-black text-gray-800">
            Choose Your Friend
          </h1>

          <p className="text-green-700 font-bold mt-2 text-lg">
            तुमचा मित्र निवडा
          </p>
        </div>

        {/* FRIEND CARDS */}
        <div className="grid grid-cols-3 gap-3 p-4 mt-6">

          <div className="bg-white rounded-2xl p-3 shadow border text-center">
            <img src={boy} className="w-20 h-24 object-contain mx-auto" />
            <h2 className="font-black mt-2">Chintu</h2>
            <button
              onClick={() => handleSelect("Chintu")}
              className="bg-green-500 text-white rounded-full w-full mt-3 py-2 shadow-md text-lg"
            >
              🔊
            </button>
          </div>

          <div className="bg-white rounded-2xl p-3 shadow border text-center">
            <img src={girl} className="w-20 h-24 object-contain mx-auto" />
            <h2 className="font-black mt-2">Minku</h2>
            <button
              onClick={() => handleSelect("Minku")}
              className="bg-pink-500 text-white rounded-full w-full mt-3 py-2 shadow-md text-lg"
            >
              🔊
            </button>
          </div>

          <div className="bg-white rounded-2xl p-3 shadow border text-center">
            <img src={girl} className="w-20 h-24 object-contain mx-auto" />
            <h2 className="font-black mt-2">Teacher</h2>
            <button
              onClick={() => handleSelect("Teacher")}
              className="bg-purple-500 text-white rounded-full w-full mt-3 py-2 shadow-md text-lg"
            >
              🔊
            </button>
          </div>

        </div>

        {/* MESSAGE */}
        <div className="p-4 pt-1">
          <div className="bg-white rounded-2xl p-3 shadow flex items-center gap-3 border">
            <img src={boy} className="w-14 h-14 object-contain" />

            <div>
              <p className="font-bold text-gray-800">
                नमस्कार! मी चिंटू.
              </p>

              <p className="text-sm text-gray-600 font-semibold mt-1">
                चला खेळत खेळत इंग्रजी शिकुया!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}