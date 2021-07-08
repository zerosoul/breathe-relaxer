import{ useState, useEffect } from 'react';
import {MdFullscreen,MdFullscreenExit} from 'react-icons/md'
import StyledButton from './StyledButton';

export default function FullscreenBtn() {
  const [fullscreen, setFullscreen] = useState(false);
  useEffect(() => {
    document.onfullscreenchange = function () {
      setFullscreen(document.fullscreenElement !== null);
    };
    return () => {
      document.onfullscreenchange = null;
    };
  }, []);
  const toggleFullscreen = () => {
    setFullscreen((prev) => !prev);
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  return (
    <StyledButton
      className={`idleHide`}
      onClick={toggleFullscreen}
    >
      {fullscreen?<MdFullscreen/>:<MdFullscreenExit/>}
    </StyledButton>
  );
}
