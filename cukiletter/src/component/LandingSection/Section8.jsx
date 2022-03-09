import React from "react";
import styled from "styled-components";

const Section8 = () => {

    const titleImgUrl = "https://images.velog.io/images/beablessing/post/58ee8321-f7da-48b8-8cd1-bbc0ca78bf6b/%EA%B7%80%EC%9D%B4%EB%AF%B8%EC%A7%80@2x.png" ;
    
    return(
        <Container>
            <ImageBox>
                <Img title="cukiletter_title" alt="cukiletter_title" src={titleImgUrl}></Img>
            </ImageBox>
            <TextBox>
                <Text1>쿠키레터는 교육자와 학습자에게 귀 기울입니다.</Text1>
            </TextBox>
            <VideoBox type="video/mp4" controls autoPlay muted>
                {/* <Img src={"../../../전시추가11111.gif"}></Img> */}
                <source src={"../../../videos/intro.mp4"}></source>
            </VideoBox>
        </Container>
    )
}

export default Section8; 

const Container = styled.div`
    width: 85%;
    height: 100vh;
    padding: 2rem 0.2rem;
    background-color: #fafaf0;  //섹션백그라운드
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;
const TextBox = styled.div`
    width: 50%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${(props)=> props.theme.tabletS} {
        width: 100%;
        height: 30%;
    }
`;
const ImageBox = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${(props)=> props.theme.tabletS} {
        width: 20%;
        height: 10%;
    }
`;
const Img = styled.img`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    @media ${(props)=> props.theme.tabletM} {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    @media ${(props)=> props.theme.tabletS} {
        width: 100%;
        height: 100%;
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
        font-size: 2.5rem;
    }
    @media ${(props)=> props.theme.mobileL} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.mobileM} {
        font-size: 1.2rem;
    }
`;




const VideoBox = styled.video`
    margin-bottom:3rem;
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    @media ${(props)=> props.theme.tabletM} {
        width: 80%;
    }
    @media ${(props)=> props.theme.tabletS} {
        width: 95%;

    }
`;