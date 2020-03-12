import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import FullscreenBtn from './FullscreenBtn';
import { AniRefreshRotate } from './Animates';
import StyledButton from './StyledButton';
import ImageRefresh from '../assets/img/refresh.svg';
import ImageSound from '../assets/img/sound.svg';
import ImageSoundOff from '../assets/img/sound-off.svg';

import BGM1 from '../assets/bgm/juggle.mp3';
import BGM2 from '../assets/bgm/grass.night.mp3';
import BGM3 from '../assets/bgm/rain.mp3';
import BGM4 from '../assets/bgm/sea.mp3';
import BGM5 from '../assets/bgm/night.wind.mp3';
import BGM6 from '../assets/bgm/forest.bird.mp3';
const BGs = ['bg.1.jpg', 'bg.2.jpg', 'bg.3.jpg', 'bg.4.jpg', 'bg.5.jpg', 'bg.6.jpg', 'bg.7.jpg'];
const BGMs = [BGM6, BGM2, BGM3, BGM4, BGM5, BGM1, BGM4];
const idx = Math.floor(Math.random() * BGs.length);
const CurrBg = BGs[idx];
const CurrBgm = BGMs[idx] || BGMs[0];
const StyledWrapper = styled.aside`
  position: fixed;
  left: 0.5rem;
  bottom: 0.5rem;
  button {
    padding: 0.8rem;

    margin-right: 0.5rem;
    &.refresh {
      background-image: url(${ImageRefresh});
      &[disabled] {
        animation: ${AniRefreshRotate} 1s infinite forwards linear;
      }
    }
    &.sound {
      background-image: url(${ImageSound});
      &.paused {
        background-image: url(${ImageSoundOff});
      }
    }
  }
`;
export default function Background() {
  const [currBg, setCurrBg] = useState(CurrBg);
  const [currBgm, setCurrBgm] = useState(CurrBgm);
  const [bgLoading, setBgLoading] = useState(true);
  const bgmEle = useRef(null);
  const bgmBtn = useRef(null);
  const handleChangeBg = () => {
    let currIdx = BGs.findIndex(item => item == currBg);
    let newIdx = (currIdx + 1) % BGs.length;
    let newBg = BGs[newIdx];
    let newBgm = BGMs[newIdx];
    setCurrBg(newBg);
    setCurrBgm(newBgm);
    bgmBtn.current.classList.remove('paused');
  };
  const toggleBgm = () => {
    console.log(bgmEle.current);
    const audioEle = bgmEle.current;
    const btnEle = bgmBtn.current;
    btnEle.classList.toggle('paused');
    if (audioEle.paused) {
      audioEle.play();
    } else {
      audioEle.pause();
    }
  };
  useEffect(() => {
    setBgLoading(true);
    let preloadImage = new Image();
    let currSrc = `https://gitee.com/zyanggc/oss/raw/master/breath/${currBg}`;
    preloadImage.src = currSrc;
    preloadImage.onload = () => {
      setTimeout(() => {
        document.querySelector('#root').style.backgroundImage = `url('${currSrc}')`;
        setBgLoading(false);
        preloadImage = null;
      }, 1000);
    };
  }, [currBg]);
  return (
    <StyledWrapper>
      <FullscreenBtn />
      <StyledButton ref={bgmBtn} className="sound idleHide" onClick={toggleBgm}></StyledButton>
      <StyledButton
        disabled={bgLoading}
        className="refresh idleHide"
        onClick={handleChangeBg}
      ></StyledButton>
      <audio ref={bgmEle} autoPlay loop src={currBgm}></audio>
    </StyledWrapper>
  );
}
