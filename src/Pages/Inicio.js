import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UESMA from '../Images/UESMA.png';

export const Inicio = () => {
  return (
    <div className="container">
    <div>
    <center><h1>Unidad Educativa Santa Maria de los Angeles</h1></center> 
    <center><h2>Siempre destacamos ante los demás.</h2></center>
    <div className="main">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
             className="d-block w-100"
             src={UESMA}
             alt="First slide"
             
           />
        </Carousel.Item>
        <Carousel.Item>
           <img
             className="d-block w-100"
            src={UESMA}
            alt="Second slide"
            />
            
         </Carousel.Item>
         <Carousel.Item>
            <img
              className="d-block w-100"
              src={UESMA}
              alt="Third slide"
            />
        
         </Carousel.Item>
      </Carousel>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tuvimos ya un gran recorrido</Accordion.Header>
        <Accordion.Body>
          A lo largo de nuestra historia, con alatas y bajas siempre vimos hacia adelante y pudismo hacer todo lo posible para salir adelantem siempre pensando en nuestros esetudiante.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>SOMOS UNA UNIDAD EDUCATIVA QUE REPRESENTA EL PRESTIGIO ENTRE LAS DEMÁS</Accordion.Header>
        <Accordion.Body>
          SOMOS LOS MEJORES
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      <iframe className="video1" width="1473" height="547" src="https://youtu.be/jH9AU6kQT18" title="Play Video in React with the Cloudinary Video Player - Dev Hints" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>


    <div className="main2">
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={UESMA}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={UESMA}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={UESMA}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>¡CUMPLIMOS 66 AÑOS!</Accordion.Header>
        <Accordion.Body>
        Consideramos que la experiencia es de las cosas más importantes en la vida, pregunten a quien pregunten, ya la tenemos. Nuestras diversas actividades lo confirman, somos organizados en todo lo que hacemos y como lo hacemos. Tenemos una capacidad muy alta en nuestro rendimiento, hay niños y jovenes con talento a los cuales apoyamos. Así en representación no solo de nuestra queria unidad educativa, si no el distrito, municipio y el departamento en algunas ocaciones.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>NO HAY MEJOR UNIDAD EDUCATIVA QUE LA NUESTRA</Accordion.Header>
        <Accordion.Body>
          SOMOS EL PRESTIGIO PURO
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          <iframe className="video2" width="1473" height="547" src="https://youtu.be/jH9AU6kQT18" title="Play Video in React with the Cloudinary Video Player - Dev Hints" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </div>
    </div>
  )
}
