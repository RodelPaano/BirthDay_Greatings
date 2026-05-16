import { motion } from "framer-motion";

interface MemoryItem {
  img: string;
  title: string;
  desc: string;
}

interface MemoryModalProps {
  selected: MemoryItem | null;
  onClose: () => void;
}

export default function MemoryModal({ selected, onClose }: MemoryModalProps) {
  if (!selected) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="
          bg-white
          rounded-2xl
          shadow-2xl

          w-full
          max-w-lg
          md:max-w-2xl

          overflow-hidden
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* IMAGE */}
        <div className="w-full bg-black flex items-center justify-center">
          <img
            src={selected.img}
            alt={selected.title}
            className="
              w-full
              max-h-[70vh]
              object-contain
              bg-black
            "
          />
        </div>

        {/* CONTENT */}
        <div className="p-5 text-center">

          <h2 className="text-xl md:text-2xl font-bold text-pink-600">
            {selected.title}
          </h2>

          <p className="text-gray-600 mt-2 text-sm md:text-base">
            {selected.desc}
          </p>

        </div>

      </motion.div>
    </div>
  );
}