import React, { useState, useEffect } from "react";
import User from "../User";
import { fetchSortScore } from "../../api";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const getUserList = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetchSortScore();
      setLoading(false);
      setUsers(response);
    } catch (e) {
      setError(true);
    }
  };
  useEffect(() => {
    getUserList();
    //console.log({ users });
  }, []);

  return (
    <div className="flex justify-center ">
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <table class="table-fixed w-3/6">
          <thead>
            <tr className="bg-gray-200 ">
              <th class="">Username</th>
              <th class="">Score</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <User key={key} user={user} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
