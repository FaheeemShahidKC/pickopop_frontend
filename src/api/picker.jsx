import api from "../services/axios";
import errorHandler from "./errorHandler";

export const signup = async (formData) => {
     try {
          const headers = {
               'Content-Type': 'multipart/form-data'
          }
          const response = await api.post('/picker/signup', formData, { headers })
          const token = response.data.token;
          localStorage.setItem('pickerotp', token)
          return response;
     } catch (error) {
          console.log(error)
          errorHandler(error);
     }
}

export const verifyOtp = async (otp, id) => {
     console.log('in api function');
     console.log(otp);

     try {
          let response = await api.post('/picker/verifyOTP', { otp, id },);
          return response;
     } catch (error) {
          console.log(error);
          errorHandler(error);
     }
}

export const login = async (email, password) => {
     try {
          let response = await api.post('/picker/login', { email, password })
          return response
     } catch (error) {
          console.log('error');
          errorHandler(error)
     }
}

export const getProfile = async () => {
     try {
          const response = await api.get('/picker/profile')
          return response
     } catch (error) {
          console.log(error);
     }
}

export const getRejection = async()=>{
     try {
          const response = await api.get('/picker/getRejection')
          return response
     } catch (error) {
          console.log(error);
     }
}

export const logout = async () => {
     try {
          const response = await api.get('/picker/logout');
          return response;
     } catch (error) {
          errorHandler(error);
     }
}