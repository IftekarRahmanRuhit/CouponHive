import { Link, useLoaderData } from "react-router-dom";
import 'animate.css';
const OnSellBrands = () => {
  const data = useLoaderData(); 
  console.log(data); 


  const saleBrands = data.filter(brand => brand.isSaleOn);

  return (
    <div className="bg-slate-50">
      <p className="bg-slate-50 w-11/12 mx-auto text-center text-xl font-bold pt-8 pb-7 text-[#E1713B] animate__animated animate__backInRight">🔥 Sale is On! Grab Your Deals Now!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-11/12 mx-auto bg-slate-50 rounded-lg pb-20">
      {saleBrands.length > 0 ? (
        saleBrands.map((brand) => (
          <Link to='/brands' key={brand.id} className="bg-base-100 shadow-md rounded-lg overflow-hidden border p-3 transition hover:scale-105 overflow-hidden border-1">
            <img src={brand.brand_logo} alt="" className="w-60 h-32 object-cover mx-auto" />
            <div className="p-4 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">{brand.brand_name}</h2>
              <p className="text-gray-600 mt-1 font-medium">{brand.category}</p>
              <p className="text-gray-500 mt-1 font-medium">Total Coupons: {brand.total_coupons}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No brands on sale at the moment.</p>
      )}
    </div>
    </div>
    

  );
};

export default OnSellBrands;