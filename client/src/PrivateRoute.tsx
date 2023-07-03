import { Outlet, Navigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser } from "./slices/whitelist";
import { useEffect } from "react";
import axios from "axios";



const PrivateRoute = () => {
  const user = useSelector(getUser);
  const token = localStorage.getItem("authToken");
  const dispatch = useDispatch();
  console.log(token);
  const fetchDataUsers = async () => {
    try {
      if (token) {
        const [usersResponse] = await Promise.all([
          axios.post(`http://localhost:8000/api/v1/users/auth`, { token: token }),
        ]);
        dispatch(setUser(usersResponse.data.findUser[0]));
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDataUsers();
  }, [])


  return (
    user ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoute