import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import Me from './Me/Me';
import MeAbout from './MeAbout/MeAbout';
import Skills from './Skills/Skills';
import EducationExperience from './EducationExperience/EducationExperience';
import Proyects from './Proyects/Proyects';
import Modals from './Modals/Modals';

const modals = ReactDOM.createRoot(document.getElementById('modals'));
modals.render(
    <React.StrictMode>
        <Modals />
    </React.StrictMode>
);

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
    <React.StrictMode>
        <Header value={["#introduccion","#sobre-mi","#habilidades","#educacion-experiencia","#proyectos"]} text={["Home","Sobre mi","Skills","Experiencia","Proyectos"]}/>
    </React.StrictMode>
);

const introduccion = ReactDOM.createRoot(document.getElementById('introduccion'));
introduccion.render(
    <React.StrictMode>
        <Me />
    </React.StrictMode>
);

const sobreMi = ReactDOM.createRoot(document.getElementById('sobre-mi'));
sobreMi.render(
    <React.StrictMode>
        <MeAbout />
    </React.StrictMode>
);

const habilidades = ReactDOM.createRoot(document.getElementById('habilidades'));
habilidades.render(
    <React.StrictMode>
        <Skills />
    </React.StrictMode>
);

const educacionExperiencia = ReactDOM.createRoot(document.getElementById('educacion-experiencia'));
educacionExperiencia.render(
    <React.StrictMode>
        <EducationExperience />
    </React.StrictMode>
);

const proyectos = ReactDOM.createRoot(document.getElementById('proyectos'));
proyectos.render(
    <React.StrictMode>
        <Proyects />
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
