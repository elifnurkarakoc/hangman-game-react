import words from "an-array-of-english-words";
import { data } from "autoprefixer";
import axios from "axios";
export const randomWord = () => {
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};

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
  const {data} =await axios.put(`${process.env.REACT_APP_BASE_ENDPOINT}/users/${userData.id}`,userData)
  //console.log("update user score", data);
  return data;
}

export const fetchDeleteUser = async (userData) => {
  const {data} = await axios.delete(`${process.env.REACT_APP_BASE_ENDPOINT}/users/${userData.id}`,userData)
  console.log("delete user", data);
  return data
}
