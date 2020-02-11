import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageFullscreen from '../assets/img/fullscreen.svg';
import ImageFullscreenExit from '../assets/img/fullscreen.exit.svg';
import StyledButton from './StyledButton';
const FullscreenButton = styled(StyledButton)`
  padding: 0.8rem;

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
    <FullscreenButton
      className={`idleHide ${fullscreen ? '' : 'exit'}`}
      onClick={toggleFullscreen}
    ></FullscreenButton>
  );
}
