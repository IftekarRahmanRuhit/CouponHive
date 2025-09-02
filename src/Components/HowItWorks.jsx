import React from 'react';
import { FaSearch, FaCopy, FaShoppingCart, FaGift } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: FaSearch,
      title: "Search & Discover",
      description: "Browse thousands of verified promo codes from your favorite brands. Use our smart search to find the best deals for your shopping needs.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      icon: FaCopy,
      title: "Copy & Apply",
      description: "Simply copy the promo code with one click. Our codes are automatically verified and ready to use at checkout.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      icon: FaShoppingCart,
      title: "Shop & Save",
      description: "Apply the code during checkout and watch your savings add up. Enjoy instant discounts on your purchases.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      id: 4,
      icon: FaGift,
      title: "Earn Rewards",
      description: "Stack additional rewards and cashback on top of your coupon savings. Maximize your shopping benefits.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 max-w-screen-2xl mx-auto">
      <div className="w-11/12 mx-auto max-w-screen-2xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <FaSearch className="text-white text-xl animate-pulse" />
            </div>
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider bg-orange-50 px-4 py-2 rounded-full">
              Simple Steps
            </span>
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <FaGift className="text-white text-xl animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            How <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">It Works</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with CouponHive in just 4 simple steps. 
            <br className="hidden md:block" /> 
            Save money on every purchase with our verified promo codes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200 overflow-hidden"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-white font-bold text-lg">{step.id}</span>
              </div>

              {/* Icon Container */}
              <div className={`${step.bgColor} p-8 text-center border-b ${step.borderColor} group-hover:scale-105 transition-transform duration-300`}>
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg mx-auto group-hover:shadow-xl transition-all duration-300`}>
                  <step.icon className="text-white text-3xl group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Hover Effects */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-200 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-orange-100 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Trusted by Millions of Shoppers
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our community of smart shoppers who save money every day
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "10M+", label: "Active Users", icon: "👥" },
              { value: "50K+", label: "Verified Codes", icon: "✅" },
              { value: "$500M+", label: "Total Savings", icon: "💰" },
              { value: "99.9%", label: "Success Rate", icon: "🎯" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-black text-orange-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-6 rounded-2xl border border-gray-200 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <FaSearch className="text-white text-2xl" />
            </div>
            
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Ready to Start Saving?
              </h3>
              <p className="text-gray-600">
                Explore our collection of verified promo codes and start saving today!
              </p>
            </div>
            
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              <span>Start Shopping</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
