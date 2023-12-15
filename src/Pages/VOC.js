import React from 'react'
import UESMA from '../Images/voc1.jpg';  

export const VOC = () => {
  return (
    <div className="container">
      <div className="column-left">
        {/* Contenido de la columna izquierda */}
        <h2>Feria de Tecnica Vocacional</h2>
        <p> Una actividad más para nuestra unidad educativa, hoy se presentaron los trabajos terminados de los diferentes cursos desde nivel inicial, hasta el nivel secundario.
        Este derecho se adquiere ya al quinto día de iniciada una relación laboral, es decir, cinco días después de empezar una relación laboral, la parte empleadora está obligada a asegurar a su dependiente a algún ente de seguridad social a corto plazo.
        </p>

        <img
             className="d-block w-100"
             src={UESMA}
             alt="First slide"
             
           />
        <p>
        
        </p>
      </div>
      <div className="column-right">
        {/* Contenido de la columna derecha */}
        <h2>Imagenes de alusión a la feria realizada</h2>

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
