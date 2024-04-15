import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const IsPickerLoggedOut = () => {
     const { pickerToken } = useSelector((state) => state.auth);
     if (pickerToken) {
          return <Navigate to='/picker/profile' />
     } else {
          return <Outlet></Outlet>
     }
}

export default IsPickerLoggedOut;