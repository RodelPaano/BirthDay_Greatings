import { useState } from "react";

import Navbar from "../Components/Navbar";
import BackgroundMusic from "../Components/UI/BackgroundMusic";

import {
  FadeUp,
  FadeRight,
} from "../Components/UI/Motion";

import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Grid,
  List,
} from "lucide-react";

// COMPONENTS
import Gallery from "../Components/UI/Gallery";
import Timeline from "../Components/UI/Timeline";
import MemoryModal from "../Components/UI/MemoryModal";

// IMAGES
import img1 from "../Files/1d7e0ed4-e749-42de-9c1e-26ec9c12087d.jpg";
import img2 from "../Files/3541bf2d-a833-4640-9735-a0f2ed445096.jpg";
import img3 from "../Files/57bbe661-606e-466e-9efd-937eaa6c957d.jpg";
import img4 from "../Files/8f5ec72e-f7a2-484a-ad46-a4dc74243259.jpg";
import img5 from "../Files/ChatGPT Image May 17, 2026, 12_36_08 AM.png";
import img6 from "../Files/c569e63f-c75e-4e9f-9ce5-faa3e58c8102.jpg";

interface MemoryItem {
  img: string;
  title: string;
  desc: string;
}

const memories = [
  { img: img1, title: "First Smile 💖", desc: "A moment I will never forget." },
  { img: img2, title: "Happy Day ✨", desc: "Everything felt perfect." },
  { img: img3, title: "Unforgettable 🌸", desc: "One of the best memories." },
  { img: img4, title: "Golden Time 🌅", desc: "Simple but meaningful." },
  { img: img5, title: "Laugh Together 😂", desc: "Pure happiness." },
  { img: img6, title: "Forever Memory 💕", desc: "Always in my heart." },
];

export default function Memories() {
  const [selected, setSelected] = useState<MemoryItem | null>(null);

  // 👉 NEW: VIEW STATE
  const [view, setView] = useState<"grid" | "timeline">("grid");

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">

      <BackgroundMusic />

      {/* BACKGROUND */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-pink-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-rose-300 opacity-20 rounded-full blur-3xl"></div>

      <Navbar />

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto pt-36 px-6">

        <FadeUp>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/50 backdrop-blur-lg border border-white/40 shadow-lg text-pink-500 font-semibold mb-8">
            <Sparkles size={18} />
            Memories Collection
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-gray-800">
            Our Beautiful <span className="text-pink-500">Memories</span> 💖
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl">
            Every moment we shared is a story written in my heart ✨
          </p>

          {/* TOGGLE BUTTON */}
          <div className="mt-8 flex justify-center md:justify-start">

            <button
              onClick={() =>
                setView(view === "grid" ? "timeline" : "grid")
              }
              className="
                flex items-center gap-2

                px-6 py-3

                rounded-full

                bg-white/40
                backdrop-blur-xl

                border border-white/30

                shadow-lg

                text-pink-600
                font-semibold

                hover:scale-105
                transition
              "
            >
              {view === "grid" ? (
                <>
                  <List size={18} />
                  View Timeline
                  <ArrowRight size={18} />
                </>
              ) : (
                <>
                  <Grid size={18} />
                  View Gallery
                  <ArrowLeft size={18} />
                </>
              )}
            </button>

          </div>

        </FadeUp>
      </section>

      {/* CONTENT */}

      {/* GRID VIEW */}
      {view === "grid" && (
        <FadeUp>
          <Gallery memories={memories} onSelect={setSelected} />
        </FadeUp>
      )}

      {/* TIMELINE VIEW */}
      {view === "timeline" && (
        <FadeRight>
          <Timeline memories={memories} />
        </FadeRight>
      )}

      {/* MODAL */}
      <MemoryModal selected={selected} onClose={() => setSelected(null)} />

    </div>
  );
}