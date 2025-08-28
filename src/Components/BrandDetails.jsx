import { useLoaderData, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import { useState } from "react";

const BrandDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const brand = data.find((brand) => brand.id == id);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopyCode = (index) => {
    setCopiedIndex(index);
    toast.success("Coupon Code Copied!");
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F5] to-[#FFEFE8] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Brand Header */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 mb-12 p-6 bg-white rounded-2xl shadow-lg border border-orange-100">
          <div className="relative">
            <div className="absolute -inset-2 bg-[#E1713B] rounded-2xl blur opacity-20"></div>
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="relative w-32 h-32 md:w-40 md:h-40 object-contain rounded-xl bg-white p-3"
            />
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              {brand.brand_name}
            </h1>
            
            <div className="flex justify-center md:justify-start items-center mb-4">
              <div className="flex text-yellow-400 text-xl">
                {"★".repeat(brand.rating)}
                <span className="text-gray-300 ml-1">
                  {"☆".repeat(5 - brand.rating)}
                </span>
              </div>
              <span className="text-gray-600 ml-2 text-sm">({brand.rating})</span>
            </div>
            
            <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
              {brand.description}
            </p>
          </div>
        </div>

        {/* Coupons Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-200"></div>
            <h2 className="mx-4 text-2xl font-bold text-gray-800 whitespace-nowrap">
              Available Offers
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-orange-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brand.coupons.map((coupon, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100"
              >
                {/* Coupon Header with Ribbon */}
                <div className="relative bg-gradient-to-r from-[#E1713B] to-[#F9A266] p-5 text-white">
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                    <div className="absolute transform rotate-45 bg-white w-40 h-8 -right-8 top-6 opacity-20"></div>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-sm font-semibold opacity-90 uppercase tracking-wider">
                        {coupon.coupon_type}
                      </span>
                      <h3 className="text-2xl font-bold tracking-wide mt-1">
                        {coupon.coupon_code}
                      </h3>
                    </div>
                    
                    <div className="bg-white text-[#E1713B] text-xs font-bold px-2 py-1 rounded-md">
                      SAVE
                    </div>
                  </div>
                </div>

                {/* Coupon Body */}
                <div className="p-5">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {coupon.description}
                  </p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#E1713B] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">
                        Expires: <span className="font-semibold">{coupon.expiry_date}</span>
                      </span>
                    </div>
                    
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#E1713B] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-gray-600">
                        Condition: <span className="font-semibold">{coupon.condition}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Coupon Footer */}
                <div className="p-5 bg-orange-50 border-t border-orange-100 flex flex-col gap-3">
                  <CopyToClipboard
                    text={coupon.coupon_code}
                    onCopy={() => handleCopyCode(index)}
                  >
                    <button 
                      className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center ${
                        copiedIndex === index 
                          ? "bg-green-100 text-green-700 border border-green-200" 
                          : "bg-[#E1713B] text-white hover:bg-[#C75B2A]"
                      }`}
                    >
                      {copiedIndex === index ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                          </svg>
                          Copy Code
                        </>
                      )}
                    </button>
                  </CopyToClipboard>

                  <a
                    href={brand.shop_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Shop Now
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;