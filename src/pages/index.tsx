import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts/intro.tsx"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout test="123">
    <SEO title="Creator of this site" />
    <h2>Entrena con nosotros<br />El taekwondo tradicional en Palma de Mallorca</h2>
    <p>Instructor Carlos Bazán VI Dan. Múltiple campeón mundial en blablablablablal... enseña en esta escuela el arte coreano por excelencia.</p>
    <p>Ven a probar una clase sin compromiso</p>
    <a href="#">Horarios</a>
  </Layout>
)

export default IndexPage
