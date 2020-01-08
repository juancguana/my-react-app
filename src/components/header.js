import React from 'react'
import Link from 'gatsby-link'
import '../components/Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup"> 
    <Link to="/"><img src={'../images/logo-designcode.svg'} width="30" /></Link>
    <Link to="/courses">Cursos</Link>
    <Link to="/downloads">Descargas</Link>
    <Link to="/workshops">Talleres</Link>
    <Link to="/buy"><button>Comprar</button></Link>
    </div>
  </div>

)

export default Header
