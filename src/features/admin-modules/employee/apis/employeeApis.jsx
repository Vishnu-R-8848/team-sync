import { axiosInstance } from "../../../../config/axiosInstance";

export const getAllEmployees = async (params = {}) => {
  const response = await axiosInstance.get("/employee", {
    params,
  });

  return response.data;
};

export const createEmployee = async (data) => {
  const response = await axiosInstance.post("/employee", data);

  return response.data;
};

export const updateEmployee = async (employeeId, data) => {
  const response = await axiosInstance.patch(`/employee/${employeeId}`, data);

  return response.data;
};

export const deleteEmployee = async (employeeId) => {
  const response = await axiosInstance.delete(`/employee/${employeeId}`);

  return response.data;
};