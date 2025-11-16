interface PillProps {
  label: string;
}

const Pill: React.FC<PillProps> = ({ label }) => {
  return (
    <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm whitespace-nowrap">
      {label}
    </button>
  );
};

export default Pill;


