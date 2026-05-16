interface MemoryItem {
  img: string;
  title: string;
  desc: string;
}

interface TimelineProps {
  memories: MemoryItem[];
}

export default function Timeline({ memories }: TimelineProps) {
  return (
    <div className="max-w-6xl mx-auto mt-20 px-6">

      {/* TITLE */}
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
        Memory Timeline 💖
      </h2>

      {/* GRID LAYOUT (same arrangement as gallery) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

        {memories.map((item, index) => (
          <div
            key={index}
            className="relative bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >

            {/* VERTICAL LINE STYLE INSIDE CARD */}
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-pink-300 opacity-50"></div>

            {/* DOT */}
            <div className="absolute left-[10px] top-4 w-3 h-3 bg-pink-500 rounded-full border-2 border-white"></div>

            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 md:h-60 object-cover"
            />

            {/* TEXT */}
            <div className="p-3 md:p-4 pl-6">

              <h3 className="text-pink-600 font-bold text-sm md:text-base">
                {item.title}
              </h3>

              <p className="text-gray-600 text-xs md:text-sm mt-1">
                {item.desc}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}