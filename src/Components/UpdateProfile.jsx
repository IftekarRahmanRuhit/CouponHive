
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaUserEdit } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [name, setName] = useState(""); 
  const [photoURL, setPhotoURL] = useState(""); 
  const [redirect, setRedirect] = useState(false); 

  const handleUpdate = (e) => {
    e.preventDefault();

    updateUserProfile({ displayName: name, photoURL: photoURL })
      .then(() => {
        toast.success("Profile updated successfully!");
        setName(""); 
        setPhotoURL(""); 
        setRedirect(true); 
      })
      .catch((error) => {
        toast.error("Failed to update profile.");
      });
  };

  if (redirect) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card card-compact bg-base-100 w-96 shadow-xl p-3 ">

        <div className="card-body">
          <h2 className="text-center text-2xl font-bold mb-3">Update Your Profile</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
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
            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-primary w-full">
                <FaUserEdit className="mr-2" /> Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile