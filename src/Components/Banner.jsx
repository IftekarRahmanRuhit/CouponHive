import React, { useState, useEffect, useRef } from 'react';

const Banner = () => {
    const slides = [
        {
            img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1920&auto=format&fit=crop",
            alt: "Shopping bags with vibrant neon city lights",
            title: "Unlock Exclusive Savings",
            subtitle: "Curated coupons from your favorite brands. Save more, shop smarter.",
            badge: "Up to 80% Off",
            ctaPrimary: { label: "Explore Deals", to: "/brands" },
            ctaSecondary: { label: "Top Brands", to: "/brands" }
        },
        {
            img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1920&auto=format&fit=crop",
            alt: "Discount labels and percentage signs on a bright background",
            title: "Limited-Time Hot Drops",
            subtitle: "Fresh offers daily. Catch them before they're gone.",
            badge: "New Today",
            ctaPrimary: { label: "Grab Offers", to: "/" },
            ctaSecondary: { label: "Learn More", to: "/about" }
        },
        {
            img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1920&auto=format&fit=crop",
            alt: "Premium storefronts and bags on a stylish display",
            title: "Top Brands. Better Prices.",
            subtitle: "Exclusive partnerships bring you bigger discounts.",
            badge: "Editor's Pick",
            ctaPrimary: { label: "Shop Brands", to: "/brands" },
            ctaSecondary: { label: "How It Works", to: "/about" }
        },
        {
            img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1920&auto=format&fit=crop",
            alt: "Wallet with cash and credit cards, symbolizing rewards",
            title: "Stack Rewards & Cashback",
            subtitle: "Combine coupons, rewards, and cashback for maximum savings.",
            badge: "Member Perks",
            ctaPrimary: { label: "Start Saving", to: "/" },
            ctaSecondary: { label: "View FAQs", to: "/about" }
        }
    ];

    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [slideDirection, setSlideDirection] = useState('next');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const progressRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isPaused && !isTransitioning) {
                handleSlideChange('next');
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, [isPaused, isTransitioning]);

    useEffect(() => {
        // Reset progress animation
        if (progressRef.current) {
            progressRef.current.style.animation = 'none';
            progressRef.current.offsetHeight; // Trigger reflow
            progressRef.current.style.animation = isPaused ? 'paused' : 'progress 5s linear infinite';
        }
    }, [activeSlide, isPaused]);

    const handleSlideChange = (direction, targetIndex = null) => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setSlideDirection(direction);
        
        setTimeout(() => {
            if (targetIndex !== null) {
                setActiveSlide(targetIndex);
            } else {
                setActiveSlide((prev) => 
                    direction === 'next' 
                        ? (prev + 1) % slides.length 
                        : (prev - 1 + slides.length) % slides.length
                );
            }
            
            setTimeout(() => {
                setIsTransitioning(false);
            }, 100);
        }, 300);
    };

    const goPrev = () => handleSlideChange('prev');
    const goNext = () => handleSlideChange('next');
    const goToSlide = (index) => {
        if (index !== activeSlide) {
            handleSlideChange(index > activeSlide ? 'next' : 'prev', index);
        }
    };

    const getSlideTransform = (index) => {
        if (index === activeSlide) return 'translateX(0)';
        if (slideDirection === 'next') {
            return index > activeSlide ? 'translateX(100%)' : 'translateX(-100%)';
        } else {
            return index < activeSlide ? 'translateX(-100%)' : 'translateX(100%)';
        }
    };

    return (
        <div className="w-full relative">
            <style jsx>{`
                @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(225, 113, 59, 0.4); }
                    50% { box-shadow: 0 0 40px rgba(225, 113, 59, 0.6), 0 0 80px rgba(225, 113, 59, 0.2); }
                }
                
                @keyframes slide-in-up {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px) scale(0.95); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0) scale(1); 
                    }
                }
                
                @keyframes slide-in-left {
                    from { 
                        opacity: 0; 
                        transform: translateX(-30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateX(0); 
                    }
                }
                
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
                .animate-slide-in-up { animation: slide-in-up 0.8s ease-out forwards; }
                .animate-slide-in-left { animation: slide-in-left 0.6s ease-out forwards; }
                
                .glass-effect {
                    background: rgba(255, 255, 255, 0.08);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .progress-bar {
                    height: 2px;
                    background: linear-gradient(90deg, #E1713B, #ff9f6b);
                    border-radius: 1px;
                    animation: progress 5s linear infinite;
                }
                
                .neo-card {
                    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255,255,255,0.2);
                    box-shadow: 
                        0 8px 32px rgba(0,0,0,0.1),
                        inset 0 1px 0 rgba(255,255,255,0.2),
                        inset 0 -1px 0 rgba(0,0,0,0.1);
                }
            `}</style>
            
            <div
                className="relative w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] 2xl:h-[700px] overflow-hidden shadow-2xl"
                role="region"
                aria-roledescription="carousel"
                aria-label="Featured promotions"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Background slides */}
                <div className="absolute inset-0">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                activeSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                            }`}
                            style={{ transform: getSlideTransform(index) }}
                        >
                            <img
                                src={slide.img}
                                alt={slide.alt}
                                className="w-full h-full object-cover"
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                            
                            {/* Enhanced gradient overlays */}
                            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#E1713B]/20 via-transparent to-purple-500/10" />
                            
                            {/* Floating orbs - hidden on small screens */}
                            <div className="hidden md:block absolute top-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[#E1713B]/30 to-orange-400/20 blur-xl sm:blur-2xl animate-float" />
                            <div className="hidden md:block absolute bottom-1/3 left-1/5 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 blur-lg sm:blur-xl animate-float" style={{ animationDelay: '2s' }} />
                            <div className="hidden md:block absolute top-1/2 right-1/6 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-white/20 to-gray-300/10 blur-md sm:blur-lg animate-float" style={{ animationDelay: '4s' }} />
                        </div>
                    ))}
                </div>

                {/* Content overlay - fully responsive */}
                <div className="absolute inset-0 flex items-center">
                    <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24  text-white w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                        {slides[activeSlide].badge && (
                            <div className="mb-3 sm:mb-4 md:mb-6 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                                <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-[10px] xs:text-xs sm:text-sm md:text-base font-bold bg-gradient-to-r from-[#E1713B] to-orange-400 text-white shadow-lg animate-pulse-glow">
                                    ✨ {slides[activeSlide].badge}
                                </span>
                            </div>
                        )}
                        
                        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-tight mb-3 sm:mb-4 md:mb-6 animate-slide-in-up bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl" style={{ animationDelay: '0.3s' }}>
                            {slides[activeSlide].title}
                        </h2>
                        
                        <div className="neo-card rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8 animate-slide-in-up max-w-full" style={{ animationDelay: '0.5s' }}>
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-100 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                                {slides[activeSlide].subtitle}
                            </p>
                            
                            {/* Enhanced stats grid - responsive */}
                            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 text-center">
                                {[
                                    { value: "10k+", label: "Active Coupons", icon: "🎫" },
                                    { value: "2k+", label: "Brands", icon: "🏪" },
                                    { value: "$1M", label: "Saved", icon: "💰" }
                                ].map((stat, i) => (
                                    <div key={i} className="glass-effect rounded-lg sm:rounded-xl py-2 sm:py-3 px-1 sm:px-2 hover:scale-105 transition-transform duration-300">
                                        <div className="text-sm sm:text-lg md:text-2xl mb-1">{stat.icon}</div>
                                        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-[#E1713B]">{stat.value}</p>
                                        <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 font-medium">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced buttons - responsive */}
                        <div className="flex flex-row flex-wrap gap-2 sm:gap-3 md:gap-4 items-center animate-slide-in-up" style={{ animationDelay: '0.7s' }}>
                            <button
                                onClick={() => window.location.href = slides[activeSlide].ctaPrimary.to}
                                className="group relative px-4 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-[#E1713B] to-orange-400 text-white text-sm font-semibold rounded-md sm:rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-auto whitespace-nowrap max-w-[160px] sm:max-w-[180px] md:max-w-[200px]"
                            >
                                <span className="relative z-10">{slides[activeSlide].ctaPrimary.label}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                            <button
                                onClick={() => window.location.href = slides[activeSlide].ctaSecondary.to}
                                className="group px-4 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 glass-effect text-white text-sm font-semibold rounded-md sm:rounded-lg border border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300 w-auto whitespace-nowrap max-w-[160px] sm:max-w-[180px] md:max-w-[200px]"
                            >
                                {slides[activeSlide].ctaSecondary.label}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Enhanced navigation buttons - responsive */}
                <button
                    className="absolute left-2 sm:left-3 md:left-4 top-[68%] sm:top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 glass-effect rounded-full text-white hover:bg-white/20 transition-all duration-300 group hover:scale-110 shadow-lg"
                    onClick={goPrev}
                    aria-label="Previous slide"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mx-auto group-hover:-translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
                
                <button
                    className="absolute right-2 sm:right-3 md:right-4 top-[68%] sm:top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 glass-effect rounded-full text-white hover:bg-white/20 transition-all duration-300 group hover:scale-110 shadow-lg"
                    onClick={goNext}
                    aria-label="Next slide"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mx-auto group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>

                {/* Enhanced pagination indicators - responsive */}
                <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-2 sm:gap-3 glass-effect rounded-full px-2.5 py-1.5 sm:px-4 sm:py-3">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`relative transition-all duration-300 rounded-full ${
                                    activeSlide === i 
                                        ? 'bg-[#E1713B] w-6 sm:w-8 h-2 sm:h-3 shadow-lg' 
                                        : 'bg-white/50 w-2 sm:w-3 h-2 sm:h-3 hover:bg-white/80 hover:scale-125'
                                }`}
                            >
                                {activeSlide === i && (
                                    <div 
                                        ref={progressRef}
                                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full progress-bar"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Play/Pause indicator - responsive */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${isPaused ? 'bg-red-400' : 'bg-green-400'} shadow-lg`} />
                </div>
            </div>
        </div>
    );
};

export default Banner;