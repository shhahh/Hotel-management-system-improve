import React from 'react';
import { Link, useParams } from "react-router-dom";
import MyCarousel from '../../components/Carousel/MyCarousel';
import card5 from '../../imgs/card5.jpg';
import card2 from '../../imgs/card2.jpg';
import card3 from '../../imgs/card3.jpg';

// In-file details (Later you can fetch this from Firebase)
const roomsDetails = {
    single: {
        capacity: 1,
        breakfast: "Included",
        price: 1200,
        pets: "Allowed",
        roomtype: "Single",
        size: "250 sqft",
        description: "Experience solitude in our elegantly designed single rooms. Perfect for solo travelers, featuring a cozy ambiance and all modern amenities for a productive yet relaxing stay."
    },
    double: {
        capacity: 2,
        breakfast: "Included",
        price: 2400,
        pets: "Allowed",
        roomtype: "Double",
        size: "500 sqft",
        description: "Our double rooms offer the perfect blend of comfort and space for couples. Featuring premium bedding and a scenic view of the city skyline."
    },
    family: {
        capacity: 6,
        breakfast: "Not Included",
        price: 3500,
        pets: "Not Allowed",
        roomtype: "Family",
        size: "750 sqft",
        description: "Designed for families, these spacious suites ensure everyone has their own space while staying connected. Features multiple beds and child-friendly amenities."
    },
    presidential: {
        capacity: 4,
        breakfast: "Included",
        price: 4300,
        pets: "Not Allowed",
        roomtype: "Presidential",
        size: "1000 sqft",
        description: "The pinnacle of luxury. Our Presidential Suite offers unmatched elegance with a private lounge, panoramic views, and personalized concierge services."
    }
};

const SingleRoom = () => {
    const { roomType } = useParams();
    
    // Direct data access without long if/else
    const myVar = roomsDetails[roomType.toLowerCase()] || roomsDetails.single;

    return (
        <div className="bg-white font-['Poppins']">
            {/* Hero Section */}
            <MyCarousel title={`${myVar.roomtype} Sanctuary`} subtitle="Refined Luxury Awaits" />

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {[card5, card2, card3].map((img, idx) => (
                        <div key={idx} className="overflow-hidden shadow-lg group">
                            <img 
                                src={img} 
                                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" 
                                alt="Room View" 
                            />
                        </div>
                    ))}
                </div>

                {/* Main Details Section */}
                <div className="grid md:grid-cols-3 gap-12 border-b border-slate-100 pb-16">
                    {/* Description */}
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-['Playfair_Display'] mb-6">Details</h2>
                        <p className="text-slate-600 leading-relaxed text-justify">
                            {myVar.description}
                        </p>
                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Every {myVar.roomtype} room is crafted with an eye for detail, combining classic aesthetics with modern functionality to provide you with a stay that is both comfortable and memorable.
                        </p>
                    </div>

                    {/* Quick Info Box */}
                    <div className="bg-slate-50 p-8 border-l-2 border-premium">
                        <h2 className="text-2xl font-['Playfair_Display'] mb-6">Information</h2>
                        <ul className="space-y-4 text-sm text-slate-700">
                            <li className="flex justify-between border-b border-slate-200 pb-2">
                                <span className="font-bold uppercase tracking-widest text-[10px]">Price</span>
                                <span>Rs {myVar.price} / Night</span>
                            </li>
                            <li className="flex justify-between border-b border-slate-200 pb-2">
                                <span className="font-bold uppercase tracking-widest text-[10px]">Size</span>
                                <span>{myVar.size}</span>
                            </li>
                            <li className="flex justify-between border-b border-slate-200 pb-2">
                                <span className="font-bold uppercase tracking-widest text-[10px]">Max Capacity</span>
                                <span>{myVar.capacity} Persons</span>
                            </li>
                            <li className="flex justify-between border-b border-slate-200 pb-2">
                                <span className="font-bold uppercase tracking-widest text-[10px]">Breakfast</span>
                                <span>{myVar.breakfast}</span>
                            </li>
                            <li className="flex justify-between pb-2">
                                <span className="font-bold uppercase tracking-widest text-[10px]">Pets</span>
                                <span>{myVar.pets}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Extras Section */}
                <div className="py-16">
                    <h2 className="text-3xl font-['Playfair_Display'] text-center mb-12">Room Extras</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4"><i className="fa fa-snowflake-o text-premium mb-3 text-2xl"></i><p className="text-xs uppercase tracking-widest">Full AC</p></div>
                        <div className="p-4"><i className="fa fa-wifi text-premium mb-3 text-2xl"></i><p className="text-xs uppercase tracking-widest">Free WiFi</p></div>
                        <div className="p-4"><i className="fa fa-coffee text-premium mb-3 text-2xl"></i><p className="text-xs uppercase tracking-widest">Refreshments</p></div>
                        <div className="p-4"><i className="fa fa-shield text-premium mb-3 text-2xl"></i><p className="text-xs uppercase tracking-widest">Secure Safe</p></div>
                    </div>
                </div>

                {/* Booking Action */}
                <div className="text-center mt-10">
                    <Link to={`/booknow/${roomType}`}>
                        <button className="bg-slate-900 text-white px-16 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-premium transition-all duration-500 shadow-2xl">
                            Reserve This Sanctuary
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SingleRoom;