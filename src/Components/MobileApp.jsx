import React, { useState } from 'react';
import { FaMobile, FaChrome, FaFirefox, FaDownload, FaBell, FaSearch, FaShieldAlt, FaSync, FaStar, FaCheckCircle, FaRocket } from 'react-icons/fa';

const MobileApp = () => {
  const [activeTab, setActiveTab] = useState('mobile');

  const features = {
    mobile: [
      {
        icon: FaBell,
        title: "Real-Time Notifications",
        description: "Receive instant alerts for new deals, expiring coupons, and personalized offers tailored to your shopping preferences.",
        color: "from-red-500 to-pink-500",
        bgColor: "bg-red-50",
        borderColor: "border-red-200"
      },
      {
        icon: FaSearch,
        title: "Advanced Search & Discovery",
        description: "Leverage AI-powered search to find deals by brand, category, or specific products with intelligent recommendations.",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      },
      {
        icon: FaShieldAlt,
        title: "Enterprise-Grade Security",
        description: "Your personal data is protected with bank-level encryption and never shared with third-party advertisers.",
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
      },
      {
        icon: FaSync,
        title: "Seamless Cross-Platform Sync",
        description: "Access your saved deals, favorites, and shopping history across all devices with automatic synchronization.",
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200"
      }
    ],
    extension: [
      {
        icon: FaRocket,
        title: "Automatic Code Application",
        description: "Our intelligent system automatically applies the best available coupon codes at checkout without any manual intervention.",
        color: "from-blue-500 to-indigo-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      },
      {
        icon: FaSearch,
        title: "Intelligent Price Comparison",
        description: "Compare prices across multiple retailers in real-time to ensure you're getting the best possible deal.",
        color: "from-green-500 to-teal-500",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
      },
      {
        icon: FaStar,
        title: "Smart Deal Monitoring",
        description: "Track price changes and receive notifications when items on your wishlist drop to your target price.",
        color: "from-yellow-500 to-orange-500",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200"
      },
      {
        icon: FaShieldAlt,
        title: "Privacy-First Browsing",
        description: "Enhanced privacy protection that blocks tracking scripts while maintaining full functionality.",
        color: "from-red-500 to-pink-500",
        bgColor: "bg-red-50",
        borderColor: "border-red-200"
      }
    ]
  };

  const currentFeatures = features[activeTab];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="w-11/12 mx-auto max-w-screen-2xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <FaMobile className="text-white text-2xl" />
            </div>
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider bg-orange-50 px-6 py-3 rounded-full border border-orange-200">
              Multi-Platform Solution
            </span>
            <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <FaChrome className="text-white text-2xl" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Professional Savings <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Everywhere</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Access CouponHive's enterprise-grade savings platform across all your devices. 
            <br className="hidden md:block" /> 
            Seamless integration for maximum efficiency and savings.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-3xl p-3 shadow-xl border border-gray-200">
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === 'mobile'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-600 hover:bg-gray-50'
              }`}
            >
              <FaMobile className="text-lg" />
              Mobile Application
            </button>
            <button
              onClick={() => setActiveTab('extension')}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === 'extension'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-600 hover:bg-gray-50'
              }`}
            >
              <FaChrome className="text-lg" />
              Browser Extension
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Professional Mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-200">
              <div className="relative">
                {/* Professional Phone Mockup */}
                <div className="w-72 h-[500px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-3 mx-auto relative shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] p-6 relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex items-center justify-between mb-6 text-xs text-gray-600">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                          <FaStar className="text-white text-sm" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">CouponHive Pro</h3>
                          <p className="text-xs text-gray-500">Premium Savings</p>
                        </div>
                      </div>
                      <FaBell className="text-gray-600 text-lg" />
                    </div>

                    {/* Search Bar */}
                    <div className="bg-gray-50 rounded-2xl p-4 mb-6 flex items-center gap-3 border border-gray-100">
                      <FaSearch className="text-gray-400 text-sm" />
                      <span className="text-sm text-gray-500 font-medium">Search for deals...</span>
                    </div>

                    {/* Analytics Dashboard */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100">
                        <div className="text-lg font-bold text-green-600 mb-1">$127</div>
                        <div className="text-xs text-green-700 font-medium">Saved This Month</div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100">
                        <div className="text-lg font-bold text-blue-600 mb-1">23</div>
                        <div className="text-xs text-blue-700 font-medium">Active Deals</div>
                      </div>
                    </div>

                    {/* Featured Deal */}
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-4 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold">🔥 Premium Deal</span>
                        <FaCheckCircle className="text-sm" />
                      </div>
                      <div className="text-sm font-semibold mb-1">60% OFF Electronics</div>
                      <div className="text-xs opacity-90">Expires in 3h 42m</div>
                    </div>
                  </div>
                </div>

                {/* Professional Floating Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <FaDownload className="text-white text-lg" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Professional Features */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-orange-200 overflow-hidden"
                >
                  {/* Icon Container */}
                  <div className={`${feature.bgColor} p-8 text-center border-b ${feature.borderColor} group-hover:scale-105 transition-transform duration-300`}>
                    <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-xl mx-auto group-hover:shadow-2xl transition-all duration-300`}>
                      <feature.icon className="text-white text-3xl group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm font-light">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-200 transition-all duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Download Section */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12 border border-slate-200 shadow-xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Enterprise-Grade Platform Access
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg font-light leading-relaxed">
              Deploy CouponHive across your organization with our professional-grade mobile application 
              and browser extension solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mobile App */}
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaMobile className="text-white text-3xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Mobile Application</h4>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Native iOS and Android applications with enterprise security and seamless integration.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300">
                Download Application
              </button>
            </div>

            {/* Chrome Extension */}
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaChrome className="text-white text-3xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Chrome Extension</h4>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Advanced browser integration with automatic code application and intelligent deal detection.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300">
                Install Extension
              </button>
            </div>

            {/* Firefox Extension */}
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaFirefox className="text-white text-3xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Firefox Extension</h4>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Privacy-focused browser extension with enhanced security and performance optimization.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300">
                Add to Firefox
              </button>
            </div>
          </div>
        </div>

        {/* Professional Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { value: "2.5M+", label: "Enterprise Downloads", icon: "📱" },
            { value: "850K+", label: "Extension Installs", icon: "🔧" },
            { value: "4.9★", label: "Professional Rating", icon: "⭐" },
            { value: "99.99%", label: "System Uptime", icon: "⚡" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-orange-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Professional Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6 bg-white px-10 py-8 rounded-3xl border border-gray-200 shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <FaRocket className="text-white text-3xl" />
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready for Professional Savings?
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Deploy our enterprise-grade platform and maximize your organization's savings potential.
              </p>
            </div>
            
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              <span>Deploy Platform</span>
              <FaDownload className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
