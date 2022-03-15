import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ConfirmModal = ({setModalOpen}) => {

    const closeBtn = () => {
        setModalOpen(false);
    }



    return(
        <ModalContainer>
            <div>
                <p>문의메일 전달이 완료되었습니다.</p> 
                <button onClick={closeBtn}>확인</button>
            </div>
        </ModalContainer>
    )
}


const ModalContainer = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 20;
    animation: fadein 0.5s;
    -moz-animation: fadein 0.5s;
    -webkit-animation: fadein 0.5s;
    -o-animation: fadein 0.5s;
    & > div {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 7.5rem 1.5rem;
        width: 20rem;
        height: 25rem;
        z-index: 30;
        border-radius: 10px;
        & > p {
            margin-bottom: 1.5rem;
            text-align: center;
            font-size: 1rem;
            color: #777;
            line-height: 1.8rem;
        }
        & > button {
            margin: 5rem 5.5rem;
            width: 6rem;
            height: 2.5rem;
            cursor: pointer;
            border: 1px solid rgb(90, 90, 90);
            padding: 0.2rem 0.7rem;
            border-radius: 5px;
            background-color: rgb(90, 90, 90);
            transition: 0.3s;
            font-size: 0.8rem;
            color: white;
            white-space: nowrap;
            &:hover {
                border: 1px solid rgb(210, 210, 210);
                background-color: white;
                color: rgb(66, 66, 66);
            }
        }
    }
`;

export default ConfirmModal ; 