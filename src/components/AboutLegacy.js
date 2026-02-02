import React from 'react';

const AboutLegacy = () => {
    // Agar component load hua toh console mein dikhega (Press F12 to check)
    console.log("Legacy Section Active"); 

    return (
        <section className="relative py-24 bg-white z-30"> 
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-5xl font-['Playfair_Display'] text-slate-900 mb-8">Our Heritage</h2>
                        <div className="grid grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-4xl font-bold text-amber-600">25+</h3>
                                <p className="text-slate-500 uppercase tracking-widest text-xs mt-2">Years of Excellence</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-amber-600">10k+</h3>
                                <p className="text-slate-500 uppercase tracking-widest text-xs mt-2">Happy Guests</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                         <img 
                            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" 
                            alt="Luxury" 
                            className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutLegacy;