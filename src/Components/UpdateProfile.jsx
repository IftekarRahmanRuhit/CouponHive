import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaUserEdit, FaArrowLeft } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [redirect, setRedirect] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsUpdating(true);

    updateUserProfile({ displayName: name, photoURL: photoURL })
      .then(() => {
        toast.success("Profile updated successfully!");
        setRedirect(true);
      })
      .catch((error) => {
        toast.error("Failed to update profile.");
      })
      .finally(() => {
        setIsUpdating(false);
      });
  };

  if (redirect) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-[#E1713B] mb-6 transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Back to Profile
        </button>

        {/* Update Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-[#E1713B] to-[#F9A266] p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <FaUserEdit className="text-white text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-white">Update Your Profile</h2>
            <p className="text-white/90 mt-2">Keep your information current</p>
          </div>

          {/* Card Body */}
          <div className="p-6">
            <form onSubmit={handleUpdate}>
              {/* Current Profile Preview */}
              <div className="mb-6 text-center">
                <div className="inline-block relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 mx-auto">
                    {user?.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt="Current profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-2xl">
                          <FaUserEdit />
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 right-0 bg-[#E1713B] rounded-full p-1">
                    <div className="bg-white rounded-full p-1">
                      <FaUserEdit className="text-[#E1713B] text-xs" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Current profile photo</p>
              </div>

              {/* Name Input */}
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Display Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E1713B] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Photo URL Input */}
              <div className="mb-6">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Photo URL
                </label>
                <input
                  id="photo"
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E1713B] focus:border-transparent transition-all duration-300"
                  placeholder="Paste your photo URL here"
                  required
                />
                <p className="text-xs text-gray-500 mt-2">
                  Provide a direct link to your profile image
                </p>
              </div>

              {/* Preview of New Photo */}
              {photoURL && (
                <div className="mb-6 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm font-medium text-gray-700 mb-2">New Photo Preview:</p>
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-300">
                    <img 
                      src={photoURL} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Update Button */}
              <button
                type="submit"
                disabled={isUpdating}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                  isUpdating 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-[#E1713B] hover:bg-[#C75B2A] text-white shadow-md hover:shadow-lg"
                }`}
              >
                {isUpdating ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Updating...
                  </>
                ) : (
                  <>
                    <FaUserEdit className="mr-2" /> 
                    Update Profile
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Make sure your profile information is accurate and up to date.</p>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;