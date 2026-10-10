import React from 'react';

const Rooms = () => {
  return (
    <div className="p-10">
      <div className="h-96 bg-[url('https://images.unsplash.com/photo-1618773928121-c37242e0101b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mb-6"></div>
      <h1 className="text-4xl font-serif text-[#D4AF37] mb-6">Rooms & Suites</h1>
      <p className="mb-6">Discover our range of luxurious accommodations with breathtaking views.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="border border-[#D4AF37] p-4">
            <img src={`https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600`} alt="Luxury Room" className="mb-4 w-full h-64 object-cover" />
            <h3 className="text-xl text-[#D4AF37]">Premium Suite {i}</h3>
            <p className="mb-4">Experience ultimate comfort and elegance.</p>
            <button className="bg-[#8B0000] px-4 py-2">Enquire Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
