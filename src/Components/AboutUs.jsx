import about from "../../public/about-us-banner.jpg";
import shop from "../../public/shop-image.jpg";
import "animate.css";

const AboutUs = () => {
  return (
    <div>
      <div>
        <img src={about} alt="" />
      </div>
      <div className="w-11/12 mx-auto">
        <p className="animate__animated animate__bounceInRight text-center mt-10 text-3xl font-bold text-[#E1713B]">
          About CouponHive
        </p>
        <p className="mt-5 text-center font-semibold text-2xl">
          Top Place For Coupon Codes & Discount Offers
        </p>
        <p className="text-xl text-gray-500 mt-7">
          Ever wondered how you can make your online shopping experience
          rewarding? CouponHive allows you to get the value of your time and
          money through its wide range of coupon codes and discount offers. With
          CouponHive, you can end up saving extra amount on all your online
          purchases while getting different rewards such as cashback or gift
          vouchers on your favourite brands.
        </p>

        <p className="text-xl text-gray-600 mt-3">
          At CouponHive, we love to help all our customers get different
          discounts and use promo codes to shop all that they like from their
          favourite stores. We have the biggest brands with us onboard across
          the world that offers exclusive discounts and promo codes just for our
          customers. Our codes are exclusive, verified and can be used as many
          times as you want. We make sure to keep all our coupon codes and deals
          updated on our pages so that our customers can get the perfect deal
          and discount on any product or service that they seek.
        </p>

        <p className="text-xl text-gray-600 mt-3">
          CouponHive is the trending and #1 website that offers huge savings
          through different promo codes on a wide range of categories. Our
          categories include fashion, beauty, electronics, mobiles, grocery,
          baby and kids, services, travel and much more.
        </p>
      </div>

      <div className="w-11/12 mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-16">
          <div>
            <img className="w-full h-[400px] rounded-md" src={shop} alt="" />
          </div>
          <div>
            <p className="text-3xl font-bold">Why Choose CouponHive</p>
            <p className="text-xl text-gray-600 mt-3">
              Our core aim is to help online shoppers get the best deals
              available online so they can shop through CouponHive at any time
              they want. Now you do not have to wait for any exceptional sale or
              promotion on your favourite brand, because you can simply visit
              our website, search for the desired store or category and copy the
              coupon code and paste it once you are done shopping at check out.
              You will notice the amount of discount applied at your total bill
              through our coupon code and will be able to make extra savings
              while shopping more.
            </p>
            <p className="text-xl text-gray-600 mt-3">
              Why pay full price when you can experience the thrill of scoring
              exclusive deals? Navigate our user-friendly platform, find the
              perfect coupon code for your desired brand, and embark on a
              shopping spree that won't break the bank.
            </p>
            <p className="text-xl text-gray-600 mt-3">
              Elevate your shopping experience with our exclusive coupon codes
              and enjoy the pleasure of getting more for less. Start saving
              today!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-center text-2xl font-bold mb-4 text-[#E1713B]">
          How To Make Extra Savings With CouponHive
        </h2>
        <p className="text-center text-gray-600 mb-8 mt-5">
          Want to spend less and shop more at the same time? CouponHive promo
          codes and discount offers allow you to make extra savings and <br />{" "}
          purchase all that you like from your favorite stores without breaking
          your bank.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 mt-7">
          <div className="p-4 border rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🙍🏻‍♂️</div>
            <h3 className="text-lg font-semibold mb-2">
              Sign Up for Exclusive Offers
            </h3>
            <p className="text-sm text-gray-500">
              Sign up or log in to CouponHive and avail exclusive offers.
            </p>
          </div>

          <div className="p-4 border rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold mb-2">View Store Deals</h3>
            <p className="text-sm text-gray-500">
              Go to your desired store page through the search and view
              exclusive coupons and deals.
            </p>
          </div>

          <div className="p-4 border rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-lg font-semibold mb-2">Apply Coupons</h3>
            <p className="text-sm text-gray-500">
              Select the coupon and visit the official store website to apply
              the coupon and get additional discounts.
            </p>
          </div>

          <div className="p-4 border rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-lg font-semibold mb-2">Loyalty Program</h3>
            <p className="text-sm text-gray-500">
              Let us know about your purchases through our codes and be eligible
              to apply in our Loyalty Program.
            </p>
          </div>

          <div className="p-4 border rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-lg font-semibold mb-2">Earn Loyalty Points</h3>
            <p className="text-sm text-gray-500">
              With every purchase you make via CouponHive promo codes, you will
              be able to collect loyalty points that can be redeemed at any
              time.
            </p>
          </div>

          <div className="p-4 border rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">📜</div>
            <h3 className="text-lg font-semibold mb-2">Unlimited Savings</h3>
            <p className="text-sm text-gray-500">
              With unlimited stores and coupon code offers, we make your
              shopping experience worth every penny spent!
            </p>
          </div>

          <div className="p-4 border rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-lg font-semibold mb-2">
              Best Deals at Best Prices
            </h3>
            <p className="text-sm text-gray-500">
              Browse through the unbeatable deals and purchase any product that
              you seek at the best prices.
            </p>
          </div>

          <div className="p-4 border rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🔔</div>
            <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
            <p className="text-sm text-gray-500">
              Stay connected with us and get notified for all the latest
              discount codes and offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
