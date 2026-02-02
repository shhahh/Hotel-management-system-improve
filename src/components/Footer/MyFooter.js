import React from 'react';
import { Link } from 'react-router-dom';

const MyFooter = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 px-6 font-['Poppins']">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-700/50 pb-16">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-['Playfair_Display'] tracking-tighter">
              SNG<span className="text-[#c5a47e]">HOTELS</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed italic">
              "Redefining the art of hospitality. Where every stay becomes a timeless memory."
            </p>
          </div>

          {/* Column 2: About Us (Aapka Data) */}
          <div>
            <h4 className="text-[#c5a47e] uppercase tracking-[0.2em] text-[11px] font-bold mb-8">About Us</h4>
            <ul className="space-y-4 text-sm text-slate-300 font-light">
              <li><Link href="#" className="hover:text-[#c5a47e] transition-colors">Our Aim</Link></li>
              <li><Link href="#" className="hover:text-[#c5a47e] transition-colors">Our Vision</Link></li>
              <li><Link href="#" className="hover:text-[#c5a47e] transition-colors">Testimonials</Link></li>
              <li><Link href="#" className="hover:text-[#c5a47e] transition-colors">Career & Internships</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Us (Aapki Locations) */}
          <div>
            <h4 className="text-[#c5a47e] uppercase tracking-[0.2em] text-[11px] font-bold mb-8">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-300 font-light">
              <li className="flex items-center gap-2"> <i className="fas fa-map-marker-alt text-[10px]"></i> Uttar Pradesh, India</li>
              <li>Mumbai Central</li>
              <li>Indore Heritage</li>
              <li>Ahmedabad Suites</li>
            </ul>
          </div>

          {/* Column 4: Social Presence */}
          <div>
            <h4 className="text-[#c5a47e] uppercase tracking-[0.2em] text-[11px] font-bold mb-8">Social Media</h4>
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition">
                <i className="fab fa-facebook-f text-[#c5a47e]"></i> Facebook
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition">
                <i className="fab fa-instagram text-[#c5a47e]"></i> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition">
                <i className="fab fa-twitter text-[#c5a47e]"></i> Twitter
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition">
                <i className="fab fa-youtube text-[#c5a47e]"></i> Youtube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] tracking-[0.3em] uppercase">
          <p>© 2006-2021 SNG HOTELS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;