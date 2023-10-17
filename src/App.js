import Main from './main/Main'
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import {useState, useEffect} from "react";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken');
        setIsLoggedIn(!!jwtToken);
    }, []);

    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={'/dashboard/:username'} element={<Main />}/>
            {/*<Route path="/about" element={<About />} />*/}
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
