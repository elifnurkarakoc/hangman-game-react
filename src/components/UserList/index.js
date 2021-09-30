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
    <div className="flex flex-col w-2/3 mx-36">
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-200 ">
              <th className="px-6 py-3 text-left text-gray-500 uppercase tracking-wider">Username</th>
              <th className="px-6 py-3 text-left text-gray-500 uppercase tracking-wider">Score</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <User key={key} user={user} />
            ))}
          </tbody>
        </table>
        </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
