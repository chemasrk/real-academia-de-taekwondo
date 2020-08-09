import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts/tkd"
import SEO from "../components/seo"
import "../components/layouts/tkd.css"

const Creator = () => (
  <>
    <Layout>
      <SEO title="Creator of this site" />    
      <div className="one_half first">
        <h6 className="heading">Mus sodales nulla integer</h6>
        <p className="heading font-x3">Auctor diam sed non sapien in risus rhoncus egestas mauris rhoncus mi at odio in luctus turpis quis dignissim.</p>
      </div>
      <div className="one_half">
        <ul className="nospace group">
          <li className="one_half first btmspace-30">
            <h6 className="heading">Interdum</h6>
            <p>Placerat mi ipsum ornare dui id varius tortor est et urna vivamus commodo justo quis erat etiam lacus leo interdum non volutpat.</p>
          </li>
          <li className="one_half btmspace-30">
            <h6 className="heading">Ullamcorper</h6>
            <p>In sagittis vel erat donec congue pede eu lacus aliquam sodales felis nec libero mollis porttitor nulla adipiscing orci ac quam.</p>
          </li>
          <li className="one_half first">
            <h6 className="heading">Accumsan</h6>
            <p>Suspendisse elit praesent hendrerit lacus a condimentum scelerisque augue mi ultrices nunc vitae posuere orci dui quisque.</p>
          </li>
          <li className="one_half">
            <h6 className="heading">Maecenas</h6>
            <p>Tincidunt lectus vel enim aenean erat orci mollis quis gravida sed mollis a quam morbi libero sed ut erat aliquam erat volutpat.</p>
          </li>
        </ul>
      </div>
    </Layout>
  </>
)

export default Creator
