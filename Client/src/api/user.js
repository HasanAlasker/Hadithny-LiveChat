import api from "./axios";
const endpoint = "/users";

export const getUsers = async () => {
  try {
    const res = await api.get(`${endpoint}/`);
    return {
      ok: true,
      data: res.data,
      status: res.status,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.response?.data?.message || error.message,
      status: error.response?.status,
    };
  }
};

export const login = async (data) => {
  try {
    const res = await api.post(`${endpoint}/login`, data);
    return {
      ok: true,
      data: res.data,
      status: res.status,
      headers: res.headers,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.response?.data?.message || error.message,
      status: error.response?.status,
    };
  }
};

export const register = async (data) => {
  try {
    const res = await api.post(`${endpoint}/register`, data);
    return {
      ok: true,
      data: res.data,
      status: res.status,
      headers: res.headers,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.response?.data?.message || error.message,
      status: error.response?.status,
    };
  }
};
