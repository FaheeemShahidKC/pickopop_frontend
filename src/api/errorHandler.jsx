import axios from "axios";
import { toast } from "react-toastify";

const errorHandler = (error) => {
     const axiosError = error;

     if (axiosError.response && axiosError.response.data) {
          const errorResponse = axiosError.response.data;
          if (errorResponse.message === "User is blocked by admin!") {
               localStorage.removeItem('userData');
               toast.error(errorResponse.message);
          } else if (errorResponse.message === "Professional is blocked by admin!") {
               localStorage.removeItem('profData');
               toast.error(errorResponse.message);
          } else {
               toast.error(errorResponse.message);
          }
     } else {
          toast.error('Something went wrong. Please try again!');
     }
}

export default errorHandler;
