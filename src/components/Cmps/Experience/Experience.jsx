import React from 'react'
import "../Experience/Experience.css"
import CarritoVue from "../Experience/CarritoVue.png"
import Rubrit from "../Experience/Rubrit.png"
import FoodPi from "../Experience/FoodPi.png"
import BuscaPelis from "../Experience/BuscaPelis.png"
import ChatSocket from "../Experience/ChatSocket.png"
import Tateti from "../Experience/Tateti.png"
import {AiFillGithub} from "react-icons/ai"

const Experience = () => {
  return (
    <section id = "experience">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'></div>
         <img src="" alt="" />
        <h3>Rubrit App</h3>
        <img src={Rubrit} alt="" className='ImgExperiencia'/>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Vikycasal/Rubrit-App" className='btn' target="_blank">Codigo</a>
        <a href="https://www.youtube.com/watch?v=htS2-3gpf0U" className='btn btn-primary' target="_blank">Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className='portfolio__item-image'></div>
         <img src="" alt="" />
        <h3>Buscador de Peliculas</h3>
        <img src={BuscaPelis} alt="" className='ImgExperiencia'/>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Vikycasal/PruebaTecnica-Junior-midudev-Victoria/tree/main/src" className='btn' target="_blank">Ver Codigo</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className='portfolio__item-image'></div>
         <img src="" alt="" />
        <h3>Juego básico TATETI</h3>
        <img src={Tateti} alt="" className='ImgExperiencia'/>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Vikycasal/tateti-midudev-Victoria" className='btn' target="_blank">Ver Codigo</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className='portfolio__item-image'></div>
         <img src="" alt="" />
        <h3>Chat básico de React - Socket IO</h3>
        <img src={ChatSocket} alt="" className='ImgExperiencia'/>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Vikycasal/ChatReactSocketIo-Victoria" className='btn' target="_blank">Ver Codigo</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className='portfolio__item-image'></div>
         <img src="" alt="" />
        <h3>Ecommerce de Accesorios</h3>
        <img src={CarritoVue} alt="" className='ImgExperiencia'/>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Vikycasal/CarritoCompra-Vue" className='btn' target="_blank">Ver Codigo</a>
       </div>
        </article>
        <article className='portfolio__item'>
        <div className='portfolio__item-image'></div>
         <img src="" alt="" />
        <h3>Spa - Recetas de comida</h3>
        <img src={FoodPi} alt="" className='ImgExperiencia'/>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Vikycasal/PI-Food" className='btn' target="_blank">Ver Codigo</a>
      </div>
        </article>
      </div>
      <div className='div_github'>
      <a href="https://github.com/Vikycasal" className='btn1' target="_blank">Aqui tenes un acceso directo a mi Github    
       <AiFillGithub className='github_icon' /></a>
       </div>
    </section>
  )
}

export default Experience

//Faltaria poner bien los link de codigos e importar imagenes y tambien poner los videos