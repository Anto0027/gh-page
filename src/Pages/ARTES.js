import React from 'react'
import UESMA from '../Images/art2.jpg';

export const ARTES = () => {
  return (
    <div className="container">
      <div className="column-left">
        {/* Contenido de la columna izquierda */}
        <h2> Feria de Artes PLasticas </h2>
        
        <p>

        </p>
        <img
             className="d-block w-100"
             src={UESMA}
             alt="First slide"
             
           />
        
      </div>
      <div className="column-right">
        {/* Contenido de la columna derecha */}
        <h2>Un poco de la feria</h2>
        <p> Al igual que la anterior esta fue un momento de interacción entre expositores y estudiantes.
        Waskiri estuvo presente en la Unidad Educativa "SANTA MARÍA DE LOS ÁNGELES" turno mañana, donde estuvimos viendo su Feria sobre la No Violencia.
        </p>
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

