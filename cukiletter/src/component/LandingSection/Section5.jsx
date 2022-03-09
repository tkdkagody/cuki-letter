import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Section5 = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
      }, [])
    const titleImgUrl = "https://images.velog.io/images/beablessing/post/c569fc9c-3476-48e9-bf64-8ee4ce4a108d/(iPad)%ED%95%99%EC%83%9D_%ED%8E%9C%ED%8C%94%EC%84%9C%EB%B9%84%EC%8A%A4.png" ;
    
    return(
        <Container>
            {width <1025 ? null :             
            <ImageBox>
                <Img title="cukiletter_title" alt="cukiletter_title" src={titleImgUrl}></Img>
            </ImageBox> }
            <TextBox>
                <Text1>영상ㆍ그림ㆍ글 펜팔 서비스</Text1>
                <Text2>학교ㆍ기관 단위의 교류 이후에도 관심있는<br></br>해외 친구와 펜팔서비스를 이용할 수 있습니다.</Text2>
                <Text2>단순한 글편지부터 그림편지, 영상편지까지<br></br>아이들의 수준에 맞게 펜팔이 가능합니다.</Text2>
            </TextBox>
            {width <1025 ? <ImageBox>
                <Img title="cukiletter_title" alt="cukiletter_title" src={titleImgUrl}></Img>
            </ImageBox> :             
            null }
        </Container>
    )
}

export default Section5; 

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


