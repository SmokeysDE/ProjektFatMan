import React, { useState } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";

const Home = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        try {
            const res = await axios.get("http://18.185.110.14:5000/api/user");
            const userData = res.data[0];

            if (userData.uname === username && userData.pass === password) {
                window.location.href = "/dashboard";
            } else {
                console.log("Invalid credentials");
            }
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div>
            <h1 className=" flex font-bold text-2xl justify-center ">Login</h1>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <TextField
                    id="outlined-basic-username"
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <TextField
                    id="outlined-basic-password"
                    label="Password"
                    variant="outlined"
                    value={password}
                    type={"password"}
                    onChange={handlePasswordChange}
                />
                <Button variant="contained" color="primary" onClick={handleLogin}>
                    Login
                </Button>
            </Box>
        </div>
    );
};

export default Home;
