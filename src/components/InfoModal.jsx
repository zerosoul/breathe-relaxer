/* eslint-disable react/jsx-no-target-blank */
import{ useState } from 'react';
import styled, { keyframes } from 'styled-components';
import GitHubButton from 'react-github-btn';
import StyledButton from './StyledButton';
import {TiInfoLarge} from 'react-icons/ti'
import {MdClose} from 'react-icons/md'
import ImageReward from '../assets/img/reward.jpg';
const AniSlideLeft = keyframes`
from{
  transform:translateX(100%)
}
to{
  transform:translateX(0)
}
`;
const InfoButton = styled(StyledButton)`
  z-index: 998;
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  margin-right: 0.5rem;
`;
const StyledModal = styled.section`
  z-index: 998;
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
  .producthunt {
    margin: 0.4rem 0;
    img {
      width: 10rem;
    }
  }
  .based {
    margin-bottom: 0.5rem;
  }
  .code {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
  }
  .copyright {
    font-size: 0.5rem;
    a {
      padding: 0 0.2rem;
    }
  }
`;
const Modal = () => (
  <StyledModal className="idleHide">
    <img src={ImageReward} alt="reward" className="reward" />
    <a
      className="producthunt"
      href="https://www.producthunt.com/posts/breathe-relaxer?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-breathe-relaxer"
      target="_blank"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=184350&theme=light"
        alt="Breathe Relaxer - Calm down your mind, relax your body | Product Hunt Embed"
      />
    </a>
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
      <a rel="noopener noreferrer" target="_blank" href="http://www.beian.miit.gov.cn/">
        京ICP备16015459号-1
      </a>
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
    setVisible((prev) => !prev);
  };

  return (
    <>
      {visible ? <Modal /> : null}

      <InfoButton
        className={`idleHide`}
        onClick={handleInfoClick}
      >
        {visible?<MdClose/>:<TiInfoLarge/>}
      </InfoButton>
    </>
  );
}
