import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts/intro.tsx"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Taekwondo ITF Mallorca Entrena con nosotros" />
    <h1>Entrena con nosotros<br />El taekwondo tradicional en Palma de Mallorca</h1>
    <p>Instructor Carlos Bazán VI Dan. Múltiple campeón mundial en blablablablablal... enseña en esta escuela el arte coreano por excelencia.</p>
    <p>Ven a probar una clase sin compromiso</p>
    <Link to="/tules">Tules</Link>
  </Layout>
)

export default IndexPage
