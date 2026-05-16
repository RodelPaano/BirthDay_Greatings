import { useEffect, useRef, useState } from "react";
import BirthdaySong from "../../Files/music/happy-birthday-music-box(chosic.com).mp3";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Set volume only once
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  // Start music after first user interaction (fix autoplay block)
  useEffect(() => {
    const startMusic = () => {
      if (!audioRef.current || hasStarted) return;

      audioRef.current.play().catch(() => {
        console.log("Autoplay still blocked");
      });

      setPlaying(true);
      setHasStarted(true);

      window.removeEventListener("click", startMusic);
      window.removeEventListener("keydown", startMusic);
    };

    window.addEventListener("click", startMusic);
    window.addEventListener("keydown", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("keydown", startMusic);
    };
  }, [hasStarted]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        console.log("Play failed");
      });
      setPlaying(true);
    }
  };

  return (
    <>
      {/* AUDIO */}
      <audio
        ref={audioRef}
        src={BirthdaySong}
        loop
        preload="auto"
      />

      {/* FLOATING BUTTON */}
      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-6
          right-6
          z-50
          p-4
          rounded-full
          bg-white/30
          backdrop-blur-xl
          border border-white/30
          shadow-xl
          hover:scale-110
          transition-all
          duration-300
        "
      >
        {playing ? (
          <Volume2 className="text-pink-500" />
        ) : (
          <VolumeX className="text-pink-500" />
        )}
      </button>
    </>
  );
}