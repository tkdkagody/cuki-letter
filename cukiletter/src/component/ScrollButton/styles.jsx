import styled from "styled-components";

export const TopBtn = styled.button`
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    position: fixed;
    bottom: 1.3rem;
    right: 1.3rem;
    color: rgb(87, 87, 87);
    background-color: white;
    padding: 0.8rem 01rem;
    font-size: 1.2rem;
    border: 1.5px solid rgb(231, 231, 231);
    border-radius: 50%;
    display: flex;
    opacity: 0.8;
    box-shadow: 1px 1px 1px 1px #cfcfcf;
    transition: opacity 0.5s ease-in;
`;

export const TopBtnHide = styled.button`
    display: none;
`;