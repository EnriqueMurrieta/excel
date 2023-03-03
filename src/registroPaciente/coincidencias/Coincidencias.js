import './Coincidencias.css';
//import React from 'react';

function Coincidencias({resultado}) {
    console.log(resultado)

    return (
        <div style={{textAlign:"center", width:"100%"}} >
            <h2>Coincidencias</h2>
            {
                resultado.map(instance => (
                    <div key={instance.paterno}>
                        <p>{instance.nombre} {instance.paterno} {instance.materno}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Coincidencias;
