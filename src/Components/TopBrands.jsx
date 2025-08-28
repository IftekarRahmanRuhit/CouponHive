
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { FaStar, FaArrowRight } from "react-icons/fa";

const TopBrands = () => {
  const data = useLoaderData(); 
  const navigate = useNavigate(); 

  return (
    <div className="py-16 md:py-20 w-11/12 mx-auto bg-gradient-to-br from-gray-50 via-white to-orange-50 max-w-screen-2xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4">
          <FaStar className="text-orange-500 text-xl" />
          <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Featured</span>
          <FaStar className="text-orange-500 text-xl" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
          Top <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Brands</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore the finest selection of top brands renowned for their quality and innovation. 
          <br className="hidden md:block" /> Let's dive into their exclusive offerings!
        </p>
      </div>
      
      <div className="relative">
        <Marquee pauseOnHover gradient={false} speed={40} className="py-8">
          {data.map((brand) => (
            <div
              key={brand.id}
              className="mx-6 cursor-pointer group"
              onClick={() => navigate(`/brands`)}
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200 group-hover:scale-105">
                <div className="w-32 h-32 md:w-36 md:h-36 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 mb-4 group-hover:from-orange-50 group-hover:to-orange-100 transition-all duration-300">
                  <img
                    src={brand.brand_logo}
                    alt={`${brand.brand_name || 'Brand'} logo`}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {brand.brand_name || 'Brand Name'}
                  </h3>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`text-sm ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 group-hover:text-orange-600 transition-colors duration-300">
                    <span>View Deals</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
        
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-gray-50 pointer-events-none"></div>
      </div>
      
      <div className="text-center mt-12">
        <button 
          onClick={() => navigate('/brands')}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-orange-500 hover:bg-transparent hover:text-orange-600 group"
        >
          <span>Explore All Brands</span>
          <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default TopBrands;