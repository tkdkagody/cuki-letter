import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Section7 = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
      }, [])
    const titleImgUrl = "https://images.velog.io/images/beablessing/post/819c4055-024a-425f-b18e-dad3941224eb/Screenshot%20from%202022-03-08%2018-12-49.png" ;
    
    return(
        <Container>
            {width <1025 ? null :             
            <ImageBox>
                <Img title="cukiletter_title" alt="cukiletter_title" src={titleImgUrl}></Img>
            </ImageBox> }
            <TextBox>
                <Text1>교육과 기술을 잇다</Text1>
                <Text2>더 나은 미래를 보여주고 싶습니다.<br></br>더 나은 기술력으로 서비스를 제공합니다. <br></br>우리 아이들의 미래를 밝혀주세요.</Text2>
            </TextBox>
            {width <1025 ? <ImageBox>
                <Img title="cukiletter_title" alt="cukiletter_title" src={titleImgUrl}></Img>
            </ImageBox> :             
            null }
        </Container>
    )
}

export default Section7; 

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
        font-size: 2.5rem;
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

