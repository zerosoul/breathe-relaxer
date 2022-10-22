import { lazy, Suspense, useState } from "react";
import styled from "styled-components";
import Loading from "./components/Loading";
import RelaxCircle from "./components/RelaxCircle";
import { useLang } from "./langs";
const Header = lazy(() => import("./components/Header"));
const Background = lazy(() => import("./components/Background"));
const InfoModal = lazy(() => import("./components/InfoModal"));
const StartBtn = lazy(() => import("./components/StartBtn"));
const HideWhenIdle = lazy(() => import("./components/HideWhenIdle"));
const Share = lazy(() => import("./components/Share"));
const LangSwitch = lazy(() => import("./components/LangSwitch"));

const StyledBody = styled.section`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const App = () => {
  const { lang, changeLang, dicts } = useLang();
  const [start, setStart] = useState(false);
  const toggleStart = () => {
    setStart((prev) => !prev);
  };
  return (
    <Suspense fallback={<Loading />}>
      {!start && <StartBtn clickStart={toggleStart} />}
      <Header header={dicts.header} />
      <StyledBody>{start && <RelaxCircle dicts={dicts} />}</StyledBody>
      <Background start={start} reset={toggleStart} />
      <InfoModal />
      {start && <HideWhenIdle />}
      <Share />
      <LangSwitch lang={lang} changeLang={changeLang} />
    </Suspense>
  );
};
export default App;
