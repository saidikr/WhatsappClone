import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import Whatsapp from "./pages/Whatsapp"



function App() {
  const [logged, setLogged] = useState(false);
  const [user,setUser]=useState([]);
  return (
    <div>
      {/* <Router>
        <Routes>
        <Route path="/" element={<PrivateRoute/>} />
        </Routes>
      </Router> */}
      <div className={`${logged && "hidden"}`}>
      <LoginPage logged={logged} setLogged={setLogged} setUser={setUser} />
      </div>
      <div className={`${!logged && "hidden"}`}>
      <Whatsapp user={user} setUser={setUser} />
      </div>
    </div>
  )
}

export default App
