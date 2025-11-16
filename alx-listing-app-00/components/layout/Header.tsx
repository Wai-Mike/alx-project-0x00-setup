import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-blue-600" />
          <span className="font-semibold text-lg">ListingApp</span>
        </div>

        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <input
            className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search destinations, properties..."
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="px-3 py-1 rounded-full border">Sign in</button>
          <button className="px-3 py-1 rounded-full bg-blue-600 text-white">Sign up</button>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-2 overflow-x-auto">
        <ul className="flex gap-4 text-sm text-gray-700">
          {["Rooms", "Mansion", "Countryside", "Beachfront", "City", "Mountain"].map((item) => (
            <li key={item} className="whitespace-nowrap">
              <Link href="#" className="hover:underline">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;


