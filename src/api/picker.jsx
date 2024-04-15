import api from "../services/axios";
import errorHandler from "./errorHandler";

export const signup = async (formData) => {
     try {
          console.log('in signup api')
          const headers = {
               'Content-Type': 'multipart/form-data'
          }
          const response = await api.post('/picker/signup', formData, { headers })
          const token = response.data.token;
          console.log(token);
          localStorage.setItem('pickerotp', token)
          console.log(response)
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
          // let token = localStorage.getItem('pickerotp')
          let response = await api.post('/picker/verifyOTP', { otp, id },);
          // if (response.data.success) {
          //      localStorage.removeItem('userotp')
          // }
          return response;
     } catch (error) {
          console.log(error);
          errorHandler(error);
     }
}

export const login = async (email, password) => {
     try {
          console.log('baaaaaaaaa');
          let response = await api.post('/picker/login', { email, password })
          console.log(response);
          return response
     } catch (error) {
          console.log('error');
          errorHandler(error)
     }
}

export const logout = async () => {
     try {
          const response = await api.get('/picker/logout');
          console.log(response,"porthhhhh");
          return response;
     } catch (error) {
          errorHandler(error);
     }
}