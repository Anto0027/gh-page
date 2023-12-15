import React from 'react'
import UESMA from '../Images/aniv3.jpg'
export const ANIVERSARIO = () => {
  return (
    <div className="container">
      <div className="column-left">
        {/* Contenido de la columna izquierda */}
        <h2>ANIVERSARIO</h2>
        <p> 
        </p>
        Nos hemos reunido para conmemorar los 66 años de trayectoria de nuestro querido Colegio
Santa Maria de los Angeles. Podemos decir con orgullo y satisfacción que nuestro colegio es hoy una institución que
ha alcanzado su madurez siendo reconocida por la comunidad por las características de su Proyecto
Educativo y por los logros obtenidos a lo largo del tiempo, reflejados en la calidad de los exalumnos ya
profesionales que durante su formación escolar formaron parte de nuestras aulas.
Somos una institución que valora profundamente lo logrado todos estos años, que busca de
permanentemente mejorar la calidad en su desempeño y que hace esfuerzos por responder de
manera oportuna y efectiva a los nuevos desafíos y normativas. 
        <p>
        <img
             className="d-block w-100"
             src={UESMA}
             alt="First slide"
             
           />

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
        <p><img
             className="d-block w-100"
             src={UESMA}
             alt="First slide"
             
           />
</p>
      </div>
    </div>
  )
}
