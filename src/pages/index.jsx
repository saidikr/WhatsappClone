import React, { useEffect } from 'react'
import LoginPage from "./LoginPage";
import Whatsapp from "./Whatsapp"
import { useState } from 'react';


function HomePage() {
  const [logged, setLogged] = useState(false);
  const [user,setUser]=useState([]);


  return (
    <>
      <div className={`${logged && "hidden"}`}>
      <LoginPage logged={logged} setLogged={setLogged} setUser={setUser} />
      </div>
      <div className={`${!logged && "hidden"}`}>
      <Whatsapp user={user} setLogged={setLogged} />
      </div>
    </>
  )
}

export default HomePage