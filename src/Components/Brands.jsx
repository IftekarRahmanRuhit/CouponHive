
import 'animate.css'; 
import { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaSearch } from 'react-icons/fa';

const Brands = () => {
  const { user } = useContext(AuthContext); 
  const data = useLoaderData(); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const navigate = useNavigate();

  
  const filteredBrands = data.filter(brand =>
    brand.brand_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewCoupons = (brandId) => {
    if (user) {
      navigate(`/brands/${brandId}`); 
    } else {
      navigate('/login'); 
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="animate__animated animate__backInDown text-center text-2xl font-bold my-4">
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
      className="w-80 p-3 pl-4 pr-12 text-sm border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
    />
    <button
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#E1713B]"
      onClick={() => console.log(searchQuery)}
    >
      <FaSearch />
    </button>
  </div>
</div>


      {/* Cards Section */}
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {filteredBrands.map((brand) => (
    <div key={brand.id} className="card p-4 border rounded-lg shadow-lg flex flex-col justify-between">
      {/* Brand Logo */}
      <img
        src={brand.brand_logo}
        alt={brand.brand_name}
        className="w-60 h-32 object-cover rounded-full mb-4 mx-auto"
      />
      {/* Brand Info */}
      <div className="flex flex-col items-center mb-4">
        <h3 className="text-xl font-bold">{brand.brand_name}</h3>
        <div className="star-rating text-yellow-500 mt-2 font-bold text-2xl">
          {/* Rating stars */}
          {'★'.repeat(brand.rating)}
        </div>
      </div>
      <p className="text-center mb-4">{brand.description}</p>

      {/* Sale Banner (Conditional rendering) */}
      {brand.isSaleOn && (
        <p className="animate__animated animate__bounce text-red-500 text-center mb-4">
          Sale is On
        </p>
      )}

      {/* View Coupons Button */}
      <button
        onClick={() => handleViewCoupons(brand.id)}
        className="mt-auto block w-full bg-blue-500 text-white p-2 rounded-md text-center"
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