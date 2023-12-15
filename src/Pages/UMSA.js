import React from 'react'
import UESMA from '../Images/convo1.jpg';

export const UMSA = () => {
  return (
    <div className="container">
      <div className="column-left">
        {/* Contenido de la columna izquierda */}
        <h2>CONVCATORIAS</h2>
        <img
             className="d-block w-100"
             src={UESMA}
             alt="First slide"
             
           />
        <p> 
          <p></p>
        <img
             className="d-block w-100"
             src={UESMA}
             alt="First slide"
             
           />
        </p>

        <p>
        
        </p>
      </div>
      <div className="column-right">
        {/* Contenido de la columna derecha */}
        <h2></h2>
        <img
             className="d-block w-100"
             src={UESMA}
             alt="First slide"
             
           />
        <p></p>

        <img
             className="d-block w-100"
             src={UESMA}
             alt="First slide"
             
           />
        <p></p>

      </div>
    </div>
  )
}
