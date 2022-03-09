import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Section3 = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
      }, [])

    const titleImgUrl = "https://images.velog.io/images/beablessing/post/f91e01e6-68b3-40b6-90d7-fbf3b41b7cc1/(iPad)%EA%B5%90%EC%82%AC_%EA%B3%BC%EC%A0%9C%EA%B4%80%EB%A6%AC.png" ;
    
    return(
        <Container>
            {width <1025 ? null :             
            <ImageBox>
                <Img title="cukiletter_title" alt="cukiletter_title" src={titleImgUrl}></Img>
            </ImageBox> }
            <TextBox>
                <Text1>손쉬운 수업관리</Text1>
                <Text2>일정관리, 수업등록, 교안올리기, 과제올리기<br></br>교류 학급의 공동 게시판에서 한 번에 관리합니다.</Text2>
            </TextBox>
            {width <1025 ? <ImageBox>
                <Img title="cukiletter_title" alt="cukiletter_title" src={titleImgUrl}></Img>
            </ImageBox> :             
            null }
        </Container>
    )
}

export default Section3; 

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
    font-size: 1.8rem;
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
    font-family: 'BlackBase';
    text-align: center;
    line-height: 1.5;
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



