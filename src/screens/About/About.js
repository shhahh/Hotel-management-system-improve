import React from 'react';
import hotelVideo from '../../imgs/video.mp4';
import AboutLegacy from '../../components/AboutLegacy';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    
    <div className="bg-white">
      {/* Cinematic Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center bg-black overflow-hidden">
        {/* High-Quality Video Container */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: '0.8' }} // Clarity ke liye thodi opacity badhayi
        >
          <source src={hotelVideo} type="video/mp4" />
        </video>
        
        {/* Subtle Gradient Overlay: Isse clarity behtar lagti hai */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10"></div>

        <div className="relative z-20 text-center px-4">
          <span className="text-premium tracking-[0.5em] uppercase text-xs mb-4 block animate-pulse">
            The Art of Luxury
          </span>
          <h1 className="font-['Playfair_Display'] text-white text-6xl md:text-8xl font-light mb-6">
            Our Story
          </h1>
          <div className="w-32 h-[1px] bg-premium mx-auto"></div>
        </div>
      </section>

       <div>
          
        </div>

      {/* Modern Story Content */}
      <section className="py-24 px-6 max-w-5xl mx-auto font-['Poppins']">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl font-['Playfair_Display'] text-slate-900 mb-6 leading-tight">
              Crafting Memorable <br /> Experiences Since 2020
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              SNG Hotels, founded by Vineet Kumar, started with a vision to redefine 
              budget hospitality into a global luxury chain. Today, we stand proud with 
              millions of rooms across India, UAE, UK, and beyond.
            </p>
            <div className="flex gap-4">
              <Link to="/rooms" className="bg-premium text-white px-8 py-3 tracking-widest text-[10px] font-bold uppercase hover:bg-black transition-all duration-500">
                Book Room
              </Link>
            </div>
          </div>
          
          {/* Side Info Box */}
          <div className="bg-slate-50 p-10 border-l-4 border-premium">
            <p className="text-slate-500 italic text-lg leading-relaxed">
              "Hotel Park City is consistently acclaimed among the best, proudly rated a 
              Top Ski Hotel by Conde Nast Traveler."
            </p>
            <p className="mt-4 font-bold text-slate-800">— AAA Four Diamond Resort</p>
          </div>
        </div>
      </section>

     <AboutLegacy />
    </div>
  );
};


export default About;


