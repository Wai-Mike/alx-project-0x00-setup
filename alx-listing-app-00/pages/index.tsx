import { PROPERTYLISTINGSAMPLE } from "@/constants";
import type { PropertyProps } from "@/interfaces";
import Pill from "@/components/common/Pill";

const filters = ["Top Villa", "Self Checkin", "Free Parking", "Pet Friendly", "Beachfront", "City View"];

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[320px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505692794403-34cb405ee902?q=80&w=1974&auto=format&fit=crop')` }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Find your favorite place here!
          </h1>
          <p className="text-white/90 mt-2">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
        <div className="flex gap-2">
          {filters.map((f) => (
            <Pill key={f} label={f} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((p: PropertyProps) => (
            <article key={p.name} className="border rounded-lg overflow-hidden hover:shadow-md transition">
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.name}</h3>
                  <span className="text-sm">⭐ {p.rating}</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">
                  {p.address.city}, {p.address.country}
                </p>
                <p className="font-semibold mt-2">${p.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;


