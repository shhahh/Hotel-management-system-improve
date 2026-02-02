import React from 'react';
import slider1 from '../../imgs/hotel1.jpg';
import slider2 from '../../imgs/hotel2.jpg';
import slider3 from '../../imgs/hotel3.jpg';
import { Link } from 'react-router-dom';
import './MyCarousel.css';

const slides = [
    { img: slider1, id: "0" },
    { img: slider2, id: "1" },
    { img: slider3, id: "2" }
];

const MyCarousel = (props) => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
            {/* Indicators */}
            <ol className="carousel-indicators">
                {slides.map((_, index) => (
                    <li 
                        key={index}
                        data-target="#carouselExampleIndicators" 
                        data-slide-to={index} 
                        className={index === 0 ? "active" : ""}
                    ></li>
                ))}
            </ol>

            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '90vh'
                        }}
                    >
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                            <span className="premium-tag">Experience Excellence</span>
                            <h1 className="display-2 premium-title">{props.title}</h1>
                            <p className="premium-subtitle">{props.subtitle}</p>
                            
                            <Link to="/rooms" className="premium-btn">
                                EXPLORE ROOMS
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    );
}

export default MyCarousel;