import {createGlobalStyle, styled} from "styled-components"
import {Routes, Route} from "react-router-dom"
import Header from "./Componenst/Header/Header"
import Inicio from "./Componenst/Inicio/Inicio"
import Sobre from "./Componenst/Sobre/Sobre"
import Projetos from "./Componenst/Projetos/Projetos"
import Habilidades from "./Componenst/Habilidades/Habilidades"


function App() {
  const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `
  const Body = styled.body`
  background-image: linear-gradient(to top left,#ba4443,#222933);
  `

  return (
    <Body>
    <EstiloGlobal />
    <Header />
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Projetos" element={<Projetos />} />
      <Route path="/Habilidades" element={<Habilidades />}/>
    </Routes>


    </Body>
  )
}

export default App
