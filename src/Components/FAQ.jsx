const FAQ = () => {
  return (
    <div className="bg-slate-50 p-2 mt-10 max-w-screen-2xl mx-auto">
      <div className="w-11/12 mx-auto mt-20 mb-8">
        <div>
          <div>
            <p className="text-center text-3xl font-bold mb-12 text-[#E1713B]">
              Frequently Asked Questions
            </p>
          </div>

          <div className="flex flex-col gap-4 w-4/5 mx-auto">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border-base-300 bg-base-100 border rounded-md p-4"
            >
              <div className="collapse-title text-2xl font-medium text-gray-800">
                What is a promo code?
              </div>
              <div className="collapse-content">
                <p className="text-gray-500 font-medium">
                  A promo code is an alphanumeric phrase used during checkout to
                  receive an online digital discount (or other benefit) on the
                  purchase of e-commerce goods or services. It is used
                  interchangeably with terms like coupon code, discount code,
                  voucher code and sometimes is simply referred to as an online
                  digital coupon. You can find promo codes for over 5,000 brands
                  and learn more about couponing to maximize your savings by
                  utilizing the educational resources on CouponFollow website.
                </p>
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-arrow border-base-300 bg-base-100 border rounded-md p-4"
            >
              <div className="collapse-title text-2xl font-medium text-gray-800">
                How can I get a discount or promo code every time I shop?
              </div>
              <div className="collapse-content">
                <p className="text-gray-500 font-medium">
                  Remembering to search for a coupon isn't always easy and can
                  be time consuming. We suggest you bookmark CouponFollow.com,
                  or if you're using a desktop device with Chrome or Edge you
                  can install the Cently coupon browser extension which
                  automatically applies promo codes whenever you checkout. On
                  average in 2021, Cently users have saved about $20 on their
                  purchase whenever a discount is found.
                </p>
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse mb-7 collapse-arrow border-base-300 bg-base-100 border rounded-md p-4"
            >
              <div className="collapse-title text-2xl font-medium text-gray-800">
                Do promo codes work?
              </div>
              <div className="collapse-content">
                <p className="text-gray-500 font-medium">
                  Yes, but many only last for a very short period of time. Often
                  retailers run promo code campaigns to incentivize shoppers and
                  many use common coupon phrases throughout the year. In fact,
                  data from our automatic coupon browser extension, Cently,
                  finds that between 40% to 45% of the time a user receives a
                  discount. This correlates with between every 2 to 3 shopping
                  journeys a consumer has.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
