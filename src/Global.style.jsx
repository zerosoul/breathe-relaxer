import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
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
    font-family: "Microsoft YaHei", 微软雅黑, Tahoma,Arial,sans-serif;
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
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image:linear-gradient(-45deg, rgb(66, 102, 102), #545d6c, #23d5ab);
    transition:background-image 1s;
  }

  @media screen and (min-width: 320px){
      html {
          font-size: 12px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 16px;
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
