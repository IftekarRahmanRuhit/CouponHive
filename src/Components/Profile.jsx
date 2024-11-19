
import React, { useContext, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState( "");
  const [photoURL, setPhotoURL] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();


    updateUserProfile({ displayName: name, photoURL: photoURL })
      .then(() => {
        toast.success("Profile updated successfully!");
        setName(""); 
        setPhotoURL(""); 
      })
      .catch((error) => {
       
        toast.error("Failed to update profile.");
      });
  };

  return (
    <div className="min-h-screen  text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Profile</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Info Section */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex-1">
            <div className="flex flex-col items-center">
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt="User"
                className="rounded-full w-32 h-32 shadow-lg"
              />
              <h2 className="mt-4 text-2xl font-semibold">
                {user?.displayName || "No Name Provided"}
              </h2>
              <p className="mt-2 text-gray-600">{user?.email || "No Email Available"}</p>
            </div>
          </div>

          {/* Update Profile Section */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex-1">
            <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Photo URL
                </label>
                <input
                  id="photo"
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Enter photo URL"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                <FaUserEdit className="mr-2" /> Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;