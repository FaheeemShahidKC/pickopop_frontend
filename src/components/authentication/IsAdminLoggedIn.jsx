import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { userLogout } from "../../store/slice/authSlice";
import Login from "../user/login/Login";

const isAdminLoggedIn = () => {
     const { adminToken } = useSelector((state) => state.auth);
     console.log(userToken)
     console.log('token checking...')
     // return (
     //     userData ? <Navigate to='/' /> : <Outlet />
     // )
     if (adminToken) {
          return <Outlet></Outlet>
     }else {
          return <Navigate to='/admin/login' />
     }

}

export default isAdminLoggedIn;