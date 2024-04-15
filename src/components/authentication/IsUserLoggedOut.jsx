import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";


const IsUserLoggedOut = () => {

     const { userToken, pickerToken } = useSelector((state) => state.auth);
     console.log(userToken)
     console.log('token checking...')
     // return (
     //     userData ? <Navigate to='/' /> : <Outlet />
     // )
     if (userToken) {
          return <Navigate to='/profile' />
     } else {
          return <Outlet />
     }

}

export default IsUserLoggedOut;