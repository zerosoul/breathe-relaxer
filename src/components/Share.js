import React, { useState } from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';
import ImageClose from '../assets/img/close.svg';
import ImageShare from '../assets/img/share.svg';

import ShareImage from '../assets/img/icon.png';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WeiboIcon,
  WeiboShareButton
} from 'react-share';
const ShareButton = styled(StyledButton)`
  padding: 0.8rem;
  background-image: url(${ImageShare});
  &.close {
    background-image: url(${ImageClose});
  }
`;
const StyledWrapper = styled.div`
  z-index: 998;
  position: fixed;
  right: 3rem;
  bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  .btn {
    margin-bottom: 0.4rem;
  }
`;

const shareUrl = `https://works.yangerxiao.com/breathe-relaxer/`;
const ShareItems = () => (
  <>
    <WeiboShareButton
      className="btn"
      url={shareUrl}
      title={`发现一个挺有意思的东西~~~`}
      image={`https://works.yangerxiao.com/breathe-relaxer/apple-touch-icon.png`}
    >
      <WeiboIcon size={32} round />
    </WeiboShareButton>
    <FacebookShareButton
      className="btn"
      url={shareUrl}
      quote={`Have a try: Calm down your mind, relax your body.`}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>

    <TwitterShareButton
      className="btn"
      url={`https://works.yangerxiao.com/breathe-relaxer/`}
      title={`Have a try: Calm down your mind, relax your body.`}
      image={ShareImage}
    >
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  </>
);
const Share = () => {
  const [visible, setVisible] = useState(false);
  const handleShareClick = () => {
    setVisible(prev => !prev);
  };

  return (
    <StyledWrapper>
      {visible ? <ShareItems /> : null}

      <ShareButton className={`idleHide ${visible ? 'close' : ''}`} onClick={handleShareClick} />
    </StyledWrapper>
  );
};

export default Share;
