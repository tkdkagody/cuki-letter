import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Section1 = () => {

    const titleImgUrl = "https://images.velog.io/images/beablessing/post/3ab8626f-687c-4fd6-a6b0-9bd79f847220/%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8%20%EC%B2%AB%ED%99%94%EB%A9%B4.png" ;
    const btnImgUrl = "https://images.velog.io/images/beablessing/post/942046d0-d684-4b90-a4e6-f4fc517c4796/%EB%B2%84%ED%8A%BC_%EB%B2%A0%ED%83%80%EC%84%9C%EB%B9%84%EC%8A%A4%20%EC%98%88%EC%95%BD%ED%95%98%EA%B8%B0.png";
    const clickReservation = () => {
        window.location.href="http://google.com"
    }

    return(
        <Container>
            <ImageBox>
                <Img title="cukiletter_title" alt="cukiletter_title" src={titleImgUrl}></Img>
            </ImageBox>
            <TextAIO>All-In-One Service</TextAIO>
            <TextMore>더 이상의 복잡한 절차는</TextMore>
            <TextWeDo>저희가 해드릴게요</TextWeDo>
            <BtnImageBox>
                <BtnImg onClick={clickReservation} src={btnImgUrl}></BtnImg>
            </BtnImageBox>
            <VideoBox type="video/mp4" controls autoPlay muted>
                <source src={"../../../videos/intro.mp4"}></source>
            </VideoBox>
            <TextWorld>우리 학생들에게 보여주고 싶은 많은세상</TextWorld>
            <TextBut>하지만</TextBut>
            <TextComplex>
                <Text6QueBox>
                    <Text6>너무나<text style={{color:"#ea4568"}}> 복잡한 절차</text>에</Text6>
                    <Text6>막막하지는 않으셨나요</Text6>
                </Text6QueBox>
                <TextQue>
                    <i class="fa-solid fa-question"></i>
                </TextQue>
            </TextComplex>

            <TextComplex>
                <Text6Box>
                    <Text6><text style={{color:"#2ebb77"}}>쿠키레터</text>는 글로벌 교류의</Text6>
                    <Text6><text style={{color:"#2ebb77"}}>A to Z까지 지원하는 플랫폼</text>입니다.</Text6>
                </Text6Box>
            </TextComplex>

            <TextComplex>
                <Text6Box>
                    <Text6><text style={{color:"#ea4568",}}>선생님은 교육에만 집중하세요</text></Text6>
                    <Text6><text style={{fontSize:"1.2rem"}}>머리 아픈 행정처리는 저희가 해드릴게요</text></Text6>
                </Text6Box>
            </TextComplex>
            
            
        </Container>
    )
}

export default Section1; 



const Container = styled.div`

    width: 85%;
    padding: 2.5rem 0;
    background-color: #fcfbf6;  //섹션백그라운드
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ImageBox = styled.div`
    margin: 1.5rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Img = styled.img`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;

`;



const TextAIO = styled.div`
    color: #2EBB77;
    margin: 0.3rem 0;
    padding: 0.2rem 0.5rem;
    font-size: 2rem;
    font-weight: bold; 
    font-family: 'BlackBold';
    text-align: center;
    line-height: 2;
    @media ${(props)=> props.theme.tabletL} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.tabletM} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.tabletS} {
        font-size:  2rem;
    }
    @media ${(props)=> props.theme.mobileL} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.mobileM} {
        font-size: 2rem;
    }
`;
const TextMore = styled.div`
    margin-top: 1.5rem;
    padding: 0.2rem 0.5rem;
    font-size: 1.6rem;
    font-family: 'BlackBase';
    text-align: center;
    color: #707070;
    font-weight: bold;
   
    @media ${(props)=> props.theme.tabletL} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.tabletM} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.tabletS} {
        font-size: 2.1rem;
    }
    @media ${(props)=> props.theme.mobileL} {
        font-size: 1.8rem;
    }
    @media ${(props)=> props.theme.mobileM} {
        font-size: 1.8rem;
    }
`;

const TextWeDo = styled.div`
    margin-bottom: 1.5rem;
    padding: 0.2rem 0.5rem;
    font-size: 2.1rem;
    font-family: 'BlackBase';
    text-align: center;
    color: #333333;
    font-weight: bold;

    @media ${(props)=> props.theme.tabletL} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.tabletM} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.tabletS} {
        font-size: 2.1rem;
    }
    @media ${(props)=> props.theme.mobileL} {
        font-size: 1.8rem;
    }
    @media ${(props)=> props.theme.mobileM} {
        font-size: 1.8rem;
    }
`;

const BtnImageBox = styled.div`
    margin: 1.5rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const BtnImg = styled.img`
    margin: 5rem 0;
    padding: 0.2rem 0.5rem;
    border: none;
    width: 15rem;
    font-weight: bold;
    font-family: 'BlackBase';
    border-radius: 0.5rem;
    font-size: 1.4rem;
    cursor: pointer;

`;


const VideoBox = styled.video`
    margin-bottom:3rem;
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    @media ${(props)=> props.theme.tabletM} {
        width: 60%;
    }
    @media ${(props)=> props.theme.tabletS} {
        width: 80%;

    }
`;
const TextWorld = styled.div`
    width: 40%;
    margin: 2rem 0;
    padding: 0.2rem 0.5rem;
    font-size: 1.6rem;
    font-family: 'BlackBase';
    
    line-height: 1.8;
    color: #333333;
    font-weight: bold; 

    @media ${(props)=> props.theme.laptop} {
        width: 40%;
        font-size: 1.6rem;
     
    }
    @media ${(props)=> props.theme.tabletL} {
        width: 42%;
        font-size: 1.6rem;
     
    }
    @media ${(props)=> props.theme.tabletM} {
        width: 50%;
        font-size: 1.6rem;
      
    }
    @media ${(props)=> props.theme.tabletS} {
        width: 50%;
        font-size: 1.6rem;
     
    }
    @media ${(props)=> props.theme.mobileL} {
        width: 70%;
        font-size: 1.6rem;

    }
    @media ${(props)=> props.theme.mobileM} {
        width: 80%;
        font-size: 1.6rem;
    }
`; 

const TextBut = styled.div`
    width: 40%;
    margin: 0.5rem 0;
    padding: 0.5rem 0.5rem;
    font-size: 5em;
    color: #c2c2c2;
    font-weight: bold;
    font-family: 'BlackBold';
    text-align: left;
    @media ${(props)=> props.theme.laptop} {
        width: 40%;
        font-size: 3rem;
     
    }
    @media ${(props)=> props.theme.tabletL} {
        width: 42%;
        font-size: 3rem;
     
    }
    @media ${(props)=> props.theme.tabletM} {
        width: 50%;
        font-size: 3rem;
      
    }
    @media ${(props)=> props.theme.tabletS} {
        width: 50%;
        font-size: 3rem;
     
    }
    @media ${(props)=> props.theme.mobileL} {
        width: 70%;
        font-size: 3rem;

    }
    @media ${(props)=> props.theme.mobileM} {
        width: 80%;
        font-size: 3rem;
    }
`;

const TextComplex = styled.div`
 width: 40%;
 display: flex;
 flex-direction: row;
 margin: 3rem 0;
 @media ${(props)=> props.theme.laptop} {
        width: 40%;
        font-size: 3rem;
     
    }
    @media ${(props)=> props.theme.tabletL} {
        width: 42%;
        font-size: 3rem;
     
    }
    @media ${(props)=> props.theme.tabletM} {
        width: 50%;
        font-size: 3rem;
      
    }
    @media ${(props)=> props.theme.tabletS} {
        width: 50%;
        font-size: 3rem;
     
    }
    @media ${(props)=> props.theme.mobileL} {
        width: 70%;
        font-size: 3rem;

    }
    @media ${(props)=> props.theme.mobileM} {
        width: 80%;
        font-size: 3rem;
    }
`;

const Text6QueBox = styled.div`
    width: 44%;
    display: flex;
    flex-direction: column;
    @media ${(props)=> props.theme.laptop} {
        width: 52%;
    }
    @media ${(props)=> props.theme.tabletL} {
        width: 55%;

    }
    @media ${(props)=> props.theme.tabletM} {
        width: 55%;

    }
    @media ${(props)=> props.theme.tabletS} {
        width: 55%;

    }
    @media ${(props)=> props.theme.mobileL} {
        width: 45%;
    
    }
    @media ${(props)=> props.theme.mobileM} {
        width: 58%;

    }


`;

const Text6Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center; 
`;

const Text6 = styled.div`
    padding: 0.2rem 0.1rem;
    font-size: 1.4rem;
    font-family: 'BlackBase';
    font-weight: bold;
    color: #707070;
   
    @media ${(props)=> props.theme.tabletL} {
        font-size: 1.4rem;
    }
    @media ${(props)=> props.theme.tabletM} {
        font-size: 1.4rem;
    }
    @media ${(props)=> props.theme.tabletS} {
        font-size: 1.4rem;
    }
    @media ${(props)=> props.theme.mobileL} {
        font-size: 1.3rem;
    }
    @media ${(props)=> props.theme.mobileM} {
        font-size: 1.2rem;
    }
`; 

const TextQue = styled.div`
    color: #707070;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// const Btn = styled.button`
//     margin-top: 3rem;
//     margin-bottom: 5rem;
//     padding: 0.2rem 0.5rem;
//     border: none;
//     background-color: #FFC433;
//     width: 15rem;
//     height: 5rem;
//     font-weight: bold;
//     font-family: 'BlackBase';
//     border-radius: 0.5rem;
//     font-size: 1.4rem;
//     cursor: pointer;
// `;