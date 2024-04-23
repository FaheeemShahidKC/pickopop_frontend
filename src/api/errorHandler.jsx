import axios from "axios";
import { toast } from "sonner";

const errorHandler = (error) => {
     const axiosError = error;

     if (axiosError.response && axiosError.response.data) {
          const errorResponse = axiosError.response.data;
          if (errorResponse.message === "User is blocked by admin!") {
               localStorage.removeItem('userData');
               toast.warning(errorResponse.message);
          } else if (errorResponse.message === "Professional is blocked by admin!") {
               localStorage.removeItem('profData');
               toast.warning(errorResponse.message);
          } else {
               toast.warning(errorResponse.message);
          }
     } else {
          toast.warning('Something went wrong. Please try again!');
     }
}

export default errorHandler;
