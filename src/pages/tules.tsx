import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layouts/intro.tsx"
import SEO from "../components/seo"

const TulesPage = () => {
 
  const data = useStaticQuery(graphql`
    {
      allDataJson {
        edges {
          node {
            tules {
              name
              image
              rank
              slug
            }
          }
        }
      }
    }
  `)

  
  return (
    <>
      <Layout>
        <SEO title="Tules Taekwondo ITF Mallorca" />
        <h1>Listado de Tules</h1>
        
        <div className="tuls">
          <ul>
          {data.allDataJson.edges[0].node.tules.map(( tul , index) => (
              <li key={index}>
                {tul.name} - {tul.rank}
              </li>
            ))}
          </ul>
        </div>

      </Layout>
    </>
  )
}

export default TulesPage
