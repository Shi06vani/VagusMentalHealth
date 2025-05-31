// api/auth.js

import toast from 'react-hot-toast';
import axios from 'axios';

const API = import.meta.env.VITE_BASE_URL;


export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API}/auth/signup`, userData);
      console.log("response",response)

    return response.data;
  } catch (error) {
    const message = error.response.data.msg || "Signup failed. Please try again.";
    throw new Error(message);  // ✅ Best and standard
  }
};





export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
     console.log(error.response.data.msg)
    throw error.response.data.msg || { message: "Login failed" };
  }
};