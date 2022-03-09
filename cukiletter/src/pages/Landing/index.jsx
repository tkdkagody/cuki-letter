import React from "react";
import Section5 from "../../component/LandingSection/Section5";
import Section1 from "../../component/LandingSection/Section1";
import Section2 from "../../component/LandingSection/Section2";
import Section3 from "../../component/LandingSection/Section3";
import Section4 from "../../component/LandingSection/Section4";
import Section6 from "../../component/LandingSection/Section6";
import Section7 from "../../component/LandingSection/Section7";
import Section8 from "../../component/LandingSection/Section8";
import Section9 from "../../component/LandingSection/Section9";

import { Container} from './styles';

const Landing = () => {
    return(
        <Container>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
            <Section8/>
            <Section9/>
        </Container>
    )
}

export default Landing; 

