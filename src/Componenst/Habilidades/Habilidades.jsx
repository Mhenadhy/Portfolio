import styled from "styled-components"
import CSS from "../../assets/css.svg"
import HTML from "../../assets/html.svg"
import JavaScript from "../../assets/javaScript.svg"
import ReactIcon from "../../assets/react.svg"
import Sass from "../../assets/sass.svg"
import StyledC from "../../assets/styled.png"
import { useState } from "react"
export default function Habilidades() {

    const Habilidades = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80vh;
    width: 100%;
    font-size: 2rem;
    color: #ffffff;
    text-align: center;
    @media (max-width: 500px){
        flex-direction: column;
        font-size: 2rem;
        height: 90vh;
        justify-content: space-evenly;
    }
   `
   const SessaoF = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   height: 50vh;
   @media (max-width: 500px){
    height: 45vh;
    width: 100%;
    
   }
   `
    const IconFigure = styled.figure`
   display: flex;
   justify-content: center;
   justify-content: space-evenly;
   width: 40vw;
   height: 15vh;
   @media (max-width:500px){
    width: 100%;
   }
   img{
       width: 8vw;
       height: 12vh; 
       filter: grayscale(1);
       @media (max-width:500px){
        width: 25vw;
       }
   }
   & img:hover{
       transform: scale(1.3);
       filter: grayscale(0);
   }
   `


    const [imgs, setImags] = useState([HTML, CSS, JavaScript])
    const [imgs2, setImgs2] = useState([ReactIcon, StyledC, Sass])

    return (
        <Habilidades>
            <h1>Habilidades</h1>
            <SessaoF>
            <IconFigure>
                {imgs.map((item)=>(
                    <img src={item} alt="" />
                ))}
            </IconFigure>
            <IconFigure>
                {imgs2.map((item)=>(
                    <img src={item} alt="" />
                ))}
            </IconFigure>
            </SessaoF>
        </Habilidades>
    )
}