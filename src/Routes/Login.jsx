import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Navigate } from 'react-router-dom';


const Login = () => {
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
        <div className="grid grid-cols-2 grid-rows-1 w-full h-screen">
            {/* Left Column */}
            <div className="col-start-1 flex flex-col justify-center bg-white p-8">
                <h1 className="font-bold text-2xl text-center">Login</h1>
                <Box sx={{ display: 'flex', flexDirection: 'column', m: '0.5em', justifyContent:'center', alignItems: 'center' }}>
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
                    sx={{width: '20em', m: '0.5em'}}
                />
                <Button variant="contained" color="primary" sx={{height: '3em', width: '7em', m: '0.5em'}}  onClick={handleLogin}>
                    Login
                </Button>
                <Link href="/frontend/projectfatman/src/Routes/Register" underline="hover">
                    {'Register here!'}
                </Link>
            </Box>
            </div>
            <div
                className="col-start-2 p-8 text-white items-center justify-center flex flex-col"
                style={{
                    backgroundColor: '#035397',
                    padding: '1em',
                }}
            >
                <Button
                    variant="outlined"
                    sx={{ position: 'absolute', top: '1em', right: '1em', color: 'white', borderColor: 'white' }}
                    onClick={() => {window.location.href =`/register`}}
                >
                    Register
                </Button>
                <p className="font-bold text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ut lacus nec
                    bibendum. Aliquam erat volutpat. Nulla facilisi. Donec in semper massa, nec commodo
                    augue.
                </p>
            </div>
        </div>
    );
};

export default Login;