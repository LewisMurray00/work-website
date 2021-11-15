import React from 'react'
import styled from 'styled-components'
import { NavButton } from './NavButton'

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: 1;
`



const Dropdown = () => {
    return (
        <DropdownContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                   {menuData.map((item, index)=>{
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                   })} 
                </DropdownMenu>
                <BtnWrap>
                    <NavButton primary="true" round="true" big="true" to="/contact">
                        Contact
                    </NavButton>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
