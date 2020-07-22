import React from 'react';
import styled from 'styled-components';

const AboutDiv = styled.div`
    margin-left: 20px;

    p {
        width: 550px;
        font-size: 1.5em;
    }
`;

const About = () => {
    return (
        <AboutDiv>
            <p>
                Fruit emporium is founded on a very simple principle: <strong>Fruit is good.</strong>
            </p>
            <p>
                We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.
            </p>
        </AboutDiv>
    );
}

export default About;