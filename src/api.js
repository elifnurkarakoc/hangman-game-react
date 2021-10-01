import words from "an-array-of-english-words";
import axios from "axios";

//words come from randomly downloaded npm package.
export const randomWord = () => {
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};

//json-server CRUD operations
export const fetchUsers = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users`
  );
  return data;
};

export const fetchRegister = async (userData) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users`,
    userData
  );
  return data;
};

export const fetchSortScore = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users?_sort=score&_order=desc`
  );
  return data;
};

export const fetchUpdateUser = async (userData) => {
  const { data } = await axios.put(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users/${userData.id}`,
    userData
  );
  return data;
};

export const fetchDeleteUser = async (userData) => {
  const { data } = await axios.delete(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users/${userData.id}`,
    userData
  );
  return data;
};
