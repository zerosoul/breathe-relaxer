import{ useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
.idleHide{
  transition:opacity 1s;
  opacity:0;
}
`;
let inter = null;
export default function HideWhenIdle() {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    inter = setTimeout(() => {
      setHide(true);
      console.log('clear1');
    }, 5000);
    window.onmousemove = (evt) => {
      setHide(false);
      clearTimeout(inter);
      //如果 鼠标放在该隐藏元素的时候，停止隐藏
      if (!evt.target.classList.contains('idleHide')) {
        inter = setTimeout(() => {
          console.log('clear2');
          setHide(true);
        }, 5000);
      }
    };

    return () => {
      window.onmousemove = null;
      clearTimeout(inter);
    };
  }, []);

  return <>{hide ? <GlobalStyle /> : null}</>;
}
