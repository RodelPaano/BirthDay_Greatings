import MemoryCard from "./MemoryCard";

interface MemoryItem {
  img: string;
  title: string;
  desc: string;
}

interface GalleryProps {
  memories: MemoryItem[];
  onSelect: (item: MemoryItem) => void;
}

export default function Gallery({ memories, onSelect }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16 px-6">
      {memories.map((item, index) => (
        <MemoryCard
          key={index}
          item={item}
          onClick={() => onSelect(item)}
        />
      ))}
    </div>
  );
}