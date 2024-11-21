
import pet from '../../public/favourite-1.png';
import bag from '../../public/favourite-2.png';
import media from '../../public/Media.png';
import mobile from '../../public/Mobile-Apps.png';
import banking from '../../public/Money-Banking.png';
import office from '../../public/Office-Supplies.png';
import print from '../../public/Printable.png';
import restaurant from '../../public/Restaurant.png';
import travel from '../../public/Travel.png'; 

const FavouriteCategory = () => {
  return (
    <div className="w-11/12 mx-auto mt-9 max-w-screen-2xl">
      <div className="p-6 text-center">
        <h2 className=" text-3xl font-bold mb-12 text-[#E1713B] ">Favorite Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">

          <div className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={pet}
              alt="Animals & Pet Supplies"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-75 text-white text-center py-2 font-medium">
              Animals & Pet Supplies
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={bag}
              alt="Luggage & Bags"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-75 text-white text-center py-2 font-medium">
              Luggage & Bags
            </div>
          </div>


          <div className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={media}
              alt="Media"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-75 text-white text-center py-2 font-medium">
              Media
            </div>
          </div>


          <div className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={mobile}
              alt="Mobile Apps"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-75 text-white text-center py-2 font-medium">
              Mobile Apps
            </div>
          </div>


          <div className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={banking}
              alt="Money & Banking"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-75 text-white text-center py-2 font-medium">
              Money & Banking
            </div>
          </div>


          <div className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={office}
              alt="Office Supplies"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-75 text-white text-center py-2 font-medium">
              Office Supplies
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={print}
              alt="Printable"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-75 text-white text-center py-2 font-medium">
              Printable
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={restaurant}
              alt="Restaurant"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-75 text-white text-center py-2 font-medium">
              Restaurant
            </div>
          </div>


          <div className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={travel}
              alt="Travel"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-75 text-white text-center py-2 font-medium">
              Travel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteCategory;
