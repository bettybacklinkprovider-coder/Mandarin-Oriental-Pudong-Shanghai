import React from 'react';

const Dining = () => {
  return (
    <div className="p-10">
      <div className="h-96 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mb-6"></div>
      <h1 className="text-4xl font-serif text-[#D4AF37] mb-6">Dining</h1>
      <p className="mb-6">Indulge in our exquisite culinary offerings featuring world-class flavors.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="border border-[#D4AF37] p-4">
            <img src={`https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600`} alt="Fine Dining" className="mb-4 w-full h-64 object-cover" />
            <h3 className="text-xl text-[#D4AF37]">Fine Dining Venue {i}</h3>
            <p className="mb-4">Savor gourmet cuisine in a sophisticated atmosphere.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dining;
