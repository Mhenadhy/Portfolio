import styled from "styled-components"
export default function Inicio() {
    const Mainstyle = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100%;
    @media (max-width: 500px) {
        height: 120vh;
    }
    `
    return (
        <Mainstyle>
        
        </Mainstyle>
    )
}