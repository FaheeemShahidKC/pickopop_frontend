import api from "../services/axios";
import errorHandler from "./errorHandler";

export const login = async (email, password) => {
     try {
          let response = await api.post('/admin/login', { email, password });
          return response;
     } catch (error) {
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
          let response = await api.post(`/admin/blockUser/${id}`);
          return response
     } catch (error) {
          errorHandler(error);
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
          let response = await api.post(`/admin/blockPicker/${id}`);
          return response
     } catch (error) {
          errorHandler(error);
     }
}

export const verifyPicker = async (id) => {
     try {
          let response = await api.post(`/admin/verify/${id}`);
          return response
     } catch (error) {
          errorHandler(error);
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

export const getPickerData = async (id) => {
     try {
          const response = await api.post(`/admin/pickerDetails/`, { id })
          return response
     } catch (error) {
          errorHandler(error)
     }
}

export const reject = async (id, reason) => {
     try {
          const response = await api.post('/admin/reject', { id, rejectionReason: reason })
          return response
     } catch (error) {
          errorHandler(error)
     }
}

export const getIncome = async () => {
     try {
          const response = await api.get('/admin/getIncome')
          return response
     } catch (error) {
          errorHandler(error)
     }
}

export const income = async (id, fuel, mileage) => {
     try {
          const response = await api.put('/admin/income', { id, fuel, mileage })
          return response
     } catch (error) {
          errorHandler(error)
     }
}