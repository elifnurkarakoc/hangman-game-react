import React, { useState, useEffect } from "react";
import User from "../User";
import axios from "axios";
import { fetchUsers, fetchSortScore } from "../../api";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const { isLoading, error, data } = useQuery("users", fetchSortScore);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex justify-center">
      <table class="table-fixed">
        <thead>
          <tr className="bg-purple-300">
            <th class="px-6">Username</th>
            <th class="px-6">Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, key) => (
            <User key={key} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
