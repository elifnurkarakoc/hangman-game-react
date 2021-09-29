import React from "react";

const User = ({ user }) => {
  return (
    <tr className="bg-purple-200">
      <td className="px-6">{user.username}</td>
      <td className="px-6">{user.score}</td>
    </tr>
  );
};

export default User;
