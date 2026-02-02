import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

import card1 from '../../imgs/card1.jpg';
import card2 from '../../imgs/card2.jpg';
import card3 from '../../imgs/card3.jpg';
import card4 from '../../imgs/card4.jpg';
import card5 from '../../imgs/card5.jpg';
import card6 from '../../imgs/card6.jpg';
import card7 from '../../imgs/card7.jpg';
import card8 from '../../imgs/card8.jpg';
import card9 from '../../imgs/card9.jpg';
import card10 from '../../imgs/card10.jpg';
import card11 from '../../imgs/card11.jpg';
import card12 from '../../imgs/card12.jpg';
import card13 from '../../imgs/card13.jpg';
import card14 from '../../imgs/card14.jpg';
import card15 from '../../imgs/card15.jpg';

const rooms = [
    { value: 'all', label: 'All Rooms' },
    { value: 'single', label: 'Single' },
    { value: 'double', label: 'Double' },
    { value: 'family', label: 'Family' },
    { value: 'presidential', label: 'Presidential' }
];

const price = [
    { value: 'any', label: 'Any Price' },
    { value: '1000-1500', label: '₹1,000 - ₹1,500' },
    { value: '2000-2500', label: '₹2,000 - ₹2,500' },
    { value: '3000-3500', label: '₹3,000 - ₹3,500' },
    { value: '4000-4500', label: '₹4,000 - ₹4,500' }
];

const RoomCard = ({ image, title, roomType, onHover }) => {
    return (
        <div 
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            onMouseEnter={() => onHover(roomType)}
        >
            {/* Image Container */}
            <div className="relative h-80 overflow-hidden">
                <img 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                {/* Title */}
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-2 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    {title}
                </h3>

                {/* Hidden content that slides up on hover */}
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-12 h-[1px] bg-white/60 mb-4"></div>
                    <Link 
                        to={`/singleRoom/${roomType}`}
                        className="inline-flex items-center space-x-2 text-sm tracking-wider uppercase hover:text-amber-300 transition-colors duration-300"
                    >
                        <span>Book Now</span>
                        <svg 
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    );
};

const SearchRooms = () => {
    const [roomType, setRoomType] = React.useState('all');
    const [roomPrice, setRoomPrice] = React.useState('any');
    const [typeofRoom, setTypeofRoom] = React.useState("");

    const handleRoomChange = (event) => {
        setRoomType(event.target.value);
    };

    const handlePriceChange = (event) => {
        setRoomPrice(event.target.value);
    };

    // Room data configuration
    const allRooms = [
        { id: 1, image: card1, type: 'single', title: 'Single Room' },
        { id: 2, image: card2, type: 'double', title: 'Double Room' },
        { id: 3, image: card3, type: 'presidential', title: 'Presidential Room' },
        { id: 4, image: card4, type: 'family', title: 'Family Room' },
        { id: 5, image: card5, type: 'family', title: 'Family Room' },
        { id: 6, image: card6, type: 'presidential', title: 'Presidential Room' },
        { id: 7, image: card7, type: 'presidential', title: 'Presidential Room' },
        { id: 8, image: card8, type: 'single', title: 'Single Room' },
        { id: 9, image: card9, type: 'double', title: 'Double Room' },
        { id: 10, image: card10, type: 'double', title: 'Double Room' },
        { id: 11, image: card11, type: 'presidential', title: 'Presidential Room' },
        { id: 12, image: card12, type: 'family', title: 'Family Room' },
        { id: 13, image: card13, type: 'family', title: 'Family Room' },
        { id: 14, image: card14, type: 'single', title: 'Single Room' },
        { id: 15, image: card15, type: 'single', title: 'Single Room' }
    ];

    // Filter rooms based on selected criteria
    const getFilteredRooms = () => {
        let filtered = allRooms;

        // Filter by room type
        if (roomType !== 'all') {
            filtered = filtered.filter(room => room.type === roomType);
        }

        // Filter by price
        if (roomPrice !== 'any') {
            const priceRanges = {
                'single': '1000-1500',
                'double': '2000-2500',
                'family': '3000-3500',
                'presidential': '4000-4500'
            };

            filtered = filtered.filter(room => {
                const roomPriceRange = priceRanges[room.type];
                return roomPrice === roomPriceRange;
            });
        }

        return filtered;
    };

    const filteredRooms = getFilteredRooms();

    return (
        <div className="w-full">
            {/* Filter Section */}
            <div className="mb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-slate-50 rounded-xl shadow-md p-8 border border-slate-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Room Type Filter */}
                            <div className="relative">
                                <TextField
                                    fullWidth
                                    select
                                    label="Room Type"
                                    value={roomType}
                                    onChange={handleRoomChange}
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            backgroundColor: 'white',
                                            '&:hover fieldset': {
                                                borderColor: '#d4af37',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#d4af37',
                                            },
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: '#d4af37',
                                        },
                                    }}
                                >
                                    {rooms.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>

                            {/* Price Range Filter */}
                            <div className="relative">
                                <TextField
                                    fullWidth
                                    select
                                    label="Price Range"
                                    value={roomPrice}
                                    onChange={handlePriceChange}
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            backgroundColor: 'white',
                                            '&:hover fieldset': {
                                                borderColor: '#d4af37',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#d4af37',
                                            },
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: '#d4af37',
                                        },
                                    }}
                                >
                                    {price.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="mt-6 text-center">
                            <p className="text-slate-600 text-sm tracking-wide">
                                Showing <span className="font-semibold text-slate-900">{filteredRooms.length}</span> {filteredRooms.length === 1 ? 'room' : 'rooms'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rooms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredRooms.length > 0 ? (
                    filteredRooms.map((room) => (
                        <RoomCard
                            key={room.id}
                            image={room.image}
                            title={room.title}
                            roomType={room.type}
                            onHover={setTypeofRoom}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <div className="max-w-md mx-auto">
                            <svg 
                                className="w-24 h-24 mx-auto text-slate-300 mb-6" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={1.5} 
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                                />
                            </svg>
                            <h3 className="text-2xl font-['Playfair_Display'] text-slate-900 mb-2">
                                No Rooms Found
                            </h3>
                            <p className="text-slate-600">
                                Try adjusting your filters to see more options
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchRooms;