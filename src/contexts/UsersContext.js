import { useState, createContext, useEffect, useContext } from "react";
import { fetchSortScore } from "../api";
const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const getUserList = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetchSortScore();
      console.log({response})
      setLoading(false);
      setUsers([...response]);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(()=> {
    getUserList();
  },[])
  const values = {
    users,
    isLoading,
    isError,
    getUserList,
  };

  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
