import{ useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import FullscreenBtn from './FullscreenBtn';
import { AniRefreshRotate } from './Animates';
import StyledButton from './StyledButton';
import {GiSpeaker,GiSpeakerOff} from 'react-icons/gi'
import {GoSync} from 'react-icons/go'
import {MdStop} from 'react-icons/md'

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
    margin-right: 0.5rem;
  }
`;
const RefreshButton=styled(StyledButton)`
  &[disabled] {
    animation: ${AniRefreshRotate} 1s infinite forwards linear;
  }
`
export default function Background({start,reset}) {
  const [currBg, setCurrBg] = useState(CurrBg);
  const [currBgm, setCurrBgm] = useState(CurrBgm);
  const [bgLoading, setBgLoading] = useState(true);
  const [bgmEnable, setBgmEnable] = useState(true)
  const bgmEle = useRef(null);
  const handleChangeBg = () => {
    let currIdx = BGs.findIndex((item) => item == currBg);
    let newIdx = (currIdx + 1) % BGs.length;
    let newBg = BGs[newIdx];
    let newBgm = BGMs[newIdx];
    setCurrBg(newBg);
    setCurrBgm(newBgm);
  };
  const toggleBgm = () => {
    console.log(bgmEle.current);
    const audioEle = bgmEle.current;
    if (audioEle.paused) {
      audioEle.play();
      setBgmEnable(true)
    } else {
      audioEle.pause();
      setBgmEnable(false)
    }
  };
  const handleStop=()=>{
    const audioEle = bgmEle.current;
    audioEle.pause();
    audioEle.currentTime = 0;
    setBgmEnable(true)
    reset();
  }
  useEffect(() => {
    setBgLoading(true);
    let preloadImage = new Image();
    let currSrc = `https://static.nicegoodthings.com/works/breath/${currBg}`;
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

     {start && <StyledButton
        className="idleHide"
        onClick={handleStop}
      >
        <MdStop />
      </StyledButton>}
      <FullscreenBtn />
      <StyledButton className="idleHide" onClick={toggleBgm}>
        {bgmEnable?<GiSpeaker/>:<GiSpeakerOff/>}
      </StyledButton>
      <RefreshButton
        disabled={bgLoading}
        className="idleHide"
        onClick={handleChangeBg}
      >
        <GoSync/>
      </RefreshButton>
      <audio ref={bgmEle} autoPlay loop src={currBgm}></audio>
    </StyledWrapper>
  );
}
