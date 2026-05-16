type ImageProps = {
  src: string;
  alt?: string;
};

export default function Image({
  src,
  alt,
}: ImageProps) {
  return (
    <div className="relative">

      {/* Glow */}
      <div className="
        absolute inset-0
        bg-pink-300
        blur-3xl
        opacity-30
        rounded-[40px]
      "></div>

      <img
        src={src}
        alt={alt}
        className="
          relative
          w-[430px]
          h-[560px]
          object-cover
          rounded-[40px]
          border border-white/40
          shadow-[0_20px_80px_rgba(236,72,153,0.35)]
          hover:scale-105
          transition duration-500
        "
      />
    </div>
  );
}