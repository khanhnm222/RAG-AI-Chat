import { createUUID } from "@/utils/uuid";

interface ChipListProps {
  list: {
    isAI: boolean;
    message: string;
  }[];
  onSelect: (value: {
    isAI: boolean;
    message: string;
  }) => void
}
const ChipList = ({ list = [], onSelect }: ChipListProps) => {
  return (
    <div className="flex gap-1 px-3">
      {list.map((item, index) => (
        <div
          draggable="true"
          role="button"
          title="Hover chip"
          key={index}
          onClick={() => onSelect(item)}
          className="h-8 px-3 w-max flex gap-2 items-center rounded-full border bg-primary-1 hover:bg-primary hover:text-white border-primary text-black focus:bg-gray-300"
        >
          <span key={createUUID()} className="block text-sm font-medium">{item.message}</span>
        </div>
      ))}
    </div>
  );
};

export default ChipList;