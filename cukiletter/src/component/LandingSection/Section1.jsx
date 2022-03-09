import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Section1 = () => {

    const titleImgUrl = "https://images.velog.io/images/beablessing/post/9e204931-bb2e-42e7-9f62-422fce7ee1b4/%EC%84%A4%EB%AC%B8%EC%A7%80%ED%85%8C%EB%A7%88(en).png" ;
    
    return(
        <Container>
            <ImageBox>
                <Img title="cukiletter_title" alt="cukiletter_title" src={titleImgUrl}></Img>
            </ImageBox>
            <Text2>해외 문화 교류</Text2>
            <Text3>all-in-one service</Text3>
            <Text4>더 이상의 복잡한 절차는 <br></br>저희가 해드릴게요</Text4>
            <a href="http://google.com"><Btn>배타서비스 예약하기</Btn></a>  {/*설문링크로 이동*/}
            <VideoBox type="video/mp4" controls autoPlay muted>
                {/* <Img src={"../../../전시추가11111.gif"}></Img> */}
                <source src={"../../../videos/intro.mp4"}></source>
            </VideoBox>
            <Text5>우리 학생들에게 보여주고 싶은 많은세상 <br></br>하지만 너무 복잡한 절차에 시작이 막막하지는 않으셨나요?</Text5>
            <Text5>쿠키레터는 글로벌 교류의<br></br>A부터 Z까지 지원하는 플랫폼입니다.</Text5>
            <Text5>선생님은 교육에만 집중하세요 <br></br>머리아픈 행정처리는 저희가 해드릴게요</Text5>
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
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    @media ${(props)=> props.theme.tabletM} {
        width: 80%;
    }
    @media ${(props)=> props.theme.tabletS} {
        width: 80%;

    }
`;

const Text2 = styled.div`
    margin: 0.5rem 0;
    padding: 0.5rem 0.5rem;
    font-size: 3.2rem;
    font-family: 'BlackBold';
    @media ${(props)=> props.theme.tabletL} {
        font-size: 3.5rem;
     
    }
    @media ${(props)=> props.theme.tabletM} {
        font-size: 3.5rem;
    }
    @media ${(props)=> props.theme.tabletS} {
        font-size: 3rem;
    }
    @media ${(props)=> props.theme.mobileL} {
        font-size: 3.5rem;
    }
    @media ${(props)=> props.theme.mobileM} {
        font-size: 3rem;
    }
`;
const Text3 = styled.div`
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
        font-size: 2.2rem;
    }
    @media ${(props)=> props.theme.mobileL} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.mobileM} {
        font-size: 2rem;
    }
`;
const Text4 = styled.div`
    margin: 1.5rem 0;
    padding: 0.2rem 0.5rem;
    font-size: 1.6rem;
    font-family: 'BlackBase';
    text-align: center;
    line-height: 1.5;
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
const Text5 = styled.div`
    margin: 2rem 0;
    padding: 0.2rem 0.5rem;
    font-size: 1.4rem;
    font-family: 'BlackBase';
    text-align: center;
    line-height: 1.8;
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
        font-size: 1rem;
    }
`; 

const Btn = styled.button`
    margin-top: 3rem;
    margin-bottom: 5rem;
    padding: 0.2rem 0.5rem;
    border: none;
    background-color: #FFC433;
    width: 15rem;
    height: 5rem;
    font-weight: bold;
    font-family: 'BlackBase';
    border-radius: 0.5rem;
    font-size: 1.4rem;
    cursor: pointer;
`;