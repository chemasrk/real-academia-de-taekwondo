import React from "react"

import Layout from "../components/layouts/intro.tsx"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage  = () => (
  <Layout>
    <SEO title="404: Página no encontrada" />
    <h2>Parece que te has perdido...</h2>
    <p>La página que buscas no existe, tal vez haya sido borrada o se ha cambiado de nombre.</p>
    <p>Ven a entrenar con nosotros, así no te volverás a perder.</p>
    <Link to="/">Inicio</Link>
  </Layout>
)

export default NotFoundPage 