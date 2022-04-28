import { useEffect } from "react";

const item = {
    id: 1,
    nombre: "Jabon",
    descripcion: "Higiene",
    stock: 20,

};


useEffect(()=> {
    const pedido = new Promise((resolve, rejet) => {
        setTimeout=() => 
            resolve(item); 
    }, 5000);


    pedido 
        .then((res) => {
            setJuegos(res);
        })
        .then(() => console.log(juegos))
        .catch((err) => console.log(err));

    console.log(juegos); 

    return () => {
        second
    }
}, []
);

return (
    <div className="App">
        <Promise/>
    </div>
)