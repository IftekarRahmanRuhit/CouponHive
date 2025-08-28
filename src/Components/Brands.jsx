import "animate.css";
import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaSearch, FaStar, FaFire, FaTags, FaArrowRight } from "react-icons/fa";

const Brands = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredBrands = data.filter((brand) =>
    brand.brand_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewCoupons = (brandId) => {
    if (user) {
      navigate(`/brands/${brandId}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="py-16 md:py-20  bg-gradient-to-br from-gray-50 via-white to-orange-50 max-w-screen-2xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-6">
          <FaTags className="text-orange-500 text-2xl" />
          <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Discover</span>
          <FaTags className="text-orange-500 text-2xl" />
        </div>
        <h1 className="animate__animated animate__backInDown text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
          Explore All <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Brands</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover amazing deals and exclusive offers from your favorite brands. 
          <br className="hidden md:block" /> Find the perfect coupons to save money on your next purchase.
        </p>
      </div>

      {/* Enhanced Search Bar */}
      <div className="text-center mb-16">
        <div className="relative inline-block max-w-lg w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-5 pl-6 pr-20 text-lg border-2 border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-xl"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white shadow-lg">
                <FaSearch className="text-lg" />
              </div>
            </div>
          </div>
          {searchQuery && (
            <p className="text-sm text-gray-500 mt-3 font-medium">
              Found {filteredBrands.length} brand{filteredBrands.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20 w-11/12 mx-auto">
        {filteredBrands.map((brand) => (
          <div
            key={brand.id}
            className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200 group cursor-pointer overflow-hidden"
          >
            {/* Sale Badge */}
            {brand.isSaleOn && (
              <div className="absolute top-4 right-4 z-10">
                <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate__animated animate__pulse animate__infinite">
                  <FaFire className="text-xs" />
                  SALE ON
                </div>
              </div>
            )}

            {/* Brand Logo */}
            <div className="w-32 h-32 md:w-36 md:h-36 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 mb-6 group-hover:from-orange-50 group-hover:to-orange-100 transition-all duration-300 mx-auto">
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
              />
            </div>

            {/* Brand Info */}
            <div className="text-center">
              <h3 className="font-bold text-gray-800 text-xl mb-3 group-hover:text-orange-600 transition-colors duration-300">
                {brand.brand_name}
              </h3>
              
              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`text-lg ${
                      index < brand.rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-600">
                  ({brand.rating}/5)
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-center mb-6 font-medium leading-relaxed line-clamp-2">
                {brand.description}
              </p>

              {/* Sale Status */}
              <div className="text-center mb-6">
                {brand.isSaleOn ? (
                  <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full font-bold text-sm border border-orange-200">
                    <FaFire className="text-orange-500" />
                    Sale is On
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-600 px-4 py-2 rounded-full font-semibold text-sm border border-gray-200">
                    No Sale Right Now
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleViewCoupons(brand.id)}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group-hover:shadow-orange-200/50 flex items-center justify-center gap-2"
              >
                <span>View Coupons</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredBrands.length === 0 && searchQuery && (
        <div className="text-center py-16">
          <div className="inline-block p-6 bg-gray-100 rounded-full mb-6">
            <FaSearch className="text-gray-400 text-4xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-700 mb-3">
            No brands found
          </h3>
          <p className="text-gray-500 text-lg">
            Try adjusting your search terms or browse all available brands.
          </p>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="text-center">
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-orange-500 hover:bg-transparent hover:text-orange-600 group"
        >
          <span>Back to Home</span>
          <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default Brands;
