import React from "react";
import styled from "styled-components";

const Section2 = () => {

    const titleImgUrl = "https://images.velog.io/images/beablessing/post/d311198e-b266-4f1c-af51-5f6396755413/%EA%B5%90%EB%A5%98%EA%B8%B0%EA%B4%80%EB%A7%A4%EC%B9%AD.png" ;
    
    return(
        <Container>
            <ImageBox>
                <Img title="cukiletter_title" alt="cukiletter_title" src={titleImgUrl}></Img>
            </ImageBox>
            <TextBox>
                <Text1>학생 미션 교류</Text1>
                <Text3>자연스럽게 문화를 교류할 수 있도록</Text3>
                <Text3>콘텐츠 제작 미션이 주어집니다.</Text3>
                <Text3>교류학생으로 인증받은 학생들이</Text3>
                <Text3>평생 이용가능한 장기서비스 입니다.</Text3>
            </TextBox>
        </Container>
    )
}

export default Section2; 

const Container = styled.div`
    width: 85%;
    height: 80vh;
    padding: 4rem 0.2rem;
    background-color: #fafaf0;  //섹션백그라운드
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media ${(props)=> props.theme.tabletS} {
        flex-direction: column;
        height: 60rem;
        padding: 5rem;
    }
    @media ${(props)=> props.theme.mobileL} {
        height: 55rem;
        padding: 3rem;
    }
    @media ${(props)=> props.theme.mobileM} {
        height: 45rem;
        padding: 3rem;
    }

`;
const TextBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${(props)=> props.theme.tabletS} {
        width: 100%;
        height: 50%;
    }
`;
const ImageBox = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${(props)=> props.theme.tabletS} {
        width: 100%;
        height: 100%;
    }
`;
const Img = styled.img`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    @media ${(props)=> props.theme.tabletM} {
        width: 95%;

        object-fit: contain;
    }
    @media ${(props)=> props.theme.tabletS} {
        width: 95%;
 
    }
`;

const Text1 = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    padding: 0.2rem 0.5rem;
    font-size: 1.8rem;
    font-weight: bold; 
    font-family: 'BlackBase';
    text-align: center;
    line-height: 2;
    color:#2ebb77;

    @media ${(props)=> props.theme.tabletL} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.tabletM} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.tabletS} {
        font-size: 1.5rem;
    }
    @media ${(props)=> props.theme.mobileL} {
        font-size: 1.5rem;
    }
    @media ${(props)=> props.theme.mobileM} {
        font-size: 1.5rem;
    }
`;

const Text2 = styled.div`
    margin: 1rem 0;
    padding: 0.2rem 0.5rem;
    font-size: 1.3rem;
    font-weight: bold; 
    font-family: 'BlackBase';
    text-align: center;
    line-height: 1.5;
    color: #c2c2c2;
    @media ${(props)=> props.theme.tabletL} {
        font-size: 1.3rem;
    }
    @media ${(props)=> props.theme.tabletM} {
        font-size: 1.3rem;
    }
    @media ${(props)=> props.theme.tabletS} {
        font-size: 1.3rem;
    }
    @media ${(props)=> props.theme.mobileL} {
        font-size: 1.3rem;
    }
    @media ${(props)=> props.theme.mobileM} {
        font-size: 0.9rem;
    }
`; 

const Text3 = styled.div`
    padding: 0.2rem 0.5rem;
    font-size: 1.3rem;
    font-weight: bold; 
    font-family: 'BlackBase';
    line-height: 1.5;
    color: #707070;
    @media ${(props)=> props.theme.tabletL} {
        font-size: 1.3rem;
    }
    @media ${(props)=> props.theme.tabletM} {
        font-size: 1.3rem;
    }
    @media ${(props)=> props.theme.tabletS} {
        font-size: 1.3rem;
    }
    @media ${(props)=> props.theme.mobileL} {
        font-size: 1.3rem;
    }
    @media ${(props)=> props.theme.mobileM} {
        font-size: 0.9rem;
    }
`; 