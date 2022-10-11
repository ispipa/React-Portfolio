import React from 'react'
import   './me.css';
import FotoWebDefinitivo from './../assets/CV/FotoWebDefinitivo-removebg.png';

const Me = () => {
  return (
    <div className="me">
        <div className="container">
          <div className="row  me-padding">
            <div className="col-sm-6">
              <div className="me-info">
                  <div className="me-promo" data-aos="fade-zoom-in"  data-aos-duration="1500" >
                        <div><lottie-player src="https://assets10.lottiefiles.com/private_files/lf30_p2dfxlv0.json"  background="rgba(255, 255, 255, 0)"  speed="0.7"   loop  autoplay></lottie-player></div>
                  </div>
                  <h2  data-aos="fade-zoom-in" data-aos-anchor-placement="top-center">Ismael Cruz Cabezas</h2>
                  <h4 data-aos="fade-zoom-in"  data-aos-anchor-placement="top-center">Técnico Superior en Desarrollo de aplicaciones 
                    multiplataforma</h4>
                  <ul  data-aos="fade-zoom-in" data-aos-anchor-placement="center-center">
                      <li><a href="mailto:"><i class="bi bi-envelope"></i>ispipa123@gmail.com</a></li>
                      <li><a href="callto:"><i class="bi bi-telephone"></i>+34 610 22 93 75</a></li>
                      <li ><a href="https://www.google.com/maps/d/viewer?msa=0&mid=1N5fsrAg3JLl7ZHKsF5g3DuCKYRo&ll=40.36551897425216%2C-3.5799434999999935&z=11"><i class="bi bi-geo-alt"></i>Madrid, España</a></li>
                  </ul>
                  <ul class="social-icon" data-aos="fade-zoom-in" data-aos-anchor-placement="center-center">
                      <li><a href="https://www.linkedin.com/in/ismael-cruz-cabezas-b6bb34251/"><i class="bi bi-linkedin"></i></a></li>
                      <li><a href="https://github.com/ispipa?tab=repositories"><i class="bi bi-github"></i></a></li>
                  </ul>
              </div>
            </div>
            <div className="col-sm-6" data-aos="fade-zoom-in" data-aos-delay="400"  data-aos-duration="1500" >
              <div className="me-img" >
                  <div className="img-border">
                      <img src={FotoWebDefinitivo} alt="" className="img-fluid" />
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Me