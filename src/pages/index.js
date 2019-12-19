import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero"> 
      <div className="HeroGroup"> 
        <h1>Aprende a disenar y codificar apps con React</h1>
        <p>Curso completo acerca de las herramientas y sistemas de diseno. Prototipado y construccion de apps con React and Swift.</p>
        <Link to="/page-2/">Ver video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
