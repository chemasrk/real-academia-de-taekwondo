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

import "../layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query TkdLayoutQuery {
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

  const backgroundImg = data.allFile.edges.filter(img => img.node.absolutePath.includes("src/images/backgrounds/01.jpg"))[0].node.childImageSharp.fluid.src;
  const backgroundImg2 = data.allFile.edges.filter(img => img.node.absolutePath.includes("src/images/backgrounds/02.jpg"))[0].node.childImageSharp.fluid.src;

  return (
    <>

      <div className="bgded" style={{backgroundImage: `url('${backgroundImg}')`}}>
            
        <div className="wrapper row1">
          <header id="header" className="hoc clear">
            <div id="logo">
              
              <h1 className="logoname">
                <Link to="/">
                  <span>{data.site.siteMetadata.title}</span>
                </Link>
              </h1>
              
            </div>
          </header>
        </div>
        
        <div id="pageintro" className="hoc clear"> 
          
          <article>
            <p>Taekwondo tradicional en Mallorca</p>
            <h3 className="heading">Sabomnim Carlos Bazán VI Dan.</h3>
            <footer>
              <ul className="nospace inline pushright">
                <li><Link to="#test" className="btn">Horarios</Link></li>
                <li><Link className="btn inverse" to="#">Quienes somos</Link></li>
              </ul>
            </footer>
          </article>
          
        </div>
        
      </div>    
          
          
      <div className="wrapper row3">
        <main className="hoc container clear"> 
                  
          <section id="introblocks" className="row3 inspace-30 clear">
            {children}
          </section>
          
          <section id="services">
            <div className="sectiontitle">
              <p className="nospace font-xs">Vivamus blandit lectus nec fringilla</p>
              <h6 className="heading font-x2">Ultricies mi eros pellentesque</h6>
            </div>
            <ul className="nospace group">
              <li className="one_quarter">
                <article><a href="#"><i className="fas fa-allergies"></i></a>
                  <h6 className="heading">Odio eget blandit</h6>
                  <p>Dui id tortor mauris lorem fusce libero orci placerat non tincidunt sed accumsan non mi praesent aliquet facilisis tortor donec.</p>
                </article>
              </li>
              <li className="one_quarter">
                <article><a href="#"><i className="fas fa-chalkboard-teacher"></i></a>
                  <h6 className="heading">Posuere accumsan sit</h6>
                  <p>Mauris et turpis quisque est enim lacinia ac lobortis a viverra interdum quam aliquam nec eros quis est placerat vehicula integer.</p>
                </article>
              </li>
              <li className="one_quarter">
                <article><a href="#"><i className="fas fa-parachute-box"></i></a>
                  <h6 className="heading">Ac lorem rhoncus</h6>
                  <p>Dapibus duis pellentesque velit et pretium dapibus sem lacus egestas sem sed pellentesque nulla turpis et enim fusce tellus.</p>
                </article>
              </li>
              <li className="one_quarter">
                <article><a href="#"><i className="fas fa-fingerprint"></i></a>
                  <h6 className="heading">Risus tincidunt at</h6>
                  <p>Id vestibulum quis nibh suspendisse eget diam quis tortor malesuada rhoncus nulla euismod malesuada nibh integer iaculis ultricies.</p>
                </article>
              </li>
            </ul>
          </section>
          
          <div className="clear"></div>
        </main>
      </div>
          
          
          
      <div className="bgded overlay" style={{backgroundImage: `url('${backgroundImg2}')`}}>
        <section className="hoc container clear"> 
          
          <div className="sectiontitle">
            <p className="nospace font-xs">Orci suspendisse lorem mauris</p>
            <h6 className="heading font-x2">Ligula est auctor vitae pretium</h6>
          </div>
          <ul className="nospace group sd-third">
            <li className="one_quarter first">
              <article>
                <h6 className="heading">Eget hendrerit</h6>
                <p className="btmspace-30">Eu mauris aenean purus integer varius erat a sapien aliquam bibendum eleifend enim integer et orci proin egestas praesent.</p>
                <footer><a className="btn" href="#">Read More</a></footer>
              </article>
            </li>
            <li className="one_quarter">
              <article className="center"><a className="imgover btmspace-30" href="#"><img src="images/demo/348x261.png" alt="" /></a>
                <p className="font-xs nospace">Tincidunt</p>
                <p className="heading">John Doe</p>
              </article>
            </li>
            <li className="one_quarter">
              <article className="center"><a className="imgover btmspace-30" href="#"><img src="images/demo/348x261.png" alt="" /></a>
                <p className="font-xs nospace">Aenean</p>
                <p className="heading">Jim Doe</p>
              </article>
            </li>
            <li className="one_quarter">
              <article className="center"><a className="imgover btmspace-30" href="#"><img src="images/demo/348x261.png" alt="" /></a>
                <p className="font-xs nospace">Turpis</p>
                <p className="heading">Jane Doe</p>
              </article>
            </li>
          </ul>
          
        </section>
      </div>
          
          
          
      <div className="wrapper row2">
        <article className="hoc container clear"> 
          
          <div className="one_half first">
            <h6 className="heading font-x3">Molestie auctor nullam eu ligula quis magna</h6>
            <p>Interdum porta praesent non eros at diam faucibus pharetra.</p>
            <p className="btmspace-30">Mauris dolor diam posuere hendrerit suscipit ut convallis a erat aliquam sit amet magna in odio hendrerit eleifend phasellus vehicula auctor nisi in sollicitudin gravida tortor fusce purus nullam&hellip;</p>
            <footer><a className="btn" href="#">Read More</a></footer>
          </div>
          <div className="one_half"><a className="imgover" href="#"><img className="borderedbox inspace-10" src="images/demo/480x300.png" alt="" /></a></div>
          
        </article>
      </div>
          
      <div className="wrapper row5">
        <div id="copyright" className="hoc clear">
          <p className="fl_left">Copyright © {new Date().getFullYear()} - All Rights Reserved - <a href="#">{data.site.siteMetadata.domainurl}</a></p>
          <p className="fl_right">Web design and programmability by <a target="_blank" href={data.site.siteMetadata.authorurl} title={data.site.siteMetadata.author}>{data.site.siteMetadata.author}</a></p>  
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
