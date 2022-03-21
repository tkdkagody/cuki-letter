import React, { useEffect, useRef, useState } from "react";
import {Container, ContainerShadow, containerHide, Title, TitleBox} from '../Header/styles'


const Header = () => {

    const [shadow, setShadow] = useState(false); //스크롤 아래로 하면 false, 위로하면 true
    const [pageY, setPageY] = useState(0); //스크롤 위치(0일 때 페이지 상단)

    const documentRef = useRef(document); 


    const handleScroll = () => {
      const { pageYOffset } = window; //상단으로부터 스크롤 위치
      const deltaY = pageYOffset - pageY; //스크롤 속도
      if (pageYOffset < 20 && deltaY > 0) {
        setShadow(false);
      } else if (pageYOffset !==0 && deltaY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
      setPageY(pageYOffset);
    };
  
    
    const throttle = function (callback, waitTime) {
      let timerId = null;
      return (e) => {
        if (timerId) return;
        timerId = setTimeout(() => {
          callback.call(this, e);
          timerId = null;
        }, waitTime);
      }; 
    };
    

    const throttleScroll = throttle(handleScroll, 100);

    useEffect(() => {
      documentRef.current.addEventListener("scroll", throttleScroll);
      return () =>
        documentRef.current.removeEventListener("scroll", throttleScroll);
    }, [pageY]);


    const goHeader = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }


    return(
        <>
        {shadow?
        <ContainerShadow><TitleBox><Title onClick={goHeader}>CUKI LETTER</Title></TitleBox></ContainerShadow>
        : <Container><TitleBox><Title>CUKI LETTER</Title></TitleBox></Container>
        }
        </>
    );
}

export default Header; 

