import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';


const IndexPage = () => (
  <div>
    <div className="Hero"> 
      <div className="HeroGroup"> 
        <h1>Aprende a diseñar<br /> y codificar apps con React</h1>
        <p>Curso completo acerca de las herramientas y sistemas de diseno. Prototipado y construccion de apps con React and Swift.</p>
        <Link to="/page-2/">Ver video</Link>
        <div className="Logos"> 
          <img src={'../images/logo-sketch.png'} width="50"/>
          <img src={'../images/logo-figma.png'} width="50"/>
          <img src={'../images/logo-studio.png'} width="50"/>
          <img src={'../images/logo-framer.png'} width="50"/>
          <img src={'../images/logo-react.png'} width="50"/>
          <img src={'../images/logo-swift.png'} width="50"/>
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 Cursos mas proximamente</h2>
      <div className="CardGroup">
        <Card
          title="React para Diseñadores"
          text="12 secciones" 
          image={'../images/wallpaper.jpg'}/>
        <Card
          title="Sistemas de Diseñado"
          text="10 secciones" 
          image={'../images/wallpaper2.jpg'}/>
        <Card
          title="Diseño de sonido"
          text="5 secciones" 
          image={'../images/wallpaper3.jpg'}/>
        <Card
          title="React Native para Diseñaddores"
          text="10 secciones" 
          image={'../images/wallpaper4.jpg'}

        />
      </div>
    </div>
    <Section
      image={'../images/wallpaper2.jpg'}
      logo={'../images/logo-react.png'}
      title="React para Diseñadores"
      text="Aprende como construir un moderno sitio 
      web usando React y la mas eficientes librerias
      para obtener tu sitio online y en produccion.
      Familiarizate con componentes. Grid CSS,
      animaciones, interacciones, datos dinamicos 
      con contenido y desarrolla tu sitio con Netlifi."
    />     
  </div>
)

export default IndexPage

