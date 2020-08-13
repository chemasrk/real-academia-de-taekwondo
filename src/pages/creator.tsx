import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts/tkd"
import SEO from "../components/seo"
import "../components/layouts/new.css"

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
    </section>
  </>
)

export default Creator
