import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Section 1: Hero */}
      <section className="h-screen bg-[url('https://images.unsplash.com/photo-1549144511-31c5731f9f7d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center flex flex-col justify-center items-center text-center">
        <div className="bg-[#001f3f]/70 p-10 rounded">
          <h1 className="text-5xl font-serif text-[#D4AF37] mb-4">Experience Exceptional Luxury in Shanghai</h1>
          <p className="text-xl mb-8">Discover refined hospitality, timeless elegance, and unforgettable moments at Mandarin Oriental Pudong, Shanghai.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/rooms-suites" className="bg-[#8B0000] px-6 py-3">Explore Rooms</Link>
            <Link to="/about" className="border border-[#D4AF37] px-6 py-3">Discover Our Hotel</Link>
          </div>
        </div>
      </section>

      {/* Section 2: Welcome */}
      <section className="flex flex-col md:flex-row items-center p-10 gap-10">
        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800" alt="Hotel Interior" className="w-full md:w-1/2" />
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-serif text-[#D4AF37] mb-6">Welcome to Mandarin Oriental</h2>
          <p className="text-lg">Located in the heart of Lujiazui, our hotel offers unparalleled luxury and stunning views of the Shanghai skyline, defining the pinnacle of refined hospitality.</p>
        </div>
      </section>

      {/* Section 3: Rooms Preview */}
      <section className="p-10 bg-[#001f3f]">
        <h2 className="text-4xl font-serif text-[#D4AF37] mb-10 text-center">Rooms & Suites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-[#D4AF37] p-4">
              <img src={`https://images.unsplash.com/photo-1618773928121-c37242e0101b?auto=format&fit=crop&q=80&w=500`} alt="Room" className="mb-4" />
              <h3 className="text-xl text-[#D4AF37]">Luxury Room {i}</h3>
              <p className="mb-4">Experience ultimate comfort and elegance.</p>
              <Link to="/rooms-suites" className="text-[#8B0000] font-bold">Explore Room</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Dining */}
      <section className="p-10 text-center">
        <h2 className="text-4xl font-serif text-[#D4AF37] mb-6">Exceptional Dining</h2>
        <p className="mb-6">Savor world-class culinary delights in our sophisticated restaurants.</p>
        <Link to="/dining" className="bg-[#8B0000] px-6 py-3">Discover Dining</Link>
      </section>

      {/* Section 5: Experiences */}
      <section className="p-10 bg-[#001f3f]">
        <h2 className="text-4xl font-serif text-[#D4AF37] mb-6 text-center">Luxury Experiences</h2>
        <p className="text-center mb-6">Curated moments of relaxation and indulgence.</p>
        <div className="text-center">
          <Link to="/about" className="border border-[#D4AF37] px-6 py-3">Discover More</Link>
        </div>
      </section>

      {/* Section 6: Location & Reservation */}
      <section className="p-10 text-center">
        <h2 className="text-4xl font-serif text-[#D4AF37] mb-6">Location & Reservation</h2>
        <p>111 Pudong Rd (S), Lujiazui, Pudong, Shanghai, China, 200120</p>
        <p className="mb-6">+86 21 2082 9888</p>
        <Link to="/about" className="bg-[#8B0000] px-6 py-3">Contact the Hotel</Link>
      </section>
    </div>
  );
};

export default Home;
