import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import BG1 from './assets/img/bgs/bg.1.jpg';
import BG2 from './assets/img/bgs/bg.2.jpg';
import BG3 from './assets/img/bgs/bg.3.jpg';
import BG4 from './assets/img/bgs/bg.4.jpg';
import BG5 from './assets/img/bgs/bg.5.jpg';
import BG6 from './assets/img/bgs/bg.6.jpg';
import BG7 from './assets/img/bgs/bg.7.jpg';
const BGs = [BG1, BG2, BG3, BG4, BG5, BG6, BG7];
const CurrBg = BGs[Math.floor(Math.random() * BGs.length)];
const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
    user-select:none;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color:#ffffeb;
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Microsoft YaHei", "WenQuanYi Micro Hei";
  }
  body{
    -webkit-overflow-scrolling: touch;
    overflow:scroll;
    margin:0 auto;
    min-height:100vh;
    position: relative;
  }
  #root{
    min-height:100vh;
    background-image:url(${CurrBg});
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 320px){
      html {
          font-size: 12px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 14px;
      }
  }
  @media screen and (min-width: 480px){
      html {
          font-size: 20px;
      }
  }
  @media screen and (min-width: 768px){
      html {
          font-size: 24px;
      }
  }
`;

export default GlobalStyle;
