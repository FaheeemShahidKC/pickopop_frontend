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
          // const token = response.data.token;
          // console.log(token);
          // localStorage.setItem('userotp', token)
          console.log(response)
          return response;
     } catch (error) {
          console.log(error)
          errorHandler(error);
     }
}

export const verifyOtp = async (otp, id) => {
     try {
          let response = await api.post('/verifyOTP', { otp, id },);
          return response;
     } catch (error) {
          console.log(error);
          errorHandler(error);
     }
}

export const resendOtp = async (id) => {
     try {
          const response = await api.post('/resend-otp', { id })
          return response
     } catch (error) {
          console.log(error);
     }
}

export const getProfile = async () => {
     try {
          const response = await api.get('/profile')
          return response
     } catch (error) {
          console.log(error);
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

export const getIncome = async (origin, destination) => {
     try {
          const response = await api.post('/getIncome', { origin, destination });
          return response;
     } catch (error) {
          errorHandler(error);
     }
};

export const placeOrder = async (amount) => {
     try {
          console.log(amount);
          const response = await api.post('/placeOrder', { amount })
          return response
     } catch (error) {
          errorHandler(error);
     }
}

export const getOrders = async () => {
     try {
          const response = await api.get('/orders')
          return response
     } catch (error) {
          errorHandler(error);
     }
}