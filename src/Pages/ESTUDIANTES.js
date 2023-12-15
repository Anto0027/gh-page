import React from 'react'
import UESMA from '../Images/not2.jpg';

export const ESTUDIANTES = () => {
  return (
    <div className="container">
      <div className="column-left">
        {/* Contenido de la columna izquierda */}
        <h2>Los mejores estudiantes no rendiran algún tipo de prueba para ingresar a la Academia Nacional de policias</h2>
        <p> El ministro de Gobierno, Eduardo del Castillo, informó este martes que se habilitaron ingresos sin exámenes académicos de admisión a la Academia Nacional de Policías (Anapol) y a la Facultades Técnicas Superiores de Ciencias Policiales (Fatescipoles) destinados a los mejores bachilleres.

Del Castillo explicó que las plazas habilitadas son adiciones a las que regularmente se ofrecen.

“Cualquier estudiante que hubiera culminado sus estudios bachilleres y se encuentre dentro de los tres primeros lugares de su promoción .     
        </p>
<p></p>
<img
             className="d-block w-100"
             src={UESMA}
             alt="First slide"
             
           />
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
