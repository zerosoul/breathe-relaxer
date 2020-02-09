import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AniGrow, AniShrink, AniHold, AniRotate } from './Animates';
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;
  position: relative;
  &.grow {
    animation: ${AniGrow} 3s linear forwards;
  }
  &.shrink {
    animation: ${AniShrink} 3s linear forwards;
  }
  &.hold {
    animation: ${AniHold} 1.5s linear forwards;
  }
  .tip {
    font-size: 1.2rem;
    font-weight: 800;
  }
  .circle {
    background-color: #3d3b4f;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .gradient-circle {
    background: conic-gradient(
      #7fecad 0%,
      #7fecad 40%,
      #d2f0f4 40%,
      #d2f0f4 60%,
      #426666 60%,
      #426666 100%
    );
    height: 12rem;
    width: 12rem;
    z-index: -2;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 0 8px black;
  }

  .pointer-container {
    position: absolute;
    top: -3.6rem;
    left: 50%;
    width: 1.6rem;
    height: calc(50% + 3.6rem);
    transform: translateX(-50%);
    animation: ${AniRotate} 7.5s linear forwards infinite;
    transform-origin: bottom center;
    .pointer {
      border-radius: 50%;
      height: 1.6rem;
      width: 1.6rem;
      display: block;
      transition: background-color 0.4s;
      box-shadow: inset 0 0 3px black;
      &.grow {
        background-color: #7fecad;
      }
      &.shrink {
        background-color: #426666;
      }
      &.hold {
        background-color: #d2f0f4;
      }
    }
  }
`;
const Tips = {
  grow: '吸气',
  shrink: '呼气',
  hold: '屏息'
};
export default function RelaxCircle() {
  const [status, setStatus] = useState('grow');
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    document.addEventListener('visibilitychange', function() {
      setVisible(document.visibilityState === 'visible');
      setStatus('grow');
    });
    return () => {
      document.removeEventListener('visibilitychange');
    };
  }, []);
  const handleAniEnd = ({ target }) => {
    console.log(target);
    if (status === 'grow') {
      setStatus('hold');
    } else if (status === 'shrink') {
      setStatus('grow');
    } else {
      setStatus('shrink');
    }
  };
  return (
    visible && (
      <StyledWrapper className={status} onAnimationEnd={handleAniEnd}>
        <div className="circle"></div>

        <p className="tip">{Tips[status]}</p>
        <div className="gradient-circle"></div>

        <div className="pointer-container">
          <span className={`pointer ${status}`}></span>
        </div>
      </StyledWrapper>
    )
  );
}
