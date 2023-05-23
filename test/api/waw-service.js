import axios from "axios";
import { serviceUrl } from "../fixtures.js";

export const wawService = {
  wawUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.wawUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.wawUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    try {
      const res = await axios.get(`${this.wawUrl}/api/users`);
      return res.data;
    } catch (e) {
      return null;
    }
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.wawUrl}/api/users`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.wawUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common.Authorization = "";
  },

// axios method for creating a visit
async createVisit(id, visit) {
  const res = await axios.post(`${this.wawUrl}/api/counties/${id}/visits`, visit);
  return res.data;
},

// axios method for finding all visits 
async getAllVisits(id) {
  const res = await axios.get(`${this.wawUrl}/api/counties/${id}/visits`);
  return res.data;
},


// axios method for creating a visit
async createCounty(newCounty) {
  const response = await axios.post(`${this.wawUrl}/api/counties`, newCounty);
  return response.data;
},
};
