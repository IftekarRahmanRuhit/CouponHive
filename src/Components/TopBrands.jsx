
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";

const TopBrands = () => {
  const data = useLoaderData(); 
  const navigate = useNavigate(); 

  return (
    <div className="mb-6 mt-6 w-11/12 mx-auto bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-4 mt-16 text-[#E1713B]">Top Brands</h2>
      <p className="text-center text-xl font-bold font-thin mb-6">Explore the finest selection of top brands renowned for their quality and innovation. <br /> Lets's dive into their exclusive offerings!</p>
      
      <Marquee pauseOnHover gradient={false} speed={60}>
        {data.map((brand) => (
          <div
            key={brand.id}
            className="mx-4 cursor-pointer "
            onClick={() => navigate(`/brands`)}
          >
            
            <img
              src={brand.brand_logo}
              alt=""
              className="w-28 h-28 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TopBrands;