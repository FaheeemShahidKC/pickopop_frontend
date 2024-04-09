import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { userLogout } from "../../store/slice/authSlice";
import Login from "../user/login/Login";

const isUserLoggedIn = () => {
     const { userToken, pickerToken } = useSelector((state) => state.auth);
     console.log(userToken)
     console.log('token checking...')
     // return (
     //     userData ? <Navigate to='/' /> : <Outlet />
     // )
     if (userToken) {
          return <Outlet></Outlet>
     }else {
          return <Navigate to='/login' />
     }

}

export default isUserLoggedIn;