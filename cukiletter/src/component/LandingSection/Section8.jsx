import React from "react";
import styled from "styled-components";

const Section8 = () => {

    const titleImgUrl = "https://images.velog.io/images/beablessing/post/58ee8321-f7da-48b8-8cd1-bbc0ca78bf6b/%EA%B7%80%EC%9D%B4%EB%AF%B8%EC%A7%80@2x.png" ;
    return(
        <Container>
            <Titlebox>
                <ImageBox>
                    <Img title="cukiletter_title" alt="cukiletter_title" src={titleImgUrl}></Img>
                </ImageBox>
                <TextBox>
                    <Text1><text style={{color:"#2ebb77"}}>쿠키레터</text>는 </Text1>
                    <Text1>교육자와 학습자에게 귀 기울입니다.</Text1>
                </TextBox>
            </Titlebox>
            <InterviewBox>인터뷰 이미지</InterviewBox>
        </Container>
    );

}

export default Section8; 

const Container = styled.div`
    width: 85%;
    height: 100vh;
    padding: 2rem 0.2rem;
    background-color: white;  //섹션백그라운드
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Titlebox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;

`;

const ImageBox = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${(props)=> props.theme.tabletL} {
        width: 30%;
    }
    @media ${(props)=> props.theme.tabletM} {
        width: 30%;
    }
    @media ${(props)=> props.theme.tabletS} {
        width: 30%;
    }
    @media ${(props)=> props.theme.mobileL} {
        width: 30%;
    }
    @media ${(props)=> props.theme.mobileM} {
        width: 20%;
    }

`;


const Img = styled.img`
    width: 40%;;
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
        width:40%;
    }
    @media ${(props)=> props.theme.mobileL} {
        width: 40%;
    }
    @media ${(props)=> props.theme.mobileM} {
        width: 60%;
    }
`;

const TextBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px soild blue;

    @media ${(props)=> props.theme.tabletS} {
        width: 70%;

    }
    @media ${(props)=> props.theme.mobileL} {
        width: 70%;
    }
    @media ${(props)=> props.theme.mobileM} {
        width: 80%;
    }
`;

const Text1 = styled.div`
    margin: 0.5rem 0;
    padding: 0.2rem 0.5rem;
    font-size: 2rem;
    font-weight: bold; 
    font-family: 'BlackBase';
    text-align: center;
    line-height: 1;
    color: #333; 
    @media ${(props)=> props.theme.tabletL} {
        font-size: 2rem;
    }
    @media ${(props)=> props.theme.tabletM} {
        font-size: 1.7rem;
       
    }
    @media ${(props)=> props.theme.tabletS} {
        font-size: 1.5rem;
       
    }
    @media ${(props)=> props.theme.mobileL} {
        font-size: 1.8rem;
       
    }
    @media ${(props)=> props.theme.mobileM} {
        font-size: 1.2rem;
    }
`;


const InterviewBox = styled.div`
border: 1px solid gainsboro;
    width: 100%;
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;

`;