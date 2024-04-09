import api from "../services/axios";
import errorHandler from "./errorHandler";

export const login = async (email, password) => {
     try {
          let response = await api.post('/admin/login', { email, password });
          console.log("ssssssssssssss");
          console.log(response, "dsfgsdf")
          return response;
     } catch (error) {
          errorHandler(error);
     }
}