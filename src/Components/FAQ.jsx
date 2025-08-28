import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle, FaSearch, FaLightbulb, FaUsers, FaStar } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "What is a promo code?",
      answer: "A promo code is an alphanumeric phrase used during checkout to receive an online digital discount (or other benefit) on the purchase of e-commerce goods or services. It is used interchangeably with terms like coupon code, discount code, voucher code and sometimes is simply referred to as an online digital coupon. You can find promo codes for over 5,000 brands and learn more about couponing to maximize your savings by utilizing the educational resources on CouponHive website.",
      icon: "💳",
      category: "General"
    },
    {
      id: 2,
      question: "How can I get a discount or promo code every time I shop?",
      answer: "Remembering to search for a coupon isn't always easy and can be time consuming. We suggest you bookmark CouponHive.com, or if you're using a desktop device with Chrome or Edge you can install our coupon browser extension which automatically applies promo codes whenever you checkout. On average, our users have saved about $20 on their purchase whenever a discount is found.",
      icon: "🛒",
      category: "Shopping Tips"
    },
    {
      id: 3,
      question: "Do promo codes work?",
      answer: "Yes, but many only last for a very short period of time. Often retailers run promo code campaigns to incentivize shoppers and many use common coupon phrases throughout the year. In fact, data from our automatic coupon browser extension finds that between 40% to 45% of the time a user receives a discount. This correlates with between every 2 to 3 shopping journeys a consumer has.",
      icon: "✅",
      category: "Validation"
    },
    {
      id: 4,
      question: "How do I know if a promo code is still valid?",
      answer: "Our platform automatically verifies promo codes in real-time. We show the expiration date, usage limits, and success rate for each code. Additionally, our browser extension will automatically test codes at checkout to ensure they're working before you complete your purchase.",
      icon: "🔍",
      category: "Validation"
    },
    {
      id: 5,
      question: "Can I use multiple promo codes at once?",
      answer: "This depends on the retailer's policy. Some stores allow stacking of multiple codes, while others only accept one per transaction. We clearly indicate which codes can be combined and provide tips on maximizing your savings with each retailer.",
      icon: "🎯",
      category: "Shopping Tips"
    },
    {
      id: 6,
      question: "What if a promo code doesn't work?",
      answer: "If a promo code doesn't work, we provide alternative codes and troubleshooting tips. Our customer support team is also available to help resolve any issues. We regularly update our database to ensure all codes are current and working.",
      icon: "🆘",
      category: "Support"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="w-11/12 mx-auto max-w-screen-2xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <FaQuestionCircle className="text-white text-xl animate-pulse" />
            </div>
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider bg-orange-50 px-4 py-2 rounded-full">
              Help Center
            </span>
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <FaSearch className="text-white text-xl animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about promo codes, discounts, and saving money online. 
            <br className="hidden md:block" /> 
            Can't find what you're looking for? Contact our support team for personalized assistance.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 overflow-hidden ${
                openIndex === index ? 'ring-2 ring-orange-200 shadow-xl' : ''
              }`}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 rounded-t-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                    <span className="text-2xl">{faq.icon}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">
                        Click to {openIndex === index ? 'hide' : 'view'} answer
                      </p>
                      <div className={`w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}>
                        <FaChevronDown className="text-white text-xs" />
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Helpful Tips Section */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-orange-100 shadow-lg">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
              <FaLightbulb className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Pro Tips for Maximum Savings
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from our experts and community to get the most out of every shopping experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-100">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Community Verified</h4>
              <p className="text-sm text-gray-600">
                All codes are tested and verified by our community of savvy shoppers
              </p>
            </div>

            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-100">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Success Rate</h4>
              <p className="text-sm text-gray-600">
                We show the success rate and user reviews for every promo code
              </p>
            </div>

            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-100">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Real-time Updates</h4>
              <p className="text-sm text-gray-600">
                Our database is updated in real-time to ensure codes are current
              </p>
            </div>
          </div>
        </div>

        {/* Contact Support CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-6 rounded-2xl border border-gray-200 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <FaQuestionCircle className="text-white text-2xl" />
            </div>
            
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Still Have Questions?
              </h3>
              <p className="text-gray-600">
                Our support team is here to help you save more money!
              </p>
            </div>
            
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
