import { useState, useEffect, useMemo } from "react";

import Navbar from "../Components/Navbar";
import Button from "../Components/UI/button";
import Image from "../Components/UI/Image";
import LovePicture from "../Files/ChatGPT Image May 17, 2026, 12_36_08 AM.png";
import BackgroundMusic from "../Components/UI/BackgroundMusic";

import {
  FadeUp,
  FadeRight,
} from "../Components/UI/Motion";

import {
  Heart,
  Gift,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const [showLove, setShowLove] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [heartbeat, setHeartbeat] = useState(false);

  const [typedLove, setTypedLove] = useState("");
  const [typedGift, setTypedGift] = useState("");

  const loveText =
    "I will never give up on you, no matter how difficult things get. I love you so much ❤️ No one else will ever be able to take your position. With all my heart, I swear that 💖";

  const giftText =
    "Happy Birthday 🎁 You are my greatest blessing. This gift is not just something physical but a reminder that you are always loved, cherished, and appreciated every single day 💖";

  // 💖 LOVE TYPE EFFECT
  useEffect(() => {
    if (!showLove) return;

    let i = 0;
    const interval = setInterval(() => {
      setTypedLove(loveText.slice(0, i + 1));
      i++;
      if (i > loveText.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, [showLove]);

  // 🎁 GIFT TYPE EFFECT
  useEffect(() => {
    if (!showGift) return;

    let i = 0;
    const interval = setInterval(() => {
      setTypedGift(giftText.slice(0, i + 1));
      i++;
      if (i > giftText.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, [showGift]);

  // 💖 SHARED PARTICLES GENERATOR
  const generateParticles = (count: number) => {
    return [...Array(count)].map((_, i) => {
      const rand = (seed: number) => {
        const x = Math.sin(seed + i) * 10000;
        return x - Math.floor(x);
      };

      return {
        id: i,
        left: `${rand(1) * 100}%`,
        top: `${rand(2) * 100}%`,
        size: `${rand(3) * 25 + 10}px`,
        speed: `${rand(4) * 4 + 2}s`,
        delay: `${rand(5) * 2}s`,
      };
    });
  };

  // 💖 HEART PARTICLES
  const particles = useMemo(() => generateParticles(40), []);

  // 🎁 GIFT PARTICLES
  const giftParticles = useMemo(() => generateParticles(60), []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">

      <BackgroundMusic />

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-pink-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-rose-300 opacity-20 rounded-full blur-3xl"></div>

      {/* FLOATING EMOJIS */}
      <div className="absolute top-32 left-5 md:left-20 text-4xl md:text-5xl animate-bounce">💖</div>
      <div className="absolute bottom-20 right-5 md:right-20 text-3xl md:text-4xl animate-pulse">✨</div>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-14 px-6 pt-36 pb-20">

        {/* LEFT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          <FadeUp>

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/50 backdrop-blur-lg border border-white/40 shadow-lg text-pink-500 font-semibold mb-8">
              <Sparkles size={18} />
              Happy Birthday 🎂
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-gray-800">
              To The Most Special Person 💖
            </h1>

            <p className="mt-6 text-gray-600">
              Every moment with you is a blessing ✨
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <Button
                text="Open Gift"
                icon={<Gift size={20} />}
                onClick={() => {
                  setTypedGift("");
                  setShowGift(true);
                  setHeartbeat(true);
                  setTimeout(() => setHeartbeat(false), 1200);
                }}
              />

              <Button
                text="Love Message"
                variant="secondary"
                icon={<Heart size={20} />}
                onClick={() => {
                  setTypedLove("");
                  setShowLove(true);
                }}
              />

            </div>

          </FadeUp>

        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2 flex justify-center">

          <FadeRight>

            <div className="relative">

              <div className="absolute inset-0 bg-pink-400 opacity-20 blur-3xl rounded-[50px]"></div>

              <div className="absolute -top-6 right-6 text-5xl animate-bounce z-30 pointer-events-none">
                🎂
              </div>

              <Image src={LovePicture} alt="Birthday" />

            </div>

          </FadeRight>

        </div>

      </section>

      {/* 💓 HEARTBEAT EFFECT */}
      {heartbeat && (
        <div className="fixed inset-0 z-40 pointer-events-none animate-pulse bg-pink-500/10" />
      )}

      {/* 💖 LOVE MODAL */}
      {showLove && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          onClick={() => setShowLove(false)}
        >

          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
              <span
                key={p.id}
                className="absolute text-pink-400 animate-bounce opacity-70"
                style={{
                  left: p.left,
                  top: p.top,
                  fontSize: p.size,
                  animationDuration: p.speed,
                }}
              >
                💖
              </span>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-pink-600">Love Message 💖</h2>

            <p className="mt-4 text-gray-600 min-h-[120px]">
              {typedLove}
              <span className="animate-pulse">|</span>
            </p>

            <button
              onClick={() => setShowLove(false)}
              className="mt-6 px-5 py-2 bg-pink-500 text-white rounded-full"
            >
              Close 💖
            </button>
          </div>

        </div>
      )}

      {/* 🎁 GIFT MODAL */}
      {showGift && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          onClick={() => setShowGift(false)}
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {giftParticles.map((p) => (
              <span
                key={p.id}
                className="absolute text-yellow-300 animate-bounce opacity-70"
                style={{
                  left: p.left,
                  top: p.top,
                  fontSize: p.size,
                  animationDuration: p.speed,
                }}
              >
                🎉
              </span>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-pink-600">Special Gift 🎁</h2>

            <p className="mt-4 text-gray-600 min-h-[120px]">
              {typedGift}
              <span className="animate-pulse">|</span>
            </p>

            <button
              onClick={() => setShowGift(false)}
              className="mt-6 px-5 py-2 bg-pink-500 text-white rounded-full"
            >
              Close 🎁
            </button>
          </div>

        </div>
      )}

    </div>
  );
}