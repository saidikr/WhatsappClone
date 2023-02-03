import 'react-toastify/dist/ReactToastify.css';
import axios from '../service/axios'

export const login = (
  { email, password,setLogged,setUser },
  successNotification,
  errorNotification
) => {
  ///api call
  axios.post("/api/auth/login", { email, password })
    .then((res) => {
      if (res.status === 200) {
        const data = res.data;
        setUser(data);
        sessionStorage.setItem("token", JSON.stringify(data));
        successNotification("Login succesfully");
        setTimeout(() => {
           setLogged(true)
        }, 2000);
      }
    })
    .catch((err) => {
      console.log(err.response.data);
      errorNotification(err.response.data);
    });
};

export const logout = () => {
  if (sessionStorage.getItem("token")) {
    sessionStorage.removeItem("token");
    window.location = "/";
  }
};