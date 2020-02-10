import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AniGrow, AniShrink, AniHold, AniRotate } from './Animates';
import ImagePlay from '../assets/img/play.svg';

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
  &.pause {
    animation: none;
  }
  .startBtn {
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    cursor: pointer;
    outline: none;
    background: #fff;
    border: none;
    border-radius: 50%;
    padding: 3.2rem;
    background-size: 3.4rem 3.4rem;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(2, 2, 2, 0.6);
    background-image: url(${ImagePlay});
  }
  .tip {
    position: relative;
    width: 2.4rem;
    height: 1.6rem;
    overflow: hidden;
    .content {
      position: absolute;
      left: 0;
      top: 0;
      transition: all 0.3s;
      display: flex;
      flex-direction: column;
      &.pause {
        top: -100%;
      }
      &.grow {
        transform: translateY(0);
      }
      &.shrink {
        transform: translateY(-1.6rem);
      }
      &.hold {
        transform: translateY(-3.2rem);
      }
      .txt {
        font-size: 1.2rem;
        font-weight: 800;
        padding: 0.2rem 0;
      }
    }
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
      rgba(127, 236, 173, 0.5) 0%,
      rgba(127, 236, 173, 0.5) 40%,
      rgba(210, 240, 244, 0.5) 40%,
      rgba(210, 240, 244, 0.5) 60%,
      rgba(66, 102, 102, 0.5) 60%,
      rgba(66, 102, 102, 0.5) 100%
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
      transition: background-color 0.2s;
      box-shadow: 0 0 3px black;
      &.grow {
        background-color: rgba(127, 236, 173, 0.8);
      }
      &.shrink {
        background-color: rgba(66, 102, 102, 0.8);
      }
      &.hold {
        background-color: rgba(210, 240, 244, 0.8);
      }
    }
  }
`;
export default function RelaxCircle() {
  const [status, setStatus] = useState('grow');
  const [visible, setVisible] = useState(true);
  const [start, setStart] = useState(false);
  useEffect(() => {
    document.addEventListener('visibilitychange', function() {
      setVisible(document.visibilityState === 'visible');
      setStatus('grow');
    });
    return () => {
      document.removeEventListener('visibilitychange');
    };
  }, []);
  useEffect(() => {}, [status]);
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
  const handleStart = () => {
    console.log('start');
    document.querySelector('audio').play();
    setStart(true);
    document.documentElement.requestFullscreen();
  };
  return (
    visible && (
      <StyledWrapper className={`${status} ${start ? '' : 'pause'}`} onAnimationEnd={handleAniEnd}>
        <div className="circle"></div>
        {!start && <button className="startBtn" onClick={handleStart}></button>}
        {start && (
          <div className="tip">
            <p className={`content ${status} ${start ? '' : 'pause'}`}>
              <span className="txt">吸气</span>
              <span className="txt">呼气</span>
              <span className="txt">屏息</span>
            </p>
          </div>
        )}
        <div className="gradient-circle"></div>

        {start && (
          <div className={`pointer-container`}>
            <span className={`pointer ${status}`}></span>
          </div>
        )}
      </StyledWrapper>
    )
  );
}
