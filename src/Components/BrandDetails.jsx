import { useLoaderData, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";

const BrandDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const brand = data.find((brand) => brand.id == id);

  const handleCopyCode = () => {
    toast.success("Coupon Code Copied!");
  };

  return (
    <div className="container mx-auto p-4">

      <div className="text-center mb-6">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="w-60 h-32 mx-auto mb-4 mt-5 animate__animated animate__backInDown"
        />
        <h1 className="text-3xl font-bold">{brand.brand_name}</h1>
        <div className="flex justify-center items-center text-yellow-500 mt-2 text-2xl">
          {"★".repeat(brand.rating)}
        </div>
        <p className="text-center text-gray-700 mt-2 font-bold mb-10">
          {brand.description}
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
        {brand.coupons.map((coupon, index) => (
          <div
            key={index}
            className="card p-4 border rounded-lg shadow-xl bg-white flex flex-col justify-between border-1 transition hover:scale-105 overflow-hidden"
          >

            <div>
              <h3 className="text-lg font-bold text-[#E1713B]">
                {coupon.coupon_code}
              </h3>
              <p className="text-lg text-gray-600 mt-2 font-bold">
                {coupon.description}
              </p>
              <p className="text-gray-600 mt-1 font-semibold">
                Expires: {coupon.expiry_date}
              </p>
              <p className="text-gray-500 font-medium">
                Condition: {coupon.condition}
              </p>
              <p className="text-gray-500 font-medium">
                Type: {coupon.coupon_type}
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <CopyToClipboard
                text={coupon.coupon_code}
                onCopy={handleCopyCode}
              >
                <button className="w-full bg-[#E1713B] text-white p-2 rounded-md font-semibold hover:bg-orange-600">
                  Copy Code
                </button>
              </CopyToClipboard>

              <a
                href={brand.shop_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full bg-green-600 text-white p-2 rounded-md font-semibold hover:bg-green-500">
                  Use Now
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
