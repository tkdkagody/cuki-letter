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
                <Text1>교류 기관 매칭 서비스</Text1>
                <Text2>교류 희망 기관은 기관등록을 통해 <br></br>매칭 희망 정보를 업데이트 합니다.</Text2>
                {/* <Text2>교류 기간<br></br>사용 언어<br></br>교류 방식</Text2> */}
                <CircleBox>
                    <Circle>교류기간</Circle>
                    <Circle>사용언어</Circle>
                    <Circle>교류방식</Circle>
                </CircleBox>
                <Text2>희망하는 조건을 자유롭게 조절할 수 있습니다.</Text2>
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
    margin-top: 3rem;
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

const CircleBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
`;

const Circle = styled.div`
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 1px solid gainsboro;
    color: #333;
    line-height: 6rem;
    text-align: center;
    font-weight: bold;
`; 