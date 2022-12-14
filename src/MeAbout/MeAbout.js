import React from 'react'
import   './aboutMe.css';
import programmer from './../assets/CV/programmer.png';
import pdf1 from './../assets/CV/CV_Ismael_Cruz_Cabezas_Desarrollo_Aplicaciones_Multiplataforma.pdf';
import pdf2 from './../assets/CV/CV_Ismael_Cruz_Cabezas.pdf';

const MeAbout = () => {
  return (
    <div className="me-about">
      <div className="container">
        <div className="row +
         separator">
          <div className="col-sm-12 col-md-6 aos-init" data-aos="zoom-in-right" data-aos-duration="2000" >
            <div >
              <img src={programmer} alt="" class="img-fluid" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 aos-init">
            <div className="me-inner" data-aos="zoom-in-left"   data-aos-duration="2000" >
              <h2>Sobre mi</h2>
              <p>Nací en Bolivia, Cochabamba en 2001. Soy una persona con recursos y creativa, empática, responsable frente al trabajo y meticulosa que me gradué de la escuela Superior de Imagen y Sonido donde estudé una grado superior en desarrollo de aplicaciones multiplataformas, realice las prácticas donde obtuve una pequeña experiencia en desarrollo de webs más en concreto WordPress, estuve a cargo de realizar las maquetaciones, modificaciones y programación en PHP.</p>
              <div className="me-tag" >
                  <ul>
                      <li><span>PHP</span></li>
                      <li><span>HTML5</span></li>
                      <li><span>CSS3</span></li>
                      <li><span>JavaScript</span></li>
                      <li><span>Java</span></li>
                      <li><span>Spring Boot</span></li>
                      <li><span>WordPress</span></li>
                      <li><span>React</span></li>
                      <li><span>React Native</span></li>
                      <li><span>Laravel</span></li>
                      <li><span>Python</span></li>
                      <li><span>MySQL</span></li>
                  </ul>
              </div>
                <a  className="btn btn-fill dropdown-toggle" data-bs-toggle="dropdown">Downlaod CV</a>
                <div className="dropdown-menu">
                    <a  className="dropdown-item btn btn-fill" href={pdf1} >CV version_1<i class="bi bi-download"></i></a>
                    <a  className="dropdown-item btn btn-fill" href={pdf2} >CV version_2<i class="bi bi-download"></i></a>
                </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeAbout
