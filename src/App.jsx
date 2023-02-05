import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import HomePage from "./pages";
import Register from "./pages/Register";
import { useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';



function App() {
  const [progress, setProgress] = useState(0);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    const id=setTimeout(()=>{
      if(progress>=100) setLoading(false);
      else{
        const increment=Math.floor(Math.random()*(10+1))+7
        setProgress(progress+increment)
      }
    },300);
    return()=>clearTimeout(id)
  }, [progress]);

  return (
    <>
    {loading ? (<LoadingScreen progress={progress} />):(
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </div>
            )}
            </>
  )
}

export default App
