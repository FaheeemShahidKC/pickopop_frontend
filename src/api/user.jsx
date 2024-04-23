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
          console.log(token);
          let response = await api.post('/verifyOTP', { otp }, {
               headers: {
                    Authorization: `Bearer ${token}`
               }
          });
          console.log(response.data.success);
          if (response.data.success) {
               localStorage.removeItem('userotp')
          }
          return response;
     } catch (error) {
          console.log(error);
          errorHandler(error);
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

export const getDistance = async () => {
     try {
          const api = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=51.4822656,-0.1933769&destinations=51.4994794,-0.1269979&key=gtjpeZs6qV7pJJRFqHN80cUqgfY1XmMd1CVw3NW1Aa44oxaXLFMEvAwTYJLLNkvI`;

          const response = await fetch(api);

          if (!response.ok) {
               throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log(data);
     } catch (error) {
          errorHandler(error);
     }
};
