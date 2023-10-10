import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get('http://localhost:5000/user');
                setData(res.data);
            }catch (e) {
                console.log(e);
            }

        }
        fetchData();});
    return (
        <div>
            <h1>Home</h1>
            <ul>
                {data.map(item => (
                    <li key={item.idUser}>
                        <h3>{item.User_Firstname} {item.User_Lastname}</h3>
                        <p>{item.User_Email}</p>
                        <p>{item.User_Lastname}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;