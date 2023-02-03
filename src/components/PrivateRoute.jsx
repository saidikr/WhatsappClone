import { Navigate } from "react-router-dom";



export const PrivateRoute = ({}) => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const userId = JSON.parse(sessionStorage.getItem("userId"));
  if (token && userId) {
    return <Navigate to={`/home/${userId}`} />;
  }
  return <Navigate to="/auth/login" />;
};
