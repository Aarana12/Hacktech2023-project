import { Link, Route, Routes, BrowserRouter, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from './Home';
import Articles from './Articles';
import Discover from './Discover';
import Resources from './Resources.js';
import News from './News';
import Messaging from './Messaging';
import Notifications from './Notifications';
import Banner from './Banner';
import Login from './Login';
import Logout from './Logout';

function Index() {

  const [loggedIn, setLoggedIn]  = useState(false);

  const [onMainMenu, setOnMainMenu] = useState(false);

  const [userData, setUserData] = useState({});

    return (
        <>
            {loggedIn && <Banner userData={userData}/>}

            <BrowserRouter>
                <Routes>
                <Route path="/" element={loggedIn == false ? <Login setLoggedIn={setLoggedIn} setUserData={setUserData}/> : <Navigate to="/Home" />}/>
                <Route path="/Home" element={loggedIn == true ? <Home/> : <Navigate to="/"/>}/>
                <Route path="/Articles" element={loggedIn == true ? <Articles/> : <Navigate to="/"/>}/>
                <Route path="/Discover" element={loggedIn == true ? <Discover/> : <Navigate to="/"/>}/>
                <Route path="/Resources" element={loggedIn == true ? <Resources/> : <Navigate to="/"/>}/>
                <Route path="/News" element={loggedIn == true ? <News/>: <Navigate to="/"/>}/>
                <Route path="/Messaging" element={loggedIn == true ? <Messaging/>: <Navigate to="/"/>}/>
                <Route path="/Notifications" element={loggedIn == true ? <Notifications/>: <Navigate to="/"/>}/>
                <Route path="*" element={loggedIn == false ? <Navigate to="/"/> : <Navigate to="/Home" />}/>
                </Routes>
            </BrowserRouter>

            {loggedIn && <Logout setLoggedIn={setLoggedIn} />}
        </>
    )
}

export default Index;
