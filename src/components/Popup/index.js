import React from "react";
import style from "./Popup.module.css";
const Popup = ({ handleClose,deleteUser }) => {
  return (
    <div>
      <div className={style.popupBox}>
        <div className={style.box}>
          <span className={style.closeIcon} onClick={handleClose}>
            x
          </span>
          <div className="flex flex-col items-center justify-center">
            <div>
            <p className="text-xl text-red-600 p-2">Delete account</p>
            </div>
           <div>
            <p className="text-lg text-gray-600 p-2">
              Do you want to delete your account?
            </p>
           </div>
            <div className="flex justify-center p-2 ">
              <button onClick={handleClose} className="mr-2 text-xl bg-gray-500 text-white rounded p-2">
                Cancel
              </button>
              <button onClick={deleteUser} className="text-xl bg-red-500 text-white rounded p-2">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
