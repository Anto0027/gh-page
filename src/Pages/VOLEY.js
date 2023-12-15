import React from 'react'
import UESMA from '../Images/voley1.jpg';



export const VOLEY = () => {
  return (
    <div className="container">
      <div className="column-left">
        {/* Contenido de la columna izquierda */}
        <h2>CAMPEONATO DE VOLLEYBALL</h2>
        <p> La duracion fue de un solo día, ya que fue un campeonato relampago, los estudiantes de nivel secundario manifestaron su goze al emplear el volleyball como actividad de recreación y competición, siempre teniendo en cuenta que nuestros estudiantes son capaces de hacer lo que se propongan.
          Son ejemplo claro de la frase "quien quiere, puede" orgullosamente decir que fue una jornada bien aprovechada y feliz de que los estudiantes hayan participado de la actividad.
        </p>


        <p>
        Una actividad más realizada con exito en nuestraunidad educativa.
        </p>
      </div>

      <div className="column-right">
        {/* Contenido de la columna derecha */}
        <h2>Imagen de las ganadoras del campeonato</h2>
        
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
