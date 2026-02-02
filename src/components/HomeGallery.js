import React from 'react';

const HomeGallery = () => {
    return (
        <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                
                {/* Section Title (Optional but looks premium) */}
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-slate-900">Our Visual Stories</h2>
                </div>

                {/* Grid Container */}
                {/* md:h-[600px] ka matlab sirf desktop pe height fix hogi, mobile pe auto rahegi */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
                    
                    {/* Main Large Image */}
                    <div className="md:col-span-8 h-[300px] md:h-full overflow-hidden rounded-2xl relative group shadow-lg">
                        <img 
                            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" 
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
                            alt="Lobby" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 md:p-10">
                            <h3 className="text-white text-2xl md:text-3xl font-['Playfair_Display']">Grand Entrance</h3>
                        </div>
                    </div>

                    {/* Side Small Images */}
                    <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 h-auto md:h-full">
                        <div className="h-[250px] md:h-full overflow-hidden rounded-2xl group shadow-md relative">
                            <img 
                                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d" 
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                                alt="Pool" 
                            />
                             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
                        </div>
                        <div className="h-[250px] md:h-full overflow-hidden rounded-2xl group shadow-md relative">
                            <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945" 
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                                alt="Garden" 
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeGallery;