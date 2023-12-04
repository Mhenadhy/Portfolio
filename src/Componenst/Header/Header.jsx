import styled from "styled-components"
import {Link} from "react-router-dom"
export default function Header(){

    const HeaderStyle = styled.header`
    display:flex;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    height: 20vh;
    width: 100%;
    @media (max-width: 500px) {
        height: 10vh;
    }
    `
    const NavBar = styled.nav`
    ul{
    display:flex;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    width: 70vw;
    @media (max-width:500px){
        width: 75vw;
    }
    }
    li{
        list-style: none;
        color: #ffffff;
        font-size: 2.5rem;
        @media (max-width: 500px) {
            font-size: 1.3rem;
    }
    }
    & li:hover{
        transform: scale(1.5);
        transition: all 0.3s;
}
    `
    const Links = styled(Link)`
    text-decoration: none;
    `
   return(
    <HeaderStyle>
        <NavBar>
            <ul>
                <Links to="/"><li>Inicio</li></Links>
                <Links to="/Sobre"><li>Sobre</li></Links>
                <Links to="/Projetos"><li>Projetos</li></Links>
                <Links to="/Habilidades"><li>Habilidades</li></Links>
            </ul>
        </NavBar>
    </HeaderStyle>
   )
}