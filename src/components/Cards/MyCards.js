import React from 'react';
import { Link } from 'react-router-dom';
import card1 from '../../imgs/card1.jpg';
import card5 from '../../imgs/card5.jpg';
import card3 from '../../imgs/card3.jpg';
import card2 from '../../imgs/card2.jpg';
import card15 from '../../imgs/card15.jpg';
import card13 from '../../imgs/card13.jpg';

const roomData = [
  { id: 'single', title: 'Single Room', img: card1, price: '199' },
  { id: 'family', title: 'Family Room', img: card5, price: '399' },
  { id: 'presidential', title: 'Presidential Suite', img: card3, price: '899' },
  { id: 'double', title: 'Double Room', img: card2, price: '299' },
  { id: 'single-luxury', title: 'Luxury Single', img: card15, price: '249' },
  { id: 'family-deluxe', title: 'Family Deluxe', img: card13, price: '450' },
];

const MyCards = () => {
  return (
    <section className="py-24 bg-white font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[#c5a47e] tracking-[0.4em] uppercase text-[10px] font-bold">Handpicked for you</span>
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-slate-900 mt-2">Featured Rooms</h2>
          <div className="w-20 h-[1px] bg-[#c5a47e] mx-auto mt-6"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {roomData.map((room, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container with Zoom Effect */}
              <div className="relative overflow-hidden aspect-[4/5] mb-6 shadow-xl rounded-sm">
                <img 
                  src={room.img} 
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500"></div>
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-[11px] font-bold tracking-widest text-slate-900 shadow-md">
                  FROM ${room.price}
                </div>
              </div>

              {/* Text Details */}
              <div className="text-center">
                <h3 className="text-xl font-['Playfair_Display'] text-slate-800 mb-2 group-hover:text-[#c5a47e] transition-colors">
                    {room.title}
                </h3>
                <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-4">Luxury & Comfort</p>
                
                <Link 
                  to={`/singleRoom/${room.id}`} 
                  className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase border-b border-[#c5a47e] pb-1 hover:border-slate-900 transition-all"
                >
                  View Sanctuary
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyCards;