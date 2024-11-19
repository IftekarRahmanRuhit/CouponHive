import React, { useState, useEffect } from 'react';

const Banner = () => {
    
    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {

        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev === 4 ? 1 : prev + 1)); 
        }, 2000); 


        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="carousel w-full">
                <div
                    id="slide1"
                    className={`carousel-item relative w-full ${activeSlide === 1 ? 'block' : 'hidden'}`}
                >
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full"
                    />
                </div>
                <div
                    id="slide2"
                    className={`carousel-item relative w-full ${activeSlide === 2 ? 'block' : 'hidden'}`}
                >
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full"
                    />
                </div>
                <div
                    id="slide3"
                    className={`carousel-item relative w-full ${activeSlide === 3 ? 'block' : 'hidden'}`}
                >
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full"
                    />
                </div>
                <div
                    id="slide4"
                    className={`carousel-item relative w-full ${activeSlide === 4 ? 'block' : 'hidden'}`}
                >
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;