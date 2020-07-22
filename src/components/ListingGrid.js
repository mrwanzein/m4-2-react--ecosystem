import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 250px 250px 250px;
    grid-template-rows: 1fr 1fr;
    grid-gap: 3rem;
    justify-content: center;
`;

const FruitDiv = styled.div`
    box-shadow: -1px 0px 11px -1px rgba(0,0,0,0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FruitImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    transition: all 600ms ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const ListingGrid = (props) => {
    return (
        <Grid>
            {props.listOfFruits.map(fruit => {
                return (
                    <FruitDiv key={fruit.id}>
                    <Link to={`/items/${fruit.name}`}>
                        <FruitImg src={fruit.imageSrc} alt="Yummy fruit"/>
                    </Link>
                        <p>{fruit.name}</p>
                        <p>{fruit.latinName}</p>
                    </FruitDiv>
                );
            })}
        </Grid>
    );
}

export default ListingGrid;