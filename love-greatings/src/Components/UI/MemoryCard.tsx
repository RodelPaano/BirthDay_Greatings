import { motion } from "framer-motion";

interface MemoryCardProps {
  item: {
    img: string;
    title: string;
    desc: string;
  };
  onClick: () => void;
}

export default function MemoryCard({ item, onClick }: MemoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="
        bg-white/40
        backdrop-blur-lg
        rounded-2xl
        shadow-xl
        overflow-hidden
        cursor-pointer
        border border-white/30
      "
    >
      <img
        src={item.img}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold text-pink-600">
          {item.title}
        </h2>
        <p className="text-sm text-gray-600">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}