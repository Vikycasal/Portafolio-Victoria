import React from 'react'
import Yo from "../Import/Yo.jpeg";
import {FaAward} from "react-icons/fa"
import {AiFillFolderOpen} from "react-icons/ai"
import "../About/About.css"
import Botones from "../LandingPage/Botones";

const About = () => {
  return (
    <section id="about">
      <div className="container header__container">
             <h5>Hello I'm</h5>
             <h1>Victoria Casal</h1>
             <h5 className="text-light">FullStack Developer</h5>
             <Botones/>
      </div>
             <h2>  </h2>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className='"container about__container'>
       <div className='about__me'>
         <div className='about__me-image'>
         <img src={Yo} alt=""/>
         </div>
       </div>
       <div className='todo'>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>Experiencia</h5>
              <small>2+ Years Working</small>
          </article>
          <article className='about__card'>
              <AiFillFolderOpen  className='about__icon'/>
              <h5>Proyectos</h5>
              <small>14+ Completados</small>
          </article>
        </div>
        <p>Me llamo Victoria, soy Fullstack developer. 
          Encontre en el mundo de la programacion lo que realmente me gustaba, y es por eso que decidi enforcarme 100% a esta carrera, hice un bootcamp intensivo donde me capacite, tengo muchas ganas de seguir aprendiendo y de crecer cada dia mas!
        </p>
       <a href="#contact" className='btn btn-primary'>Contactame</a>
       </div>
       </div>
      </div>
    </section>
  )
}

export default About

//aclaraciones
//Falta poner u otra imagen o una nueva