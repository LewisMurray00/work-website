import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData';
import { NavButton } from './NavButton';

//Using Styled components to style

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index:100;
    position: fixed;
    width: 100%;
    background: red;
`;

const Logo = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    font-style: italic;
`;

const MenuBars = styled.i`

`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
`;

const NavMenuLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">JW Construction</Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((item, index)=>(
                    <NavMenuLinks to={item.links} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <NavButton to="/contact" primary='true'>
                    Contact Us
                </NavButton>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
