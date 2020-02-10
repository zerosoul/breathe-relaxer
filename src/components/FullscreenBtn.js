import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageFullscreen from '../assets/img/fullscreen.svg';
import ImageFullscreenExit from '../assets/img/fullscreen.exit.svg';

const StyledButton = styled.button`
  padding: 0.8rem;
  background-size: 1rem 1rem;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(2, 2, 2, 0.4);
  background-image: url(${ImageFullscreen});
  &.exit {
    background-image: url(${ImageFullscreenExit});
  }
`;

export default function FullscreenBtn() {
  const [fullscreen, setFullscreen] = useState(false);
  useEffect(() => {
    document.onfullscreenchange = function() {
      setFullscreen(document.fullscreenElement !== null);
    };
    return () => {
      document.onfullscreenchange = null;
    };
  }, []);
  const toggleFullscreen = () => {
    setFullscreen(prev => !prev);
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  return (
    <StyledButton className={fullscreen ? '' : 'exit'} onClick={toggleFullscreen}></StyledButton>
  );
}
