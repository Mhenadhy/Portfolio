import styled from "styled-components"
import Outubro from "../../assets/outubro.png"
import Fantastika from "../../assets/fantastika.png"
import Disney from "../../assets/disney.png"
import Inverno from "../../assets/inverno.png"
import Batman from "../../assets/batman.png"
import Lapizza from "../../assets/Lapizza.png"
import Lampada from "../../assets/lampada.png"
import Jojo from "../../assets/jojo.png"
export default function Projetos(){
    const MainStyle = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 250vh;
    @media (max-width:500px){
        height: 325vh;
    }
    `
    const SessaoFigures = styled.section`
    display: flex;
    justify-content: space-around;
    height: 60vh;
    width: 100%;
    @media (max-width:500px){
        height: 80vh;
        flex-direction: column;
        align-items: center;
    }
    & figure:hover{
        transform: scale(1.1);
    }
    figure{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 1em;
        height: 55vh;
        width: 40vw;
        background-color: transparent;
        box-shadow: 0 0 2em;
        border: solid white;
        @media (max-width:500px){
            height: 35vh;
            width: 90vw;
            border: solid white;
        }
    }
    img{
        width: 38vw;
        border-radius: 1rem;
        @media (max-width:500px){
            width: 83vw;
            height: 20vh;
            border-radius: 1rem;
        
        }
    }
    `
    const CaixaFigcap = styled.figcaption`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    width: 35vw;
    height: 6vh;
    @media (max-width:500px){
        width: 100%;
        height: 10vh;
    }
  
    `
    const Preact = styled.p`
    background-color: #62DAFA;
    text-align: center;
    border-radius: 1em;
    width: 8vw;
    height: 3vh;
    font-size: 1.2em;
    @media (max-width:500px){
        width: 20vw;
        font-size: 1.4rem;
    }
    `
    const Pstyled = styled.p`
    background-color: #DE7496;
    text-align: center;
    border-radius: 1rem;
    width: 15vw;
    height: 3vh;
    font-size: 1.2em;
    @media (max-width:500px){
        width: 48vw;
        font-size: 1.4rem;
        
    }
    `
    const Phtml = styled.p`
    background-color: #E55233;
    text-align: center;
    border-radius: 1em;
    width: 7vw;
    height: 3vh;font-size: 1.2em;
    @media (max-width:500px){
        width: 25vw;
        font-size: 1.4rem;
        
    }
    `
    const Pcss = styled.p`
    background-color: #55B1E8;
    text-align: center;
    border-radius: 1em;
    width: 7vw;
    height: 3vh;
    font-size: 1.2em;
    @media (max-width:500px){
        width: 25vw;
        font-size: 1.4rem;
        
    }
    `
    return(
        <MainStyle>
            <SessaoFigures>
                <figure>
                    <a href="https://outubro-rosa-six.vercel.app/" target="_blank"><img src={Outubro} alt="" />
                    </a>
                    <CaixaFigcap>
                        <Preact>React</Preact>
                        <Pstyled>Styled-Components</Pstyled>
                    </CaixaFigcap>
                </figure>

                <figure>
                    <a href="https://projeto-fantastika.vercel.app/" target="_blank"><img src={Fantastika} alt="" />
                    </a>
                    <CaixaFigcap>
                        <Phtml>HTML</Phtml>
                        <Pcss>CSS</Pcss>
                    </CaixaFigcap>
                </figure>
            </SessaoFigures>


            <SessaoFigures>
            <figure>
                    <a href="https://ynr7hl.csb.app/" target="_blank"><img src={Disney} alt="" />
                    </a>
                    <CaixaFigcap>
                        <Phtml>HTML</Phtml>
                        <Pcss>CSS</Pcss>
                    </CaixaFigcap>
                </figure>

                <figure>
                    <a href="https://kgl63z.csb.app/" target="_blank"><img src={Inverno} alt="" />
                    </a>
                    <CaixaFigcap>
                        <Phtml>HTML</Phtml>
                        <Pcss>CSS</Pcss>
                    </CaixaFigcap>
                </figure>
            </SessaoFigures>

            <SessaoFigures>
            <figure>
                    <a href="https://batmann-seven.vercel.app/" target="_blank"><img src={Batman} alt="" />
                    </a>
                    <CaixaFigcap>
                        <Phtml>HTML</Phtml>
                        <Pcss>CSS</Pcss>
                    </CaixaFigcap>
                </figure>

                <figure>
                    <a href="" target="_blank"><img src={Lapizza} alt="" />
                    </a>
                    <CaixaFigcap>
                       <Preact>React</Preact>
                       <Pstyled>Styled-components</Pstyled>
                    </CaixaFigcap>
                </figure>
            </SessaoFigures>

            <SessaoFigures>
            <figure>
                    <a href="" target="_blank"><img src={Lampada} alt="" />
                    </a>
                    <CaixaFigcap>
                        <Phtml>HTML</Phtml>
                        <Pcss>CSS</Pcss>
                    </CaixaFigcap>
                </figure>

                <figure>
                    <a href="" target="_blank"><img src={Jojo} alt="" />
                    </a>
                    <CaixaFigcap>
                       <Preact>React</Preact>
                       <Pstyled>Styled-components</Pstyled>
                    </CaixaFigcap>
                </figure>
            </SessaoFigures>

            
        </MainStyle>
    )
}