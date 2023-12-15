import { Navbar, div,nav,Nav} from "react-bootstrap";
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
export const NavBar = () =>{
    return (
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">EL MEJOR COLLEGIO QUE PUEDAS ENCONTRAR</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">MENU</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PAGINA PRINCIPAL
                  </Link>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><Link class="dropdown-item" aria-current="page" to="/inicio">Inicio</Link></li>
                    
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    EVENTOS DE NUSTRA UNIDAD EDUCATIVA
                  </Link>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><Link class="dropdown-item" aria-current="page" to="/VOLEY">CAMPEONATO DE VOLLEYBALL</Link></li>
                    <li><Link class="dropdown-item" aria-current="page" to="/PROMO">CAMPEONADO DE EX PROMOCIONES</Link></li>
                    <li><Link class="dropdown-item" aria-current="page" to="/ANIVERSARIO">ANIVERSARIO</Link></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    FERIAS
                  </Link>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><Link class="dropdown-item" aria-current="page" to="/SEGURIDAD">SEGURIDAD</Link></li>
                    <li><Link class="dropdown-item" aria-current="page" to="/VOC">TECNICA VOCACIONAL</Link></li>
                    <li><Link class="dropdown-item" aria-current="page" to="/ARTES">ARTES                                                                                                                          PLATICAS</Link></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   NOTICIAS
                  </Link>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><Link class="dropdown-item" aria-current="page" to="/UMSA">UMSA</Link></li>
                    <li><Link class="dropdown-item" aria-current="page" to="/ESTUDIANTES">NUESTROS ESTUDIANTES VAN PRIMERO</Link></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    REGISTRARSE
                  </Link>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><Link class="dropdown-item" aria-current="page" to="/formulario">Formulario</Link></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    CREDITOS
                  </Link>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><Link class="dropdown-item" aria-current="page" to="/estudiante">Estudiante</Link></li>
                    
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
        
}