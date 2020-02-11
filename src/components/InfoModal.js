import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import GitHubButton from 'react-github-btn';

import ImageInfo from '../assets/img/info.svg';
import ImageClose from '../assets/img/close.svg';
import ImageReward from '../assets/img/reward.jpg';
const AniSlideLeft = keyframes`
from{
  transform:translateX(100%)
}
to{
  transform:translateX(0)
}
`;
const StyledButton = styled.button`
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  padding: 0.8rem;
  background-size: 1rem 1rem;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(2, 2, 2, 0.4);
  margin-right: 0.5rem;
  background-image: url(${ImageInfo});
  &.close {
    background-image: url(${ImageClose});
  }
`;
const StyledModal = styled.section`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px black;
  position: fixed;
  right: 0.5rem;
  bottom: 2.5rem;
  background: rgba(2, 2, 2, 0.6);
  padding: 1rem;
  animation: ${AniSlideLeft} 1s;
  padding: 1rem;
  .reward {
    width: 14rem;
    align-self: center;
    border: 1px solid #222;
    border-radius: 0.4rem;
    margin-bottom: 0.8rem;
  }
  .based {
    margin-bottom: 0.5rem;
  }
  .code {
    margin-bottom: 0.8rem;
  }
  .copyright {
    font-size: 0.6rem;
  }
`;
const Modal = () => (
  <StyledModal>
    <img src={ImageReward} alt="reward" className="reward" />
    <div className="based">
      基于<a href="https://vanillawebprojects.com/projects/relaxer-app/">Relaxer</a>改进
    </div>
    <div className="code">
      代码开源：
      <GitHubButton
        href="https://github.com/zerosoul/breathe-relaxer"
        data-show-count="true"
        aria-label="Star breathe-relaxer on GitHub"
      >
        Star
      </GitHubButton>
    </div>
    <div className="copyright">
      <span> Copyright © {new Date().getFullYear()} By </span>
      <a rel="noopener noreferrer" href="https://yangerxiao.com" target="_blank">
        Tristan
      </a>
    </div>
  </StyledModal>
);
export default function InfoModal() {
  const [visible, setVisible] = useState(false);
  const handleInfoClick = () => {
    setVisible(prev => !prev);
  };

  return (
    <>
      {visible ? <Modal /> : null}

      <StyledButton
        className={`idleHide ${visible ? 'close' : ''}`}
        onClick={handleInfoClick}
      ></StyledButton>
    </>
  );
}
