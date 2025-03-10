import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import React from "react";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex space-x-2">
              <img className="w-9 h-w-9 rounded-full" src={logo} alt="" />
              <h2 className="text-3xl font-bold text-[#E1713B]">CouponHive</h2>
            </div>

            <p className="mt-4 text-gray-300">
              Save more with the best coupon deals from across the web.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="mt-2 text-gray-300">
              Subscribe to get the latest coupons and deals delivered to your
              inbox.
            </p>
            <form className="mt-4 flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full px-4 py-2 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E1713B]"
              />
              <button
                type="submit"
                className="bg-[#E1713B] hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-gray-300">
              Have a question? We're here to help.
            </p>
            <p className="text-xl font-bold">+1 234 567 890</p>

            <div className="flex space-x-4">
              <a
                href="http://www.instagram.com/"
                className="text-gray-400 hover:text-pink-500"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/"
                className="text-gray-400 hover:text-blue-600"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="https://www.x.com/"
                className="text-gray-400 hover:text-blue-600"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} CouponHive. All Rights Reserved.</p>
          <p className="mt-2">
            <a href="" className="hover:underline text-gray-400">
              Privacy Policy
            </a>

            <a href="" className="hover:underline text-gray-400">
              Terms and Conditions
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
