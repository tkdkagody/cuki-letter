import React from "react";
import styled from "styled-components";

const Section4 = () => {

    const titleImgUrl = "https://images.velog.io/images/beablessing/post/f91e01e6-68b3-40b6-90d7-fbf3b41b7cc1/(iPad)%EA%B5%90%EC%82%AC_%EA%B3%BC%EC%A0%9C%EA%B4%80%EB%A6%AC.png" ;
    
    return(
        <Container>
            <TextBox>
                <Text1>학생 미션 교류</Text1>
                <Text2>학생들이 자연스럽게 문화를 교류할 수 있게<br></br>콘텐츠 제작 미션이 주어집니다.</Text2>
                <Text2>교류학생으로 인증받은 학생들이<br></br>평생 이용가능한 장기서비스입니다.</Text2>
            </TextBox>
            <ImageBox>
                <Img title="cukiletter_title" alt="cukiletter_title" src={titleImgUrl}></Img>
            </ImageBox>
        </Container>
    )
}

export default Section4; 

const Container = styled.div`
    width: 85%;
    height: 80vh;
    padding: 2rem 0.2rem;
    background-color: #fcfbf6;  //섹션백그라운드
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media ${(props)=> props.theme.tabletS} {
        flex-direction: column;
        height: 60rem;
    }
    @media ${(props)=> props.theme.mobileL} {
        height: 55rem;
    }
    @media ${(props)=> props.theme.mobileM} {
        height: 45rem;
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
    margin: 0.5rem 0;
    padding: 0.2rem 0.5rem;
    font-size: 2rem;
    font-weight: bold; 
    font-family: 'BlackBase';
    text-align: center;
    line-height: 2;
    @media ${(props)=> props.theme.tabletL} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.tabletM} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.tabletS} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.mobileL} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.mobileM} {
        font-size: 2rem;
    }
`;

const Text2 = styled.div`
    margin: 1rem 0;
    padding: 0.2rem 0.5rem;
    font-size: 1.5rem;
    font-family: 'BlackBase';
    text-align: center;
    line-height: 1.8;
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
        font-size: 1.2rem;
    }
    @media ${(props)=> props.theme.mobileM} {
        font-size: 1rem;
    }
`; 

