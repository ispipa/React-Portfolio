import React, { useState } from 'react'
import   './nav.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

const Header = (props) => {

  const [navItemActive, setNavItemActive] = useState(["nav-item active","nav-item","nav-item","nav-item","nav-item"]);

  const handleNavItemClicked  = (index) =>{
    const updatedCheckedState = navItemActive.map((_navItemAcive, i) =>
        (i === index) ?  "nav-item active" : "nav-item"
    );
    setNavItemActive(updatedCheckedState);
   }

  return (
  <div className="nav-header nav-fixed" data-aos="fade-up" data-aos-duration="1300" >
      <div className="overlay"></div>
      <div className="container">
          <div className="row">
              <nav className="navbar navbar-expand-lg nav-nav nav-btn">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon icon"></span>
               </button>
                  <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto ml-auto" >
                      {navItemActive.map((data,i)=> { return(
                         <li key={i} className={data} onClick={() => handleNavItemClicked(i)}>
                            <a className="nav-link"  href={props.value[i]}>{props.text[i]}</a>
                         </li>
                      )})}                             
                      </ul>
                  </div>
                </nav>
          </div>
      </div>
    </div>
  )
}

export default Header