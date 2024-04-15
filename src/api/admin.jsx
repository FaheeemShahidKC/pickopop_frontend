import api from "../services/axios";
import errorHandler from "./errorHandler";

export const login = async (email, password) => {
     try {
          let response = await api.post('/admin/login', { email, password });
          console.log("ssssssssssssss");
          console.log(response, "dsfgsdf")
          return response;
     } catch (error) {
          console.log("io");
          errorHandler(error);
     }
}

export const getUsers = async () => {
     try {
          let response = await api.get('/admin/users')
          return response
     } catch (error) {
          errorHandler(error)
     }
}

export const blockUser = async (id) => {
     try {
          let res = await api.post(`/admin/blockUser/${id}`);
          console.log(res);
          return res
     } catch (err) {
          console.log(err);
          errorHandler(err);
     }
}

export const getPickers = async () => {
     try {
          let response = await api.get('/admin/pickers')
          return response
     } catch (error) {
          errorHandler(error)
     }
}

export const blockPicker = async (id) => {
     try {
          let res = await api.post(`/admin/blockPicker/${id}`);
          console.log(res,'===============b===============b===========');
          return res
     } catch (err) {
          console.log(err);
          errorHandler(err);
     }
}

export const logout = async () => {
     try {
          const response = await api.get('/admin/logout');
          return response;
     } catch (error) {
          errorHandler(error);
     }
}