import React from 'react';
import styled from 'styled-components';

import ListingGrid from './ListingGrid';

const HomePageHeader = styled.div`
    p {
        font-size: 1.3em;
        margin-left: 20px;
    }
`;

const Home = (props) => {
    return (
        <div>
        <HomePageHeader>
            <p>
                Fruit emporium sells the finest fruits from this world and beyond.
            </p>
            <p>
                <strong>Browse items:</strong>
            </p>
        </HomePageHeader>
        
            <ListingGrid listOfFruits={props.listOfFruits} />
        </div>
    );
}

export default Home;