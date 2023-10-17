import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";





const Register = () => {
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [birthday, setBirthday] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const handleFirstnameChange = (event) => {
        setFirstname(event.target.value);
    };
    const handleLastnameChange = (event) => {
        setLastname(event.target.value);
    };
    const handleBirthdayChange = (event) => {
        setBirthday(event.target.value);
    };
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleRegister = async () => {
        try {
            const res = await axios.post("http://18.185.110.14:5000/api/user", {
                firstname: firstname,
                lastname: lastname,
                birthdate: birthday,
                uname: username,
                pass: password,
                email: email});
            if (res.status === 200) {
                window.location.href =`/`
            } else {
                console.error("Register failed", res);
            }
        } catch (error) {
            console.error("Login failed", error);
        }
    };
    return (
        <div className={'flex flex-col justify-center w-full mt-7'}>
            <h1 className=" flex font-bold text-2xl justify-center ">Register</h1>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '40vh', width: '100vw', alignItems: 'center'}}>
                <TextField
                    id="outlined-basic-firstname"
                    label="Fistname"
                    variant="outlined"
                    value={firstname}
                    onChange={handleFirstnameChange}
                    sx={{width: '20em', m: '0.5em'}}
                />
                <TextField
                    id="outlined-basic-lastname"
                    label="Lastname"
                    variant="outlined"
                    value={lastname}
                    onChange={handleLastnameChange}
                    sx={{width: '20em', m: '0.5em'}}
                />
                <TextField
                    id="outlined-basic-birthday"
                    label="Birthday"
                    variant="outlined"
                    value={birthday}
                    onChange={handleBirthdayChange}
                    sx={{width: '20em', m: '0.5em'}}
                />
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
                    sx={{width: '20em', justifyContent:'center', m:'0.5em'}}
                ></TextField>
                <TextField
                    id="outlined-basic-mail"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                    sx={{width: '20em', m: '0.5em'}}
                />
                <Button variant="contained" color="primary" sx={{height: '3em', width: '7em', m: '0.5em'}}  onClick={handleRegister}>
                    Send
                </Button>
            </Box>
        </div>
    );
}

export default Register;