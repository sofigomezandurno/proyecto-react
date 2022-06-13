import React from "react";
import img from "../img/imgHome.jpg";
import "./style.css";

const Home = ({regards}) => {
    return (
            <div className="home"> {regards}
                <div className="contenedorImg">
                <img className="imgHome" src={img}/>
                <img className="imgHome" src={img}/>
                </div>
            </div>
        )
};

export default Home;