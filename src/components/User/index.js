import React from "react";

const User = ({ user }) => {
  return (
    <tr className="bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.username}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.score}</td>
    </tr>
  );
};

export default User;
