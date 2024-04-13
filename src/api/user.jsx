import api from "../services/axios";
import errorHandler from "./errorHandler";

export const login = async (email, password) => {
     try {
          let response = await api.post('/login', { email, password });
          console.log("ssssssssssssss");
          console.log(response, "dsfgsdf")
          return response;
     } catch (error) {
          errorHandler(error);
     }
}

export const signup = async (name, email, mobile, password) => {
     try {
          console.log('in signup api')
          const response = await api.post('/signup', { name, email, mobile, password })
          const token = response.data.token;
          console.log(token);
          localStorage.setItem('userotp', token)
          console.log(response)
          return response;
     } catch (error) {
          console.log(error)
          errorHandler(error);
     }
}

export const verifyOtp = async (otp) => {
     console.log('in api function');
     console.log(otp);

     try {
          let token = localStorage.getItem('userotp')
          let response = await api.post('/verifyOTP', { otp }, {
               headers: {
                    Authorization: `Bearer ${token}`
               }
          });
          if (response.data.success) {
               localStorage.removeItem('userotp')
          }
          return response;
     } catch (error) {
          console.log(error);
          errorHandler(error);
     }
}

export const logout = async () => {
     try {
          const response = await api.get('/logout');
          return response;
     } catch (error) {
          errorHandler(error);
     }
}