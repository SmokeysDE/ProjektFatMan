import Main from './main/Main'
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter} from "react-router-dom";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import {useState, useEffect} from "react";
import Home from "./Routes/Home";
import {ThemeProvider, createTheme} from "@mui/material";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const theme = createTheme();

    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken');
        setIsLoggedIn(!!jwtToken);
    }, []);

    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path={'/dashboard/:username'} element={<Main />}/>
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
