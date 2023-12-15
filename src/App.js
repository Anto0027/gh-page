import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Inicio } from './Pages/Inicio';
import { VOLEY } from './Pages/VOLEY';
import { PROMO } from './Pages/PROMO';
import { ANIVERSARIO } from './Pages/ANIVERSARIO';
import { SEGURIDAD } from './Pages/SEGURIDAD';
import { VOC } from './Pages/VOC';
import { ARTES } from './Pages/ARTES';
import { UMSA } from './Pages/UMSA';
import { ESTUDIANTES } from './Pages/ESTUDIANTES';
import { Formulario } from './Pages/Formulario';
import { Estudiante } from './Pages/Estudiante';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='inicio'index element={<Inicio />} />
          <Route path='VOLEY' element={<VOLEY />} />
          <Route path='PROMO' element={<PROMO />} />
          <Route path='ANIVERSARIO' element={<ANIVERSARIO />} />
          <Route path='VOC' element={<VOC />} />
          <Route path='ARTES' element={<ARTES/>} />
          <Route path='UMSA' element={<UMSA />} />
          <Route path='ESTUDIANTES' element={< ESTUDIANTES/>} />
          <Route path='formulario' element={<Formulario />} />
          <Route path='estudiante' element={<Estudiante />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
