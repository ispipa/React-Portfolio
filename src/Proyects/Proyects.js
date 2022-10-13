import React from 'react'
import   './proyects.css';
import github from './../assets/portfolio/github.jpg';
import laravel from './../assets/portfolio/laravel.jpg';
import wordpress from './../assets/portfolio/wordpress.jpg';

const Proyects = () => {
  return (
    <div  className="proyects exception">
        <div className="container">
            <div className="row  ">
                <div className="part col-sm-12">
                    <div className="titleMe col-sm-12 text-center aos-init" data-aos="zoom-in-down" data-aos-duration="2000" >
                        <h3>Proyectos</h3>
                    </div>
                    <div className="col-sm-12"  >
                    
                        <div className="row text-center">
                            <div className="col-md-4 col-sm-6 col-xs-12 figu aos-init" data-aos="fade-up" data-aos-duration="2000" >
                                <a className="tile" alt="Gitgub" data-mdb-toggle="modal" data-mdb-target="#github">
                                    <img src={github} className="rounded mb-1"/>
                                    <div className="details">
                                        <span className="title">Repositorios de mis proyectos</span>
                                        <span className="info"><i className="fs-2  bi bi-github"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 figu aos-init" data-aos="fade-up" data-aos-duration="2000" >
                                <a className="tile" alt="Laravel" data-mdb-toggle="modal" data-mdb-target="#laravel">
                                    <img src={laravel} className="rounded mb-1"/>
                                    <div className="details">
                                        <span className="title">Gestor de fotos</span>
                                        <span className="info"><i className="fs-2 fa-brands fa-laravel"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 figu aos-init" data-aos="fade-up" data-aos-duration="2000" >
                                <a className="tile" alt="Wordpress" data-mdb-toggle="modal" data-mdb-target="#wordpress">
                                    <img src={wordpress} className="rounded mb-1"/>
                                    <div className="details">
                                        <span className="title">Desarrollo en WordPress</span>
                                        <span className="info"><i className="fs-2 bi bi-wordpress"></i></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div> 
            </div> 
        </div>
    </div>
  )
}

export default Proyects