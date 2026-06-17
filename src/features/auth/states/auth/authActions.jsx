import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";

export const loginEmployee = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      let response = await axiosInstance.post("auth/login", credentials);
      console.log("Login response:", response.data.data);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const currentLoggedEmployee = createAsyncThunk(
  "auth/me",
  async (_, thunkAPI) => {
    try {
      let response = await axiosInstance.get("auth/me");
      console.log("Current logged employee response:", response.data.user);
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
