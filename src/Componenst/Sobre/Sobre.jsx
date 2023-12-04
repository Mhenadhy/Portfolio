import styled from "styled-components"
import Github from "../../assets/github.svg"
import Linkedin from "../../assets/linkedin.svg"
import Gmail from "../../assets/gmail.svg"
import Mhenadhy from "../../assets/Mhenadhy.png"
export default function Sobre() {

    const MainPrincipal = styled.main`
    width: 100%;
    height: 80vh;
`
    const MainStyle = styled.main`
    display: flex;
    justify-content:center;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 75vh;
    `
    const SessaoSobre = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 60vh;
    width: 60vw;
    color: #ffffff;
    h1{
        font-size: 2em;
    }
    p{
        font-size: 2.3rem;
        width: 50vw;
        line-height: 3rem;
    }
    nav{
        display: flex;
        justify-content: space-around;
        align-items: end;
        width: 40vw;
        height: 20vh;
        & a:hover{
             opacity: .3; transform: scale(1.5)
        }
        img{
            width: 5vw; 
            transition: 0.5s;
            border: solid green;
            border-radius: 1em;
        }
    }
    `
    const RedesS = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width:40vw;
    height: 75vh;
    & figure:hover{
        box-shadow: 1em 1em 3em #000;
        filter: grayscale(0);
        color: #ffffff;
    }
    `
    const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: transparent;
    height: 75vh;
    width: 30vw;
    border-radius: 1em;
    box-shadow: 0 0 2em;
    transition: all 0.5s ease;
    filter: grayscale(1);
    height: 75vh;
    width: 30vw;
    img{
        border-radius: 1rem;
        width: 28vw;
        height: 40vh;
        transition: all 0.5s ease;
    }
    `
    const Figprincipal = styled.figcaption`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 30vh;
    `
    const FigSegunda = styled.figcaption`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    figcaption{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        font-size: 2rem;
        font-style: oblique;
        font-weight: bold;
        @media (max-width: 500px) {
            font-size: 1.5rem;
        }
        p{
            font-size: 1.5rem;
            font-weight: normal;
            @media (max-width: 500px){
                font-size: 1.2rem;
            }
        }
    }
    `
    return (
        <MainPrincipal>

            <MainStyle>
                <SessaoSobre>
                    <h1>Sobre mim</h1>
                    <p>Olá, Meu nome é Mhenadhy, tenho 22 anos de idade, apesar do nome diferenciado,
                        sou brasileiro, nasci e cresci aqui no Rio de Janeiro. Cai nesse mundo de Front-end por cuiriosidade.
                        Adoro aprender coisas novas.</p>
                    <nav>
                        <a href="https://www.linkedin.com/in/mhenadhy-esperan%C3%A7a-b22980273/" target="_blank"><img src={Linkedin} alt="" /></a>
                        <a href="https://github.com/Mhenadhy" target="_blank"> <img src={Github} alt="" /></a>
                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank"> <img src={Gmail} alt="" /></a>
                    </nav>
                </SessaoSobre>

                <RedesS>
                    <Figure>
                        <img src={Mhenadhy} alt="" />
                        <Figprincipal>
                            <FigSegunda>
                            <figcaption>Nome: <p>Mhenadhy</p></figcaption>
                            <figcaption>Genero: <p>Masculino</p></figcaption>
                            </FigSegunda>
                            <FigSegunda>
                            <figcaption>Idade: <p>22 anos</p></figcaption>
                            <figcaption>Dev: <p>Front-End</p></figcaption>
                            </FigSegunda>
                        </Figprincipal>
                    </Figure>
                </RedesS>

            </MainStyle>
        </MainPrincipal>
    )
}