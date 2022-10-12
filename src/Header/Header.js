import React, { useEffect, useState } from 'react'
import   './nav.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

const Header = (props) => {

  const [navItemActive, setNavItemActive] = useState(["nav-item active","nav-item","nav-item","nav-item","nav-item"]);
  const [scrollTop, setScrollTop] = useState(0);
  const [Width, setWidth] = useState(0);
  const [navStrict, setNavStrict] = useState("nav-header nav-fixed");
  const [navbarToggler, setNavbarToggler] = useState(false);

  //controla el scroll de la pantalla
  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setWidth(window.innerWidth);
    };
    window.addEventListener("scroll", onScroll);
    if(Width >= 991){
      if(scrollTop >= 50)
      {
        setNavStrict("nav-header navStrict")
      }
      else{
        setNavStrict("nav-header")
      }
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  
  //controla el tamaño de la pantalla
  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);
    if(Width <= 991)
    {
      setNavStrict("nav-header")
    }
    else{
      setNavStrict("nav-header navStrict")
    }
    return () => window.removeEventListener("resize", onResize);
  }, [Width]);

  //controla los items del nav
  const HandleNavItemClicked  = (index) =>{
    const updatedCheckedState = navItemActive.map((_navItemAcive, i) =>
        (i === index) ?  "nav-item active" : "nav-item"
    );
    setNavItemActive(updatedCheckedState);
    if(Width <= 991)
    {
      setNavbarToggler(navbarToggler === false  ? true : false)
      setNavStrict("nav-header");
    }
   }
  
  const collapsedShow = () =>{
    if(Width <= 991)
    {
        setNavbarToggler(navbarToggler === false  ? true : false)
        if(navbarToggler === false){
          setNavStrict("nav-header navStrict") 
        }
        else{
          setNavStrict("nav-header")
        }
    }
  } 

  return (
  <div className={navStrict}>
      <div className="overlay"></div>
      <div className="container">
          <div className="row">
              <nav className="navbar navbar-expand-lg nav-nav nav-btn">
                <button  onClick={collapsedShow} className ="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon icon"></span>
               </button>
                  <div className = {navbarToggler ? "navbar-collapse justify-content-center collapse show" : "navbar-collapse justify-content-center collapse"} id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto ml-auto" >
                      {navItemActive.map((data,i)=> { return(
                         <li key={i} className={data} onClick={() => HandleNavItemClicked(i)} >
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