import React from "react";
import PropTypes from "prop-types";
const User = ({ user }) => {
  return (
    <tr className="bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {user.username}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {user.score}
      </td>
    </tr>
  );
};
User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
