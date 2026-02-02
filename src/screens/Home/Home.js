import React from 'react'
import MyCards from '../../components/Cards/MyCards'
import MyCarousel from '../../components/Carousel/MyCarousel'
import HomeGallery from '../../components/HomeGallery'
const Home = () => {
    return (
        <div>
            <MyCarousel title="Welcome to SNG Hotels" subtitle="We serve the best"/>
            <MyCards/>
            <HomeGallery/>
            {/* Footer aur Copyright ab App.js se automatically aayenge */}
        </div>
    )
}

export default Home