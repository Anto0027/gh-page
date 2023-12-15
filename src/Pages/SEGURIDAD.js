import React from 'react'
import UESMA from '../Images/UESMA.png';

export const SEGURIDAD = () => {
  function SEGURIDAD() {
    return (
      <div className="container">
        <div className="column-left">
          {/* Contenido de la columna izquierda */}
          <h2>Una feria para concientizar a la población</h2>
          <p>Quisimos tocar un tema como la seguridad lo cual nos lleva a hablar de violencia y a su vez de otros temas relacionados.
            Teniendo como punto pirncipal nuestra feria y el trabajo de concientización en conjunto de los padres de familia afines a la 
            unidad educativa, damos una muy buena información hacia los estudiantes.
          
          </p>
          <p>Gracias a MAESTROS (AS), ADMINISTRATIVOS, ESTUDIANTES Y PADRES DE FAMILIA POR SACAR ADELAANTE ESTA HERMOSA ACTIVIDAD...!!</p>
          <p><img
             className="d-block w-100"
             src={UESMA}
             alt="First slide"
             
           />
</p>
        </div>
        <div className="column-right">
          {/* Contenido de la columna derecha */}
          <h2>Unas bellas imagenes de como se pasó el día</h2>
          <p><img
             className="d-block w-100"
             src={UESMA}
             alt="First slide"
             
           />
</p>
          
          <p>

          </p>
        </div>
      </div>
    )
  }
}