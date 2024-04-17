import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const isPickerLoggedIn = () => {
     const { pickerToken } = useSelector((state) => state.auth);
     if (pickerToken) {
          return <Outlet></Outlet>
     } else {
          return <Navigate to='/picker/login' />
     }

}

export default isPickerLoggedIn;