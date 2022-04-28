import React, {useState, useEffect} from 'react'

function LifeCicle() {

    const [cambios, setCambios] = useState("Ciclo")

    console.log ("El componente se inicio");
    
    useEffect(() =>{
        console.log("El componente esta listo")

        return () =>{
            console.log("El componente murio")
        }
    }, [cambios])

    return (
    <div>
        <h1 style={{margin:"100px 0"}}>{cambios}</h1>
        <button onClick={()=> setCambios("Cambio")}>Cambio</button>
    </div>
        )
}

export default LifeCicle