import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 4rem;
    background-color: white;
    position: fixed;
    top: 0;
    z-index: 10;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const ContainerShadow = styled.div`
    width: 100%;
    height: 4rem;
    background-color: white;
    box-shadow: 0 -5px 15px rgb(165, 165, 165);
    position: fixed;
    top: 0;
    z-index: 10;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
`; 

export const TitleBox = styled.div`
    width: 85%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Title = styled.div`
    color: #2EBB77;
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    padding: 0 0.5rem;
`;