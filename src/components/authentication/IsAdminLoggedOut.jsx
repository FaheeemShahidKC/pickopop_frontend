import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { userLogout } from "../../store/slice/authSlice";
import Login from "../user/login/Login";

const IsAdminLoggedOut = () => {
     const { adminToken } = useSelector((state) => state.auth);
     console.log('token checking...')
     if (adminToken) {
          return <Navigate to={'/admin/dashboard'}></Navigate>
     } else {
          return <Outlet />
     }

}

export default IsAdminLoggedOut;