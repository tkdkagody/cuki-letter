import React from "react";
import styled from "styled-components";

const Section9 = () => {
    const btnImgUrl = "https://images.velog.io/images/beablessing/post/eab1adcf-e5b2-41dc-9e05-6a4f59ef2a1e/%EB%B2%84%ED%8A%BC_%EC%A7%80%EA%B8%88%20%EC%98%88%EC%95%BD%ED%95%98%EA%B8%B0.png";
    const clickReservation = () => {
        window.location.href="http://google.com"
    }

    return(
        <Container>
            <Text3>서비스가 궁금하다면 <br></br>배타서비스를 예약하세요</Text3>
            <BtnImageBox>
                <BtnImg onClick={clickReservation} src={btnImgUrl}></BtnImg>
            </BtnImageBox>
        </Container>
    )
}

export default Section9; 

const Container = styled.div`
    width: 85%;
    padding: 2rem 0;
    background-color: white;  //섹션백그라운드
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Text3 = styled.div`
    margin: 0.5rem 0;
    padding: 0.2rem 0.5rem;
    font-size: 1.8rem;
    color: #707070;
    font-weight: bold; 
    text-align: center;
    line-height: 2;
    font-family: '"맑은 고딕", "Malgun Gothic", "Noto Sans", sans-serif;';
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

const BtnImageBox = styled.div`
    margin: 1.5rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${(props)=> props.theme.mobileM} {
       
    }
`;
const BtnImg = styled.img`
    margin: 5rem 0;
    padding: 0.2rem 0.5rem;
    border: none;
    width: 15rem;
    font-weight: bold;
    font-family: '"맑은 고딕", "Malgun Gothic", "Noto Sans", sans-serif;';
    border-radius: 0.5rem;
    font-size: 1.4rem;
    cursor: pointer;


`;