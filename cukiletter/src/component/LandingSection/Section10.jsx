import React, { useEffect, useState } from "react";
import styled from "styled-components";
import{ init, send } from '@emailjs/browser';



const Section10 = () => {
    //email
    useEffect(()=> {
        init("cA1TVy2B1poEQhfTO");
    },[]);

    const [values, setValues] = useState({
        name: '',
        phone:'',
        email:'',
        message:'',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        send('service_cukiletter', 'template_kmncqmj', values)
        .then((res)=> {
            console.log("success!!", res.status, res.text);
        })
        .catch((err)=> {
            console.log("failed",err);
        })
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    console.log(values,"sdfsdf");
    return(
        <Container>
           
            <ContextBox>
                <TitleBox>
                    <span>CONTACT US</span>
                    <span>쿠키레터에게 궁금한 점이 있다면 메일을 보내주세요</span>
                </TitleBox>
                <TextBox>
                <form onSubmit={onSubmit} style={{}}>
                    <TextName placeholder="이름을 입력해주세요." name="name" value={values.name} onChange={handleChange}></TextName>
                    <TextPhone placeholder="휴대폰번호를 입력해주세요." name="phone" value={values.phone} onChange={handleChange}></TextPhone>
                    <TextEmail placeholder="이메일주소를 입력해주세요." name="email" value={values.email} onChange={handleChange}></TextEmail>
                    <TextMessage placeholder="문의사항을 입력해주세요." name="message" value={values.message} onChange={handleChange}></TextMessage>
                    <BtnBox>
                        <Btn onClick={onSubmit} type="submit">문의하기</Btn>
                    </BtnBox>
                </form>
                </TextBox>
                
            </ContextBox>
         
        </Container>
    )
}

export default Section10; 

const Container = styled.div`
    width: 85%;
    padding: 2rem 0;
    background-color: white;  //섹션백그라운드
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContextBox = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const TitleBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    & span:nth-child(1) {
        display: block;
        color: #707070;
        font-weight: bold;
        font-size: 1.5rem;
    } 
    & span:nth-child(2) {
        display: block;
        color: #707070;
        margin: 2rem 0;
    }
`;

const TextBox = styled.div`
    padding: 1rem 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column; 
    border: 1px solid gainsboro;
`;

const TextName = styled.input`
    background-color: #f3f3f3;
    width: 40%;
    height: 2.5rem;
    font-size: 0.9rem;
    text-indent: 0.5rem;
    color: #777777;
    margin-bottom:1.2rem;
    border:none;

`;
const TextPhone = styled.input`
background-color: #f3f3f3;
    width: 40%;
    height: 2.5rem;
    font-size: 0.9rem;
    text-indent: 0.5rem;
    color: #777777;
    margin-bottom:1.2rem;
    border:none;
`;
const TextEmail = styled.input`
background-color: #f3f3f3;
    width: 50%;
    height: 2.5rem;
    font-size: 0.9rem;
    text-indent: 0.5rem;
    color: #777777;
    margin-bottom:1.2rem;
    border:none;
`;
const TextMessage = styled.textarea`
    background-color: #f3f3f3;
    width: 100%;
    height: 7rem;
    font-size: 0.9rem;
    text-indent: 0.2rem;
    color: #777777;
    margin-bottom:1.2rem;
    border:none;
    outline:none;
    overflow-y: scroll;
    resize: none;
    line-height: 2;
`;


const BtnBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const Btn = styled.button`
    border: 1px solid gainsboro;
    width: 8rem; 
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    font-size: 0.9rem;
    color: #777777; 
    cursor: pointer;
    &:hover {
        background-color: #777; 
        color: white;
    }
`;