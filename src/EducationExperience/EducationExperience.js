import React from 'react'
import   './educationeExperience.css';

const EducationExperience = () => {
  return (
  <section className="education-experience">
      <div className="bolor-overlay">
        <div className="container">
            <div className="row row separator">
              <div className="col-sm-12 col-md-6">
                <div className="mh-education">
                  <h3 className="text-center aos-init" data-aos="zoom-out-up" data-aos-duration="2000" >Educacion</h3>
                 <div className="me-details">
                  
                     <div className="me-education bg aos-init" data-aos="flip-up" data-aos-duration="2000" >
                         <h4>Técnico superior en desarrollo de aplicaciones multiplataforma from <a href="https://www.escuelaces.com/">Escuela Superior de Imagen y Sonido</a></h4>
                         <div className="year">2020-2022</div>
                     </div>                                

                     <div className="me-education bg aos-init" data-aos="flip-up" data-aos-duration="2000" >
                         <h4>Bachillerato de Ciencias de la Tecnología from <a href="https://padrepiquer.es//"> Centro de Formación Padre Piquer</a></h4>
                         <div className="year">2005-2008</div>
                     </div>
                 </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="mh-work">
                  <h3 className="text-center aos-init" data-aos="zoom-out-up" data-aos-duration="3000" >Experiencia Profesional</h3>
                 <div className="me-details">

                     <div className="me-education bg aos-init" data-aos="flip-down" data-aos-duration="3000" >
                         <h4>Prácticas de desarrollador de aplicaciones multiplataforma <a href="https://jaqueasesores.com/">Jaque Asesores. Madrid</a></h4>
                         <div className="year">Abril 2022-Junio 2022</div>
                         <span>Responsabilidad :</span>
                         <ul className="work-responsibility">
                             <li><i className="bi bi-circle"></i>Validar CSS</li>
                             <li><i className="bi bi-circle"></i>Modificaciones en las webs</li>
                             <li><i className="bi bi-circle"></i>Maquetación de las webs</li>
                             <li><i className="bi bi-circle"></i>Programación en PHP</li>
                         </ul>
                     </div>                                
                 </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default EducationExperience