import React from 'react'
import styled, { css } from 'styled-components/macro'
import { NavButton } from './NavButton';
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'


//Styled components:
const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div``;
const HeroSlider = styled.div``;
const HeroImage = styled.img``;
const HeroContent = styled.div``;
const Arrow = styled(IoMdArrowRoundForward)``;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover{
        background: blue;
        transform: scale(1.05);
    }
`;


//Actual component
const Hero = ({slides}) => {
    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index)=>{
                    return (
                        <HeroSlide key={index}>
                            <HeroSlider>
                                <HeroImage />
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <NavButton to={slide.path} primary="true" css={`max-width:160px`}>
                                        {slide.label}
                                        <Arrow />
                                    </NavButton>
                                </HeroContent>
                            </HeroSlider>
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow />
                    <NextArrow />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
