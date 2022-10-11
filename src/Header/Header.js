import React from 'react'
import   './nav.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'




const Header = () => {
    
  return (
  <div className="nav-header nav-fixed" data-aos="fade-up" data-aos-duration="1300">
      <div className="overlay"></div>
      <div className="container">
          <div className="row">
              <nav className="navbar navbar-expand-lg nav-nav nav-btn">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon icon"></span>
               </button>
                  <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto ml-auto">
                          <li className="nav-item active">
                              <a className="nav-link"  href="#introduccion">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#sobre-mi">Sobre mi</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#habilidades">Skills</a>
                          </li>                                
                          <li className="nav-item">
                            <a className="nav-link" href="#educacion-experiencia">Experiencia</a>
                          </li>                                
                          <li className="nav-item">
                              <a className="nav-link" href="#proyectos">Proyectos</a>
                          </li>                               
                      </ul>
                  </div>
                </nav>
          </div>
      </div>
    </div>
  )
}

export default Header