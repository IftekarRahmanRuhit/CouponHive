import { Link, useLoaderData } from "react-router-dom";
import { FaFire, FaTag, FaArrowRight, FaPercent } from "react-icons/fa";
import 'animate.css';

const OnSellBrands = () => {
  const data = useLoaderData(); 
  const saleBrands = data.filter(brand => brand.isSaleOn);

  return (
    <div className="max-w-screen-2xl mx-auto py-16 md:py-20">
      <div className="bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 ">
        {/* Header Section */}
        <div className="text-center py-12 px-6">
          <div className="inline-flex items-center gap-3 mb-6 bg-gradient-to-r from-[#E1713B] to-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
            <FaFire className="text-2xl animate-pulse" />
            <span className="text-lg font-bold uppercase tracking-wider">Limited Time Sale</span>
            <FaFire className="text-2xl animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            🔥 Sale is <span className="text-[#E1713B]">ON!</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Grab your exclusive deals before they're gone! 
            <br className="hidden md:block" /> 
            Don't miss out on these incredible savings.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="px-6 pb-16 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {saleBrands.map((brand) => (
              <Link 
                to='/brands' 
                key={brand.id} 
                className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100 hover:border-[#E1713B]/30"
              >
                {/* Sale Badge */}
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      50% off
                    </div>
                  </div>
                  
                  {/* Image Container */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-50 to-white p-6 flex items-center justify-center group-hover:from-[#E1713B]/5 group-hover:to-orange-50 transition-all duration-300">
                    <img 
                      src={brand.brand_logo} 
                      alt={`${brand.brand_name} logo`} 
                      className="w-full h-full object-contain filter group-hover:brightness-110 group-hover:scale-110 transition-all duration-300" 
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#E1713B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#E1713B] transition-colors duration-300">
                      {brand.brand_name}
                    </h3>
                    <FaTag className="text-[#E1713B] text-lg group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">
                        {brand.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-500">
                        <span className="text-sm font-medium">Total Coupons:</span>
                        <span className="text-lg font-bold text-[#E1713B]">{brand.total_coupons}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-[#E1713B] group-hover:translate-x-1 transition-transform duration-300">
                        <span className="text-sm font-semibold">View Deals</span>
                        <FaArrowRight className="text-xs" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-[#E1713B] to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pb-12 px-6">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-6 shadow-lg">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready to Save More?</h3>
              <p className="text-gray-600">Explore all our brands and find the best deals!</p>
            </div>
            <Link 
              to="/brands"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#E1713B] to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-[#E1713B] hover:bg-transparent hover:text-[#E1713B] group whitespace-nowrap"
            >
              <span>Shop All Brands</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnSellBrands;