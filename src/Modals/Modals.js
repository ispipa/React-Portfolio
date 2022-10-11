import React from "react";
import   './Modal.css';
import github_01 from './../assets/portfolio/github_01.png';
import github_02 from './../assets/portfolio/github_02.png';
import laravel_01 from './../assets/portfolio/laravel_01.png';
import laravel_02 from './../assets/portfolio/laravel_02.png';
import wordpress_01 from './../assets/portfolio/wordpress_01.png';
import wordpress_02 from './../assets/portfolio/wordpress_02.png';

const Modals = () => {

  return (
    <div class="modals">
      <div
        className="modal fade"
        id="github"
        data-mdb-keyboard="false"
        tabIndex="-1"
        aria-labelledby="githubLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div
            className="modal-content proyects-inner"
            style={{ background: "#282828" }}
          >
            <div className="modal-body">
              <i className="fs-2 bi bi-x-circle" data-mdb-dismiss="modal"></i>
              <div className="row">
                <div className="col-sm-5">
                  <h2>Mis pequeños proyectos</h2>
                  <p>
                    Todos mis proyectos realizados para practicar o trabajar en
                    unos lenguajes y mejorar aspectos que no controlaba bien.
                  </p>
                  <p>
                    A continuación los distintos lenguajes que se encuentran en
                    mis repositorios.
                  </p>
                  <div className="me-tag">
                    <ul>
                      <li>
                        <span>PHP</span>
                      </li>
                      <li>
                        <span>HTML</span>
                      </li>
                      <li>
                        <span>CSS</span>
                      </li>
                      <li>
                        <span>Java</span>
                      </li>
                      <li>
                        <span>WordPress</span>
                      </li>
                      <li>
                        <span>React</span>
                      </li>
                      <li>
                        <span>JavaScript</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="https://github.com/ispipa?tab=repositories"
                    className="btn btn-fill"
                  >
                    Ver Repositorios
                  </a>
                </div>
                <div className="col-sm-7 text-center mo">
                  <div className="img-desc-proyects">
                    <img
                      src={github_01}
                      alt="img04"
                      className="img-fluid"
                    />
                    <p>Ejemplo de aplicación hecha con React.</p>
                    <img
                      src={github_02}
                      alt="img04"
                      className="img-fluid"
                    />
                    <p>Ejemplo de una aplicación hecha con Java.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="laravel"
        data-mdb-keyboard="false"
        tabIndex="-1"
        aria-labelledby="laravelLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div
            className="modal-content proyects-inner"
            style={{ background: "#282828" }}
          >
            <div className="modal-body">
              <i className="fs-2 bi bi-x-circle" data-mdb-dismiss="modal"></i>
              <div className="row">
                <div className="col-sm-5">
                  <h2>Un pequeño proyecto en Laravel</h2>
                  <p>
                    Aplicación sencilla con un registro, subida de imágenes,
                    recuperación de contraseña, filtrados.
                  </p>
                  <p>Desplegada en un hosting gratuito.</p>
                  <div class="me-tag">
                    <ul>
                      <li>
                        <span>PHP</span>
                      </li>
                      <li>
                        <span>HTML</span>
                      </li>
                      <li>
                        <span>CSS</span>
                      </li>
                      <li>
                        <span>MySQL</span>
                      </li>
                      <li>
                        <span>JavaScript</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="http://gestor-fotos.ispipa.x10.mx/"
                    className="btn btn-fill"
                  >
                    Live Demo
                  </a>
                </div>
                <div className="col-sm-7 text-center mo">
                  <div className="img-desc-proyects">
                    <img
                      src={laravel_01}
                      alt="img04"
                      className="img-fluid"
                    />
                    <p>Pantalla de inició de sesión.</p>
                    <img
                      src={laravel_02}
                      alt="img04"
                      className="img-fluid"
                    />
                    <p>Pantalla de visualización de las fotos del usuario.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="wordpress"
        data-mdb-keyboard="false"
        tabIndex="-1"
        aria-labelledby="wordpressLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div
            className="modal-content proyects-inner"
            style={{ background: "#282828" }}
          >
            <div className="modal-body">
              <i className="fs-2 bi bi-x-circle" data-mdb-dismiss="modal"></i>
              <div className="row">
                <div className="col-sm-5">
                  <h2>Proyecto durante las prácticas</h2>
                  <p>
                    Trabaje durante la maquetación añadiendo el nav, los estilos
                    y en unas pequeñas animaciones.
                  </p>
                  <div className="me-tag">
                    <ul>
                      <li>
                        <span>PHP</span>
                      </li>
                      <li>
                        <span>HTML</span>
                      </li>
                      <li>
                        <span>CSS</span>
                      </li>
                      <li>
                        <span>WordPress</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="https://nednest.jaqueasesores.es/"
                    className="btn btn-fill"
                  >
                    Live Demo
                  </a>
                </div>
                <div className="col-sm-7 text-center mo">
                  <div className="img-desc-proyects">
                    <img
                      src={wordpress_01}
                      alt="img04"
                      className="img-fluid"
                    />
                    <p>Pantalla del nav.</p>
                    <img
                      src={wordpress_02}
                      alt="img04"
                      className="img-fluid"
                    />
                    <p>Algunas cards de muestra.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
