import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { fetchDeleteUser } from "../../api";
import Popup from "../../components/Popup";

const Profile = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const deleteUser = async () => {
    const response = await fetchDeleteUser(user).catch((e) => console.log(e));
    logout();
    //console.log("deleteUser");
  };
  //Do you want your account?-->PopUp
  return (
    <div>
      <div className="flex justify-center ">
        <div className="flex flex-col bg-gray-100 justify-center rounded-lg p-6 w-3/5 shadow-sm ">
          <div className="flex flex-col items-center">
            <p className="text-center  text-lg p-2 m-3">Hello {user.username}!</p>
            <p className="text-base text-green-600 pb-5">
              Your score {user.score}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base text-gray-500 p-2">You can delete your account</p>
            <button
              className="border border-transparent shadow-sm bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-lg p-2 m-3 text-center text-white w-1/4 "
              onClick={() => setIsOpen(true)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <Popup handleClose={() => setIsOpen(false)} deleteUser={deleteUser} />
      )}
    </div>
  );
};

export default Profile;
