import React, { useState, useEffect } from 'react';
import img1 from "../../public/Banner-1.jpg"
import img2 from "../../public/Banner-2.jpg"
import img3 from "../../public/Banner-3.jpg"
import img4 from "../../public/Banner-4.jpg"

const Banner = () => {
    
    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {

        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev === 4 ? 1 : prev + 1)); 
        }, 2000); 


        return () => clearInterval(interval);
    }, []);

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className="carousel w-full">
                <div
                    id="slide1"
                    className={`carousel-item relative w-full ${activeSlide === 1 ? 'block' : 'hidden'}`}
                >
                    <img
                        src={img1}
                        className="w-full lg:h-[450px]"
                    />
                </div>
                <div
                    id="slide2"
                    className={`carousel-item relative w-full ${activeSlide === 2 ? 'block' : 'hidden'}`}
                >
                    <img
                        src={img2}
                        className="w-full lg:h-[450px]"
                    />
                </div>
                <div
                    id="slide3"
                    className={`carousel-item relative w-full ${activeSlide === 3 ? 'block' : 'hidden'}`}
                >
                    <img
                        src={img3}
                        className="w-full lg:h-[450px]"
                    />
                </div>
                <div
                    id="slide4"
                    className={`carousel-item relative w-full ${activeSlide === 4 ? 'block' : 'hidden'}`}
                >
                    <img
                        src={img4}
                        className="w-full lg:h-[450px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;