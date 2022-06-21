import React from "react";
import "./style.css";

const Home = ({regards}) => {
    return (
            <div className="home"> {regards}
                <div className="contenedorImg">
                <img className="imgHome" src="https://cdn.shopify.com/s/files/1/0059/1285/4599/collections/Oil_in_Kind-521_grande.jpg?v=1622788519" alt="home"/>
                <img className="imgHome" src="https://cdn.shopify.com/s/files/1/0059/1285/4599/collections/Oil_in_Kind-521_grande.jpg?v=1622788519" alt="home"/>
                </div>
            </div>
        )
};

export default Home;