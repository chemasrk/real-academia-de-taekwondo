import React, {useState} from "react"
import { Link } from "gatsby"

//import Layout from "../components/layouts/tkd"
import SEO from "../components/seo"
import "../components/layouts/new.css"

const ChangeActive = () =>{

  const classActive:string = "active"
  const domMenu:Element = document.querySelector(".menuToggle")
  const domNav:Element = document.querySelector(".navigation")

  if(domMenu.classList.contains("active")){
    domMenu.classList.remove("active")
    domNav.classList.remove("active")
  }else{
    domMenu.classList.add("active")
    domNav.classList.add("active")
  }

}


const Creator = () => (

  <>
    <section>
      <div className="logo">Crative</div>
      <img src="https://c7.alamy.com/compes/mpepx3/imagen-vertical-de-un-iluminado-el-big-ben-y-el-parlamento-sobre-el-rio-tamesis-en-las-primeras-horas-de-la-noche-mpepx3.jpg" className="bg" />
      <div className="content">
        <h2>Let's make<br />Something creative</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis sint atque rerum, quibusdam quas quod accusamus minus adipisci, aliquam repellendus voluptatibus? Sapiente aut provident incidunt, nostrum itaque culpa iure praesentium.</p>
        <a href="#">Get Started</a>
      </div>
      <p className="copyrightText">2020 chemi</p>
      <div className="menuToggle" onClick={ChangeActive}></div>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Nosotros</Link></li>
          <li><Link to="/">Clases</Link></li>
          <li><Link to="/">Contacto</Link></li>
          <li><Link to="/">Autor</Link></li>
        </ul>
        <div className="socialBar">
          <ul>
            <li><Link to="/"><img src="../facebook.png" /></Link></li>
            <li><Link to="/"><img src="../instagram.png" /></Link></li>
          </ul>
          <a href="mailto:test@gmail.com" className="emailBx">
            <img src="email.png" />
          </a>
        </div>
      </nav>
    </section>
  </>
)

export default Creator
