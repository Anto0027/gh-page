import React from 'react'
import UESMA from '../Images/UESMA.png';

export const Estudiante = () => {
  return (
    <div className="container">
      <div className="column-left">
        {/* Contenido de la columna izquierda */}
        <h2>Estudiante</h2>

        <p> Omar Anton Cocarico Nina </p>
        <p>CI: 10918297</p>
        <p> e-mail: unianton@gmail.com </p>
        

        
      </div>
      <div className="column-right">
        {/* Contenido de la columna derecha */}
        <h2>Los creditos al mejor creador de paginas web</h2>

        <p></p>
        <img
             className="d-block w-100"
             src={UESMA}
             alt="First slide"
             
           />
      </div>
    </div>
  )
}
