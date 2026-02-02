import React from 'react'
import MyCarousel from '../../components/Carousel/MyCarousel'
import SearchRooms from './SearchRooms'

const Rooms = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative">
                <MyCarousel 
                    title="Our Sanctuary" 
                    subtitle="Elegance in every corner, comfort in every stay."
                />
            </div>

            {/* Filter & Rooms Section */}
            <section className="py-12 px-4 md:px-10 lg:px-20">
                <div className="text-center mb-16">
                    <span className="text-premium tracking-[0.4em] uppercase text-[10px] font-bold">
                        Find Your Perfect Stay
                    </span>
                    <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-slate-900 mt-2">
                        Rooms & Suites
                    </h2>
                    <div className="w-20 h-[1px] bg-premium mx-auto mt-6"></div>
                </div>

                {/* SearchRooms component handles the data and cards */}
                <div className="mt-10">
                    <SearchRooms />
                </div>
            </section>
        </div>
    )
}

export default Rooms