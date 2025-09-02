
const about = "/about-us-banner.jpg";
const shop = "/shop-image.jpg";
import { useState, useEffect } from "react";
import { FaHeart, FaShieldAlt, FaUsers, FaLightbulb, FaHandshake, FaStar } from "react-icons/fa";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src={about} 
          alt="About CouponHive" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 flex items-center justify-center">
          <div className={`text-center text-white px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About CouponHive</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Your ultimate destination for exclusive coupons and savings
            </p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 relative inline-block">
              Top Place For Coupon Codes & Discount Offers
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-[#E1713B]"></span>
            </h2>
          </div>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="transform transition-all duration-700 delay-100">
              Ever wondered how you can make your online shopping experience
              rewarding? CouponHive allows you to get the value of your time and
              money through its wide range of coupon codes and discount offers. With
              CouponHive, you can end up saving extra amount on all your online
              purchases while getting different rewards such as cashback or gift
              vouchers on your favourite brands.
            </p>

            <p className="transform transition-all duration-700 delay-200">
              At CouponHive, we love to help all our customers get different
              discounts and use promo codes to shop all that they like from their
              favourite stores. We have the biggest brands with us onboard across
              the world that offers exclusive discounts and promo codes just for our
              customers. Our codes are exclusive, verified and can be used as many
              times as you want. We make sure to keep all our coupon codes and deals
              updated on our pages so that our customers can get the perfect deal
              and discount on any product or service that they seek.
            </p>

            <p className="transform transition-all duration-700 delay-300">
              CouponHive is the trending and #1 website that offers huge savings
              through different promo codes on a wide range of categories. Our
              categories include fashion, beauty, electronics, mobiles, grocery,
              baby and kids, services, travel and much more.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose CouponHive</h2>
              <div className="space-y-6 text-gray-700">
                <p>
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
                <p>
                  Why pay full price when you can experience the thrill of scoring
                  exclusive deals? Navigate our user-friendly platform, find the
                  perfect coupon code for your desired brand, and embark on a
                  shopping spree that won't break the bank.
                </p>
                <p>
                  Elevate your shopping experience with our exclusive coupon codes
                  and enjoy the pleasure of getting more for less. Start saving
                  today!
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  className="w-full h-[400px] object-cover" 
                  src={shop} 
                  alt="Shopping with CouponHive" 
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#E1713B] to-[#F9A266] opacity-20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#E1713B] to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <FaHeart className="text-white text-xl animate-pulse" />
              </div>
              <span className="text-sm font-semibold text-[#E1713B] uppercase tracking-wider bg-orange-50 px-4 py-2 rounded-full">
                Our Mission
              </span>
              <div className="w-12 h-12 bg-gradient-to-r from-[#E1713B] to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <FaStar className="text-white text-xl animate-pulse" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Empowering Smart Shopping for <span className="bg-gradient-to-r from-[#E1713B] to-orange-500 bg-clip-text text-transparent">Everyone</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe everyone deserves to shop smarter and save more. Our mission is to democratize 
              access to the best deals, making premium shopping experiences affordable for all.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: FaShieldAlt,
                title: "Trust & Security",
                description: "Every coupon is verified and tested before being published. We maintain the highest standards of security and reliability.",
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200"
              },
              {
                icon: FaUsers,
                title: "Community First",
                description: "Our community of savvy shoppers drives everything we do. We listen, learn, and grow together.",
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-50",
                borderColor: "border-green-200"
              },
              {
                icon: FaLightbulb,
                title: "Innovation",
                description: "We constantly innovate to bring you the latest features and the most effective ways to save money.",
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-50",
                borderColor: "border-yellow-200"
              },
              {
                icon: FaHandshake,
                title: "Partnership",
                description: "We build strong relationships with brands to bring you exclusive deals that you won't find anywhere else.",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200"
              },
              {
                icon: FaHeart,
                title: "Customer Love",
                description: "Your satisfaction is our priority. We go above and beyond to ensure you have the best shopping experience.",
                color: "from-red-500 to-pink-500",
                bgColor: "bg-red-50",
                borderColor: "border-red-200"
              },
              {
                icon: FaStar,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from code verification to customer support.",
                color: "from-indigo-500 to-purple-500",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-200"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#E1713B]/30 overflow-hidden"
              >
                {/* Icon Container */}
                <div className={`${value.bgColor} p-8 text-center border-b ${value.borderColor} group-hover:scale-105 transition-transform duration-300`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center shadow-lg mx-auto group-hover:shadow-xl transition-all duration-300`}>
                    <value.icon className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E1713B] transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#E1713B]/20 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Commitment Section */}
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-orange-100 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Commitment to You
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                We're not just a coupon website – we're your shopping partner, committed to helping you 
                make the most of every purchase while building a community of smart, empowered shoppers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-100">
                <div className="w-12 h-12 bg-gradient-to-r from-[#E1713B] to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-white text-xl" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">100% Verified Codes</h4>
                <p className="text-sm text-gray-600">
                  Every coupon is tested and verified by our team before publication
                </p>
              </div>

              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-100">
                <div className="w-12 h-12 bg-gradient-to-r from-[#E1713B] to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-white text-xl" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">24/7 Support</h4>
                <p className="text-sm text-gray-600">
                  Our dedicated team is always here to help you save more
                </p>
              </div>

              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-100">
                <div className="w-12 h-12 bg-gradient-to-r from-[#E1713B] to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaStar className="text-white text-xl" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Exclusive Deals</h4>
                <p className="text-sm text-gray-600">
                  Partner with top brands to bring you deals you won't find elsewhere
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How To Make Extra Savings With CouponHive</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Want to spend less and shop more at the same time? CouponHive promo
              codes and discount offers allow you to make extra savings and purchase
              all that you like from your favorite stores without breaking your bank.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🙍🏻‍♂️", title: "Sign Up for Exclusive Offers", description: "Sign up or log in to CouponHive and avail exclusive offers." },
              { icon: "🔍", title: "View Store Deals", description: "Go to your desired store page through the search and view exclusive coupons and deals." },
              { icon: "🎁", title: "Apply Coupons", description: "Select the coupon and visit the official store website to apply the coupon and get additional discounts." },
              { icon: "📝", title: "Loyalty Program", description: "Let us know about your purchases through our codes and be eligible to apply in our Loyalty Program." },
              { icon: "⭐", title: "Earn Loyalty Points", description: "With every purchase you make via CouponHive promo codes, you will be able to collect loyalty points that can be redeemed at any time." },
              { icon: "📜", title: "Unlimited Savings", description: "With unlimited stores and coupon code offers, we make your shopping experience worth every penny spent!" },
              { icon: "📦", title: "Best Deals at Best Prices", description: "Browse through the unbeatable deals and purchase any product that you seek at the best prices." },
              { icon: "🔔", title: "Stay Connected", description: "Stay connected with us and get notified for all the latest discount codes and offers." }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E1713B]/20 text-center flex flex-col items-center transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 group-hover:text-[#E1713B] transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <div className="mt-4 w-12 h-1 bg-[#E1713B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#E1713B] to-[#F9A266] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg">Brands</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-lg">Coupons</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-lg">Users</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">$50M+</div>
              <div className="text-lg">Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Saving Today!</h2>
          <p className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto">
            Join our community of smart shoppers and never pay full price again
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E1713B] hover:bg-[#C75B2A] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Explore All Coupons
            </button>
            <button className="bg-[#E1713B] border border-white text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Create Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;