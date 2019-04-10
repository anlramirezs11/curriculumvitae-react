import React, {useState} from 'react';

const HelloWord2 =() => {
    const[active, setActive]= useState(false);
    const handleClick = () => {
        setActive(!active);
    }
    return(
        <div>
            <button onClick={handleClick}>Mostrar</button>
            {active &&
                <h1>Hola Mundo</h1>   
            }                   
        </div>
    );
}

export default HelloWord2;