
import React from "react";
import { FaHeart, FaArrowRight, FaStar, FaFire } from "react-icons/fa";
import pet from '../../public/favourite-1.png';
import bag from '../../public/favourite-2.png';
import media from '../../public/Media.png';
import mobile from '../../public/Mobile-Apps.png';
import banking from '../../public/Money-Banking.png';
import office from '../../public/Office-Supplies.png';
import print from '../../public/Printable.png';
import restaurant from '../../public/Restaurant.png';
import travel from '../../public/Travel.png'; 

const FavouriteCategory = () => {
  const categories = [
    {
      id: 1,
      name: "Animals & Pet Supplies",
      image: pet,
      description: "Everything your furry friends need",
      icon: "🐾",
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-700"
    },
    {
      id: 2,
      name: "Luggage & Bags",
      image: bag,
      description: "Travel in style and comfort",
      icon: "👜",
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700"
    },
    {
      id: 3,
      name: "Media & Entertainment",
      image: media,
      description: "Digital content and entertainment",
      icon: "🎬",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700"
    },
    {
      id: 4,
      name: "Mobile Apps",
      image: mobile,
      description: "Essential apps for your device",
      icon: "📱",
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      textColor: "text-cyan-700"
    },
    {
      id: 5,
      name: "Money & Banking",
      image: banking,
      description: "Financial services and solutions",
      icon: "💰",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700"
    },
    {
      id: 6,
      name: "Office Supplies",
      image: office,
      description: "Professional workspace essentials",
      icon: "📁",
      color: "from-gray-400 to-slate-500",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-gray-700"
    },
    {
      id: 7,
      name: "Printable & Digital",
      image: print,
      description: "Digital downloads and printables",
      icon: "🖨️",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-700"
    },
    {
      id: 8,
      name: "Restaurant & Dining",
      image: restaurant,
      description: "Culinary delights and dining experiences",
      icon: "🍽️",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-700"
    },
    {
      id: 9,
      name: "Travel & Adventure",
      image: travel,
      description: "Explore the world around you",
      icon: "✈️",
      color: "from-sky-400 to-blue-500",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
      textColor: "text-sky-700"
    }
  ];

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
              Most Popular
            </span>
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <FaFire className="text-white text-xl animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Favorite <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Categories</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most loved categories that our users can't get enough of. 
            <br className="hidden md:block" /> 
            Each category is carefully curated to bring you the best deals and experiences.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white border border-gray-100 hover:border-orange-200"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                
                {/* Popular Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <FaStar className="text-yellow-300" />
                    Popular
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm group-hover:text-orange-700 transition-colors duration-300">
                    <span>Explore Deals</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                    <FaHeart className="text-orange-600 text-sm group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-200 transition-all duration-500 pointer-events-none"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-50 to-blue-50 px-8 py-6 rounded-2xl border border-orange-100 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <FaHeart className="text-white text-2xl animate-pulse" />
            </div>
            
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Love These Categories?
              </h3>
              <p className="text-gray-600">
                Discover more amazing deals and save big on your favorites!
              </p>
            </div>
            
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              <span>View All</span>
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavouriteCategory;
