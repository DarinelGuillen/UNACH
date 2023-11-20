import React, { useContext } from 'react';
import Section1_1 from "../components/organism/Section1_1";
import Section1_2 from '../components/organism/Section1_2';
import Section1_3 from '../components/organism/Section1_3';
import Section1_4 from '../components/organism/Section1_4';
import Section1_5 from '../components/organism/Section1_5';
import Section2_0 from '../components/organism/Section2_0';
import Section2_1 from '../components/organism/Section2_1';
import Section2_2 from '../components/organism/Section2_2';
import Section2_3 from '../components/organism/Section2_3';
import Section2_4 from '../components/organism/Section2_4';
import Section2_5 from '../components/organism/Section2_5';
import Section2_6 from '../components/organism/Section2_6';
import Section2_7 from '../components/organism/Section2_7';
import Section2_8 from '../components/organism/Section2_8';
import Section2_9 from '../components/organism/Section2_9';
import Section2_10 from '../components/organism/Section2_10';
import UserContext from '../contexts/UserContext';


function Sections() {
    const { isUser, setIsUser }   = useContext(UserContext)
    switch (isUser.page) {
        case 2                    : 
            return <Section1_2 />;
        case 3                    : 
            return <Section1_3 />;
        case 4                    : 
            return <Section1_4 />;
        case 5                    : 
            return <Section1_5 />;
        case 6                    : 
            return <Section2_0 />;
        case 7                    : 
            return <Section2_1 />;
        case 8                    : 
            return <Section2_2 />;
        case 9                    : 
            return <Section2_3 />;
        case 10                   : 
            return <Section2_4 />;
        case 11                   : 
            return <Section2_5 />;
        case 12                   : 
            return <Section2_6 />;
        case 13                   : 
            return <Section2_7 />;
        case 14                   : 
            return <Section2_8 />;
        case 15                   : 
            return <Section2_9 />;
        case 16                   : 
            return <Section2_10 />;

        default                   : 
            return <Section1_1 />;
    }
}
export default Sections;
