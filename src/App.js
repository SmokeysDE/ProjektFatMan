import Main from './main/Main'
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Main />} />
            {/*<Route path="/about" element={<About />} />*/}
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
