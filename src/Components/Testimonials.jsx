import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaHeart, FaUser, FaShoppingBag, FaDollarSign } from 'react-icons/fa';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Enthusiast",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      savings: "$450",
      dealsUsed: 23,
      testimonial: "CouponHive has completely transformed my shopping experience! I've saved over $450 this year alone. The coupon codes are always verified and work perfectly. It's like having a personal shopping assistant who always finds the best deals.",
      category: "Fashion & Beauty",
      brand: "Multiple Brands"
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Tech Savvy Shopper",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      savings: "$320",
      dealsUsed: 15,
      testimonial: "As someone who loves gadgets, CouponHive has been a game-changer. I got my new laptop with a 20% discount and saved $320! The platform is so easy to use, and I love how they verify all the codes before posting them.",
      category: "Electronics",
      brand: "Tech Retailers"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Budget-Conscious Mom",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      savings: "$280",
      dealsUsed: 31,
      testimonial: "Being a mom on a budget, every dollar counts. CouponHive has helped me save $280 on groceries, baby supplies, and household items. The variety of stores and categories is amazing - there's always a deal for what I need!",
      category: "Home & Family",
      brand: "Various Stores"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Travel Enthusiast",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      savings: "$180",
      dealsUsed: 8,
      testimonial: "I used CouponHive for my recent vacation booking and saved $180 on flights and hotels! The travel deals are incredible, and the codes worked exactly as promised. Highly recommend for anyone planning trips.",
      category: "Travel",
      brand: "Travel Agencies"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Online Shopping Expert",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      savings: "$520",
      dealsUsed: 42,
      testimonial: "I've been using CouponHive for over a year and have saved more than $520! The platform is incredibly reliable, and I love how they categorize deals by brand and category. It's my go-to for all online shopping.",
      category: "Multiple Categories",
      brand: "Various Brands"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="w-11/12 mx-auto max-w-screen-2xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <FaHeart className="text-white text-xl animate-pulse" />
            </div>
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider bg-orange-50 px-4 py-2 rounded-full">
              Success Stories
            </span>
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <FaStar className="text-white text-xl animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Users Say</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have saved millions of dollars 
            <br className="hidden md:block" /> 
            using our verified coupon codes and exclusive deals.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="p-8 md:p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <FaQuoteLeft className="text-white text-2xl" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center mb-8">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-6">
                  "{testimonials[currentTestimonial].testimonial}"
                </p>
                
                {/* User Info */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-100 shadow-lg"
                  />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 text-center border border-orange-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaDollarSign className="text-white text-xl" />
                  </div>
                  <div className="text-2xl font-black text-green-600 mb-1">
                    {testimonials[currentTestimonial].savings}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Total Saved</div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 text-center border border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaShoppingBag className="text-white text-xl" />
                  </div>
                  <div className="text-2xl font-black text-blue-600 mb-1">
                    {testimonials[currentTestimonial].dealsUsed}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Deals Used</div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 text-center border border-purple-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaUser className="text-white text-xl" />
                  </div>
                  <div className="text-lg font-bold text-purple-600 mb-1">
                    {testimonials[currentTestimonial].category}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Favorite Category</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-orange-500 scale-125'
                    : 'bg-gray-300 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-orange-100 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Growing Community
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Join millions of smart shoppers who trust CouponHive for their savings
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "1M+", label: "Happy Users", icon: "👥", color: "text-blue-600" },
              { value: "$50M+", label: "Total Savings", icon: "💰", color: "text-green-600" },
              { value: "500K+", label: "Deals Used", icon: "🎯", color: "text-orange-600" },
              { value: "4.9★", label: "Average Rating", icon: "⭐", color: "text-yellow-600" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-2xl md:text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-6 rounded-2xl border border-gray-200 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <FaHeart className="text-white text-2xl" />
            </div>
            
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Ready to Start Saving?
              </h3>
              <p className="text-gray-600">
                Join our community and start saving money on every purchase!
              </p>
            </div>
            
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              <span>Get Started</span>
              <FaStar className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
