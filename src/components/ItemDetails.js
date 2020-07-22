import React from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

import { items, sellers } from '../data';

const SingleFruit = styled.div`
    display: flex;
    margin-left: 20px;
    margin-top: 100px;
    
    li {
        list-style: none;
        margin: 20px 0;
    }

    button {
        background-color: lightsalmon;
        border-radius: 10px;
        width: 200px;
        height: 50px;
        color: white;
        font-size: 1.1em;

        &:hover {
            cursor: pointer;
            opacity: 80%;
        }
    }

    .main-fruit {
        width: 400px;
        height: 400px;
        border-radius: 20px;
    }

    .vendor-profile {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`;

const ItemDetails = () => {
    const { itemId } = useParams();
    const rightFruit = Object.values(items).find(fruits => fruits.name === itemId);
    const size = Object.keys(sellers).length;
    const seller = Object.values(sellers)[Math.floor(Math.random() * size)];
    
    return (
      <SingleFruit>
        <img className="main-fruit" src={rightFruit.imageSrc} alt="Yummy fruit" />
        <ul>
          <li><strong>{rightFruit.name}</strong></li>
          <li>{rightFruit.latinName}</li>
          <li>{rightFruit.description}</li>
          <li><i>Product of <strong>{rightFruit.countryOfOrigin}</strong></i></li>
          <li>{rightFruit.quantity !== 0 ? <button>${rightFruit.price} - Buy now</button> : <button disabled>Out of Stock</button>}</li>
          <li><img className="vendor-profile" src={seller.avatarSrc} alt="Fruit vendor profile"/> Sold by: <strong>{seller.storeName}</strong></li>
        </ul>
      </SingleFruit>
    );
}

export default ItemDetails;