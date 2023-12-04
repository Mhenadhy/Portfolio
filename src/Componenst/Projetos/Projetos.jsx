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
    `
    const SessaoFigures = styled.section`
    display: flex;
    justify-content: space-around;
    height: 60vh;
    width: 100%;
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
    }
    img{
        width: 38vw;
    }
    `
    const CaixaFigcap = styled.figcaption`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    width: 35vw;
    height: 6vh;
    `
    const Preact = styled.p`
    background-color: #62DAFA;
    text-align: center;
    border-radius: 1em;
    width: 8vw;
    height: 3vh;
    font-size: 1.2em;
    `
    const Pstyled = styled.p`
    background-color: #DE7496;
    text-align: center;
    border-radius: 1rem;
    width: 15vw;
    height: 3vh;
    font-size: 1.2em;
    `
    const Phtml = styled.p`
    background-color: #E55233;
    text-align: center;
    border-radius: 1em;
    width: 7vw;
    height: 3vh;font-size: 1.2em;
    `
    const Pcss = styled.p`
    background-color: #55B1E8;
    text-align: center;
    border-radius: 1em;
    width: 7vw;
    height: 3vh;
    font-size: 1.2em;
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