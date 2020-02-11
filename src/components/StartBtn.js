import React from 'react';
import styled from 'styled-components';
import ImagePlay from '../assets/img/play.svg';
import StyledButton from './StyledButton';
const StyledWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StartButton = styled(StyledButton)`
  padding: 3.2rem;
  background-size: 3.4rem 3.4rem;
  background-color: rgba(2, 2, 2, 0.8);
  background-image: url(${ImagePlay});
`;
export default function StartBtn({ clickStart }) {
  const handleStart = () => {
    clickStart();
    console.log('start');
    document.querySelector('audio').play();
    document.documentElement.requestFullscreen();
  };
  return (
    <StyledWrapper>
      <StartButton onClick={handleStart}></StartButton>
    </StyledWrapper>
  );
}
