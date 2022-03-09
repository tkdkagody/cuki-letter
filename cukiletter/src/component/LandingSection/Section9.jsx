import React from "react";
import styled from "styled-components";

const Section9 = () => {
    
    return(
        <Container>
            <Text3>서비스가 궁금하다면 <br></br>배타서비스를 예약하세요</Text3>
            <a href="http://google.com"><Btn>지금 예약하기</Btn></a>
        </Container>
    )
}

export default Section9; 

const Container = styled.div`
    width: 85%;
    padding: 2rem 0;
    background-color: #fcfbf6;  //섹션백그라운드
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Text3 = styled.div`
    margin: 0.5rem 0;
    padding: 0.2rem 0.5rem;
    font-size: 1.8rem;
   
    text-align: center;
    line-height: 2;
    @media ${(props)=> props.theme.tabletL} {
        font-size: 1.7rem;
     
    }
    @media ${(props)=> props.theme.tabletM} {
        font-size: 1.7rem;
    }
    @media ${(props)=> props.theme.tabletS} {
        font-size: 1.7rem;
    }
    @media ${(props)=> props.theme.mobileL} {
        font-size: 1.5rem;
    }
    @media ${(props)=> props.theme.mobileM} {
        font-size: 1.3rem;
    }
`;


const Btn = styled.button`
    display: inline-block;
    margin: 5rem 0;
    padding: 0.2rem 0.5rem;
    border: none;
    background-color: #FFC433;
    width: 15rem;
    height: 5rem;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    font-weight: bold;
    font-family: 'BlackBase';
    cursor: pointer;
    animation: motion 0.8s linear 0s infinite alternate;
    transition: 0.5s;
`;