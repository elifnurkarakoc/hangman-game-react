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
    console.log("deleteUser");
  };
  //Do you want your account? PopUp
  return (
    <div>
      <div className="flex justify-center ">
        <div className="flex flex-col shadow-sm place-items-center bg-gray-100 rounded-lg p-3 w-3/6  ">
          <div className="flex flex-col items-center ">
            <p className="text-xl p-6">Hello {user.username}!</p>
            <p className="text-lg text-purple-600 pb-5">
              Your score {user.score}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg text-gray-500 p-2">You can delete your account.</p>
            <button
              className="bg-red-600 text-white rounded p-2 w-1/2 "
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
