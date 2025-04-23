import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-beige py-10 font-sans">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
    <div className="text-center md:text-left mb-4 md:mb-0">
      <h2 className="font-serif text-xl font-semibold">Apartman Nina</h2>
      <p className="text-sm">&copy; {new Date().getFullYear()} Sva prava zadržana.</p>
    </div>
    <div className="flex gap-6 text-sm">
      <a href="https://airbnb.com" target="_blank" className="hover:text-gold transition">Airbnb</a>
      <a href="/privacy" className="hover:text-gold transition">Privatnost</a>
      <a href="/contact" className="hover:text-gold transition">Kontakt</a>
    </div>
  </div>
</footer>


  );
};

export default Footer;
