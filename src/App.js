import React, { lazy, Suspense, useState } from 'react';
import Loading from './components/Loading';
import RelaxCircle from './components/RelaxCircle';
const Header = lazy(() => import('./components/Header'));
const Background = lazy(() => import('./components/Background'));
const InfoModal = lazy(() => import('./components/InfoModal'));
const StartBtn = lazy(() => import('./components/StartBtn'));
const HideWhenIdle = lazy(() => import('./components/HideWhenIdle'));
import styled from 'styled-components';
const StyledBody = styled.section`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const App = () => {
  const [start, setStart] = useState(false);
  return (
    <Suspense fallback={<Loading />}>
      {!start && (
        <StartBtn
          clickStart={() => {
            setStart(true);
          }}
        />
      )}
      <Header />
      <StyledBody>{start && <RelaxCircle />}</StyledBody>
      <Background />
      <InfoModal />
      {start && <HideWhenIdle />}
    </Suspense>
  );
};
export default App;
