import { Link, useLoaderData } from "react-router-dom";

const OnSellBrands = () => {
  const data = useLoaderData(); 
  console.log(data); 

 
  const saleBrands = data.filter(brand => brand.isSaleOn);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {saleBrands.length > 0 ? (
        saleBrands.map((brand) => (
          <Link to='/brands' key={brand.id} className="bg-white shadow-md rounded-lg overflow-hidden border p-3">
            <img src={brand.brand_logo} alt={brand.brand_name} className="w-60 h-32 object-cover mx-auto" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800">{brand.brand_name}</h2>
              <p className="text-gray-600">{brand.category}</p>
              <p className="text-gray-500">Total Coupons: {brand.total_coupons}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No brands on sale at the moment.</p>
      )}
    </div>
  );
};

export default OnSellBrands;