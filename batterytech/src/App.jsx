import { useState } from 'react'
import NavbarComponent from './component/navbar'
import BatteryStatus from './component/batterystatus'
import 'bootstrap/dist/css/bootstrap.min.css';
import CircularProgressBar from './component/percentage';
import Login from './component/login';
import Register from './component/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
         {/* <div className="App">
      <NavbarComponent />
      <BatteryStatus />
      <div className="loader">
        <div className="spinner"></div>
        <p>Refreshing...</p>
      </div>
    </div> */}

        {/* <div>
            <Login />
        </div> */}

        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/" element={<Register />} />
            </Routes>
        </Router>

    </>
  )
}

export default App
