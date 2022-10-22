import { useState, useEffect } from "react";
import styled from "styled-components";
import { AniFadeIn, AniGrow, AniShrink, AniHold, AniRotate } from "./Animates";

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
    display: flex;
    align-items: center;
    justify-content: center;
    .txt {
      animation: ${AniFadeIn} 1s linear forwards;

      text-align: center;
      font-size: 1.2rem;
      font-weight: 800;
      padding: 0.2rem 0;
      text-transform: capitalize;
    }
  }
  .circle {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: background-color 1s;
  }
  &.grow .circle {
    background-color: rgb(66, 102, 102);
  }
  &.shrink .circle {
    background-color: rgb(127, 236, 173);
  }
  &.hold .circle {
    background-color: rgb(22, 22, 2);
  }
  .gradient-circle {
    background: conic-gradient(
      rgba(127, 236, 173, 0.5) 0%,
      rgba(127, 236, 173, 0.5) 40%,
      rgba(22, 22, 2, 0.5) 40%,
      rgba(22, 22, 2, 0.5) 60%,
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
        background-color: rgba(22, 22, 2, 0.8);
      }
    }
  }
`;
export default function RelaxCircle({ dicts }) {
  const [status, setStatus] = useState("grow");
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const visibleHandler = () => {
      setVisible(document.visibilityState === "visible");
      setStatus("grow");
    };
    document.addEventListener("visibilitychange", visibleHandler, false);
    return () => {
      document.removeEventListener("visibilitychange", visibleHandler, false);
    };
  }, []);
  useEffect(() => {}, [status]);
  const handleAniEnd = ({ target }) => {
    console.log(target);
    if (!target.classList.contains("txt")) {
      if (status === "grow") {
        setStatus("hold");
      } else if (status === "shrink") {
        setStatus("grow");
      } else {
        setStatus("shrink");
      }
    }
  };

  return (
    visible && (
      <StyledWrapper className={`${status}`} onAnimationEnd={handleAniEnd}>
        <div className="circle"></div>
        <div className="tip">
          {status === "grow" ? (
            <span className="txt">{dicts.inhale}</span>
          ) : status === "shrink" ? (
            <span className="txt">{dicts.exhale}</span>
          ) : (
            <span className="txt">{dicts.hold}</span>
          )}
        </div>
        <div className="gradient-circle"></div>

        <div className={`pointer-container`}>
          <span className={`pointer ${status}`}></span>
        </div>
      </StyledWrapper>
    )
  );
}
