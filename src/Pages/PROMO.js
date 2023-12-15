import React from 'react'
import UESMA from '../Images/fubo1.jpg';


export const PROMO = () => {
  return (
    <div className="container">
      <div className="column-left">
        {/* Contenido de la columna izquierda */}
        <h2>CAMPEONATO ENTRE EX PROMOCIONES</h2>
        <p> Este campeonato se llevó a acabo el día 2 de diciembre de la presente gestión. 
        </p>

        <p>
        Con el reencuentro de estas ex promociones, damos por satisfecha la jornada del 2 de diciembre de la presente gestión.
        </p>
      </div>
      <div className="column-right">
        {/* Contenido de la columna derecha */}
        <h2>Columna Derecha</h2>
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
