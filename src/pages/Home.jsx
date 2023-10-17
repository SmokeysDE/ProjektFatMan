import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Navigate } from 'react-router-dom';


const Home = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://18.185.110.14:5000/api/login", { uname: username, pass: password });
            const { token } = res.data;

            // Hier wird der JWT-Token im Local Storage gespeichert
            localStorage.setItem('jwtToken', token);
            window.location.href =`/dashboard/${username}`
        } catch (error) {
            console.error("Login failed", error);
        }
    };
    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken');
        setIsLoggedIn(!!jwtToken);
    }, []);


    return (
        <div className={'flex flex-col justify-center w-full'}>
            <h1 className=" flex font-bold text-2xl justify-center ">Login</h1>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '20vh', width: '100vw', alignItems: 'center'}}>
                <TextField
                    id="outlined-basic-username"
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={handleUsernameChange}
                    sx={{width: '20em', m: '0.5em'}}
                />
                <TextField
                    id="outlined-basic-password"
                    label="Password"
                    variant="outlined"
                    value={password}
                    type={"password"}
                    onChange={handlePasswordChange}
                    sx={{width: '20em', justifyContent:'center'}}
                />
                <Button variant="contained" color="primary" sx={{height: '3em', width: '7em', m: '0.5em'}}  onClick={handleLogin}>
                    Login
                </Button>
            </Box>
            {/*<Button variant="contained" color="primary" sx={{height: '3em', width: '7em'}}  onClick={handleLogin}>*/}
            {/*    Login*/}
            {/*</Button>*/}
        </div>
    );
};

export default Home;
