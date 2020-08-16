/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./new.css"
import Logo from "../logo"

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

const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query IntroLayoutQuery {
      site {
        siteMetadata {
          title
          description
          author
          domainurl
          authorurl
        }
      }
      allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            id
            name
            absolutePath
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  
  const backgroundImg = data.allFile.edges.filter(img => img.node.absolutePath.includes("src/images/backgrounds/01.jpg"))[0].node.childImageSharp
  const schoolLogo = data.allFile.edges.filter(img => img.node.name.includes("school_logo"))[0].node.childImageSharp
  const instagramIcon = data.allFile.edges.filter(img => img.node.name.includes("instagram"))[0].node.childImageSharp
  const emailIcon = data.allFile.edges.filter(img => img.node.name.includes("email"))[0].node.childImageSharp
  const facebookIcon = data.allFile.edges.filter(img => img.node.name.includes("facebook"))[0].node.childImageSharp
  
  //const backgroundImg2 = data.allFile.edges.filter(img => img.node.absolutePath.includes("src/images/backgrounds/02.jpg"))[0].node.childImageSharp.fluid.src
  

  return (
    <>
      <section>
        <div className="logo">
          <h3>{data.site.siteMetadata.title}</h3>
        </div>
        <img 
          className="bg"
          src={backgroundImg.fluid.src}  />
        <div className="content">
          {children}
        </div>

        <div className="footer">
          <Logo options={{"className": "logoWebsite"}}/>
          <p className="copyrightText">
            by <a target="_blank" href={data.site.siteMetadata.authorurl} title={data.site.siteMetadata.author}>{data.site.siteMetadata.author}</a>
          </p>
        </div>

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
              <li><Link to="/"><img src={facebookIcon.fluid.src} /></Link></li>
              <li><Link to="/"><img src={instagramIcon.fluid.src} /></Link></li>
            </ul>
            <a href="mailto:test@gmail.com" className="emailBx">
              <img src={emailIcon.fluid.src} />
            </a>
          </div>
        </nav>
      </section>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
