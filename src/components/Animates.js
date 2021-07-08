import { keyframes } from 'styled-components';

const AniFadeIn = keyframes`
 from {
   opacity:0;
  }

  to {
   opacity:1;
  }
`;
const AniGrow = keyframes`
 from {
    transform: scale(1);
  }

  to {
    transform: scale(1.3);
  }
`;
const AniRotate = keyframes`
 from {
    transform:translateX(-50%) rotate(0deg);
  }

  to {
    transform:translateX(-50%) rotate(360deg);
  }
`;
const AniShrink = keyframes`
from {
    transform: scale(1.3);
  }

  to {
    transform: scale(1);
  }
`;
const AniHold = keyframes`
from {
    transform: scale(1.3);
  }

  to {
    transform: scale(1.3);
  }
`;
const AniRefreshRotate = keyframes`
 from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export { AniFadeIn, AniGrow, AniRefreshRotate, AniRotate, AniShrink, AniHold };
