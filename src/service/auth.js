import 'react-toastify/dist/ReactToastify.css';
import axios from '../service/axios'
import { errorNotification, successNotification } from './notification';

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
        successNotification("Login Successfully");
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


export const registerr=({email,password,firstName,lastName},successNotification,errorNotification)=>{
  axios.post("/api/auth/register",{email,password,firstName,lastName})
    .then((res)=>{
      if(res.status===201){
        const data=res.data;
        successNotification("Registered Successfully")
        setTimeout(() => {
           window.location="/";
        }, 2000);
      }
    })
    .catch((err)=>{
      console.log(err.response.data);
      errorNotification(err.response.data);
    })
}

export const logout = (setLogged) => {
  if (sessionStorage.getItem("token")) {
    sessionStorage.removeItem("token");
    window.location = "/";
  }
};