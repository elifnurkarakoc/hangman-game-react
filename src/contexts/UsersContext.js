import { useState, createContext, useEffect, useContext } from "react";
import { fetchSortScore, fetchDeleteUser } from "../api";
import { useAuth } from "./AuthContext";
const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const { logout } = useAuth();
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

  const deleteUser = async (user) => {
    const response = await fetchDeleteUser(user).catch((e) => console.log(e));
    logout();
  };

  const values = {
    users,
    isLoading,
    isError,
    getUserList,
    deleteUser,
  };

  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
