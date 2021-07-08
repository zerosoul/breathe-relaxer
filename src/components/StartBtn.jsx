
import styled from 'styled-components';
import {IoPlay} from 'react-icons/io5'
import StyledButton from './StyledButton';
import { AniGrow } from './Animates';

const StyledWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 996;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${AniGrow} 3s ease-in-out alternate infinite;
`;
const StartButton = styled(StyledButton)`
 padding: 1rem;
    width: 5rem;
    height: 5rem;
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
      <StartButton onClick={handleStart}>
        <IoPlay/>
      </StartButton>
    </StyledWrapper>
  );
}
