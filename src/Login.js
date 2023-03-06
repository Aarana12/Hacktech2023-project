import { useEffect, useState } from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Home from "./Home";
import UserDataService from "./services/user.service"

function Login(props) 
{
    // css style for submit button

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        
        const result = UserDataService.findByUsername(username);
        var userData = {};  

        result.then((response) => {
            userData = response.data[0]; 
            // console.log(userData);
            if (password != userData.pass)
            {
                alert("Wrong Password!");
            }
            else
            {
                localStorage.setItem("onMainMenu", "true");
                props.setLoggedIn(true);
                props.setUserData(userData);
            }
        }).catch(() => {
            alert("Wrong Username!");
        });
    }

    return (
        
        <>
            
            <div>
                <h1>Welcome to our website</h1>
                <p>Our website is made to support and encorage farmers to make sustainable choices as well as help people form a personal relationships to them</p>
            </div>
            
            <form id="login" onSubmit={handleSubmit}>
                <label><h1>Login</h1></label>

                <label>Username</label><br></br>
                
                <input onChange={e => setUsername(e.target.value)}></input><br></br>
                
                <label>Password</label><br></br>
                
                <input type='password' onChange={e => setPassword(e.target.value)}></input><br></br>
                
                <button type="submit" >Submit</button>

               
            </form>
            
        </>
        
    );
}

export default Login;