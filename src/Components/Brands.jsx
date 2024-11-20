import "animate.css";
import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaSearch } from "react-icons/fa";

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
    <div className="container mx-auto p-4 w-11/12 mx-auto">
      <h1 className="animate__animated animate__backInDown text-center text-2xl font-bold my-4 text-[#E1713B] mb-5">
        Explore All Brands
      </h1>

      {/* Search Bar */}
      <div className="text-center mb-6">
        <div className="relative inline-block">
          <input
            type="text"
            placeholder="Search for a brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-80 p-3 pl-4 pr-12 text-sm border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E1713B]"
          />
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#E1713B]"
            onClick={() => console.log(searchQuery)}
          >
            <FaSearch />
          </button>
        </div>
      </div>



      <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-20">
        {filteredBrands.map((brand) => (
          <div
            key={brand.id}
            className="card p-4 border border-1 rounded-lg shadow-xl flex flex-col justify-between transition hover:scale-105 overflow-hidden bg-base-100"
          >

            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-60 h-32 object-cover rounded-full mb-4 mx-auto"
            />

            <div className="flex flex-col items-center mb-4">
              <h3 className="text-xl font-bold">{brand.brand_name}</h3>
              <div className="star-rating text-yellow-500 mt-2 font-bold text-2xl">

                {"★".repeat(brand.rating)}
              </div>
            </div>
            <p className="text-center mb-4 font-semibold">
              {brand.description}
            </p>


            {brand.isSaleOn ? (
              <p className="animate__animated animate__bounce text-red-600 text-center mb-4 text-xl font-bold">
                Sale is On
              </p>
            ) : (
              <p className="text-gray-800 text-center mb-4  font-semibold">
                No Sale Right Now
              </p>
            )}


            <button
              onClick={() => handleViewCoupons(brand.id)}
              className="mt-auto block w-full bg-[#E1713B] hover:bg-orange-500 text-white p-2 rounded-md text-center"
            >
              View Coupons
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
