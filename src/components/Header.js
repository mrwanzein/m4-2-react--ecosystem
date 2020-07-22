import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 2.3em;
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 20px;
    }

    a {
        font-size: 1.2em;
        margin: 0 15px;
        padding-bottom: 5px;
    }
`;

const Header = (props) => {
    return (
        <Nav>
            <div>
                <h1>Fruit Emporium</h1>
            </div>
            <div>
                <NavLink exact to="/" activeClassName="nav-selected">Home</NavLink >
                <NavLink exact to="/about" activeClassName="nav-selected">About</NavLink >
            </div>
        </Nav>
    );
}

export default Header;