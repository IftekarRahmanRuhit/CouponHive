
import { useLoaderData, useParams } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-hot-toast';

const BrandDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const brand = data.find(brand => brand.id === id); 
  

  const handleCopyCode = () => {
    toast.success("Coupon Code Copied!");
  };

  return (
    <div className="container mx-auto p-4">
      {/* Brand Info */}
      <div className="text-center mb-6">
        <img src={brand.brand_logo} alt={brand.brand_name} className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-2xl font-bold">{brand.brand_name}</h1>
        <div className="flex justify-center items-center text-yellow-500 mt-2">
          {/* Rating */}
          {'★'.repeat(Math.floor(brand.rating))}{'☆'.repeat(5 - Math.floor(brand.rating))}
        </div>
        <p className="text-center text-gray-700 mt-2">{brand.description}</p>
      </div>

      {/* Coupons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {brand.coupons.map((coupon, index) => (
          <div key={index} className="card p-4 border rounded-lg shadow-lg bg-white">
            {/* Coupon Info */}
            <h3 className="text-lg font-bold">{coupon.coupon_code}</h3>
            <p className="text-sm text-gray-600 mt-2">{coupon.description}</p>
            <p className="text-xs text-gray-500 mt-1">Expires: {coupon.expiry_date}</p>
            <p className="text-xs text-gray-500">Condition: {coupon.condition}</p>
            <p className="text-xs text-gray-500">Type: {coupon.coupon_type}</p>
            
            {/* Copy Code Button */}
            <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopyCode}>
              <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md">
                Copy Code
              </button>
            </CopyToClipboard>

            {/* Use Now Button */}
            <a href={brand.shop_link} target="_blank" rel="noopener noreferrer">
              <button className="mt-2 w-full bg-green-500 text-white p-2 rounded-md">
                Use Now
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;