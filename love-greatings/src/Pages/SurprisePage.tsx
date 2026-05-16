import { useState, useMemo } from "react";

import Navbar from "../Components/Navbar";
import BackgroundMusic from "../Components/UI/BackgroundMusic";

import {
  FadeUp,
} from "../Components/UI/Motion";

import {
  Gift,
  Sparkles,
} from "lucide-react";

export default function SurprisePage() {
  const [unlocked, setUnlocked] = useState(false);
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");

  const correctCode = "LOVE"; // 🔐 secret code

  const confettiParticles = useMemo(() => {
    return [...Array(80)].map((_, i) => {
      const rand = (seed: number) => {
        const x = Math.sin(seed + i) * 10000;
        return x - Math.floor(x);
      };
      return {
        id: i,
        left: `${rand(1) * 100}%`,
        top: `${rand(2) * 100}%`,
        fontSize: `${rand(3) * 22 + 10}px`,
        animationDuration: `${rand(4) * 3 + 1}s`,
      };
    });
  }, []);

  const handleUnlock = () => {
    if (code.toUpperCase() === correctCode) {
      setUnlocked(true);
    } else {
      alert("Wrong code 💔 Try again");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">

      <BackgroundMusic />

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-pink-300 opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-rose-300 opacity-20 rounded-full blur-3xl" />

      {/* FLOATING */}
      <div className="absolute top-28 left-10 text-4xl animate-bounce">💖</div>
      <div className="absolute top-1/2 right-10 text-3xl animate-pulse">🎂</div>

      <Navbar />

      {/* HERO */}
      <section className="relative z-10 max-w-5xl mx-auto pt-36 px-6 text-center">

        <FadeUp>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/50 backdrop-blur-lg border border-white/40 shadow-lg text-pink-500 font-semibold mb-8">
            <Sparkles size={18} />
            Secret Surprise 🔐
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-gray-800">
            Hidden Love Room 💖
          </h1>

          <p className="mt-6 text-gray-600">
            Enter secret code to unlock your surprise 🎁
          </p>

        </FadeUp>

        {/* LOCK SCREEN */}
        {!unlocked && (
          <div className="mt-12 flex flex-col items-center gap-4">

            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter Secret Code..."
              className="
                px-5 py-3
                rounded-full
                bg-white/60
                backdrop-blur-xl
                border border-white/40
                text-center
                outline-none
              "
            />

            <button
              onClick={handleUnlock}
              className="
                px-6 py-3
                bg-pink-500
                text-white
                rounded-full
                hover:scale-105
                transition
              "
            >
              Unlock 💖
            </button>

          </div>
        )}

        {/* GIFT */}
        {unlocked && (
          <div className="mt-16 flex justify-center">

            <div
              onClick={() => setOpen(true)}
              className="
                relative
                w-48 h-48
                bg-white/40
                backdrop-blur-xl
                border border-white/30
                rounded-3xl
                shadow-2xl
                flex items-center justify-center
                cursor-pointer
                hover:scale-110
                transition
              "
            >

              <Gift size={70} className="text-pink-500" />

              {/* floating hearts */}
              <div className="absolute -top-4 -right-4 animate-bounce">💖</div>
              <div className="absolute -bottom-4 -left-4 animate-pulse">✨</div>

            </div>

          </div>
        )}

      </section>

      {/* 💥 SURPRISE MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >

          {/* 🎉 CONFETTI */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">

            {confettiParticles.map((p) => (
              <span
                key={p.id}
                className="absolute text-pink-400 animate-bounce"
                style={{
                  left: p.left,
                  top: p.top,
                  fontSize: p.fontSize,
                  animationDuration: p.animationDuration,
                }}
              >
                🎉
              </span>
            ))}

          </div>

          {/* MODAL */}
          <div
            className="
              relative
              bg-white/95
              p-8
              rounded-3xl
              shadow-2xl
              max-w-md
              text-center
              animate-pulse
            "
            onClick={(e) => e.stopPropagation()}
          >

            <h2 className="text-2xl font-bold text-pink-600">
              💖 Surprise Unlocked 🎁
            </h2>

            <p className="mt-4 text-gray-600">
              You are not just special… you are my favorite person in this whole world 💖  
              Every moment with you is a gift I will always treasure ✨
              <span className="animate-pulse">|</span>
            </p>

            <div className="mt-6 text-3xl">
              💖🎂✨
            </div>

            <button
              onClick={() => setOpen(false)}
              className="
                mt-6
                px-5 py-2
                bg-pink-500
                text-white
                rounded-full
              "
            >
              Close 💖
            </button>

          </div>

        </div>
      )}

    </div>
  );
}