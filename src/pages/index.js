import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components';

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.p`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px;
  }  
`

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
   
    <SectionCaption>12 secciones - 6 horas</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
        title={cell.title}
        image={cell.image} />
      ))} 
    </SectionCellGroup> 
  </div>
)

export default IndexPage

