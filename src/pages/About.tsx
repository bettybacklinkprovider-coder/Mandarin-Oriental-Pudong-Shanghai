import React from 'react';

const About = () => {
  return (
    <div className="p-10">
      <div className="h-96 bg-[url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mb-6"></div>
      <h1 className="text-4xl font-serif text-[#D4AF37] mb-6">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl mb-4">Contact Us</h2>
          <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert("Backend integration required for form submission."); }}>
            <input type="text" placeholder="Name" required className="p-2 bg-[#001f3f] border border-[#D4AF37]" />
            <input type="email" placeholder="Email" required className="p-2 bg-[#001f3f] border border-[#D4AF37]" />
            <textarea placeholder="Message" required className="p-2 bg-[#001f3f] border border-[#D4AF37]" />
            <button type="submit" className="bg-[#8B0000] p-2">Send</button>
          </form>
        </div>
        <div className="bg-gray-800 h-64 flex items-center justify-center">
          <p>Map Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default About;
