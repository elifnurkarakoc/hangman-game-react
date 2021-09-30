import React from "react";

const User = ({ user }) => {
  return (
    <tr className="bg-gray-100 ">
      <td className="">{user.username}</td>
      <td className="">{user.score}</td>
    </tr>
  );
};

export default User;
