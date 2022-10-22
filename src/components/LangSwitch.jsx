import styled from "styled-components";

const StyledWrapper = styled.div`
  z-index: 998;
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  margin-bottom: 36px;
  overflow: hidden;
  input {
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
    &:checked + label {
      background-color: rgba(6, 124, 10, 0.6);
      box-shadow: none;
      color: #fff;
    }
  }
  label {
    background-color: #e4e4e4;
    color: #666;
    font-size: 0.6rem;
    line-height: 1;
    text-align: center;
    padding: 0.2rem 0.4rem;
    margin-right: -1px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3),
      0 1px rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease-in-out;
    &:hover {
      cursor: pointer;
    }
    &:first-of-type {
      border-radius: 4px 0 0 4px;
    }
    &:last-of-type {
      border-radius: 0 4px 4px 0;
    }
  }
`;
export default function LangSwitch({ lang, changeLang }) {
  const handleLangChange = (evt) => {
    console.log(evt.target.value);
    changeLang(evt.target.value);
  };
  return (
    <StyledWrapper className="idleHide">
      <input
        onChange={handleLangChange}
        type="radio"
        id="radio-en"
        name="lang"
        value="en"
        checked={lang === "en"}
      />
      <label htmlFor="radio-en">English</label>
      <input
        onChange={handleLangChange}
        type="radio"
        id="radio-zh"
        name="lang"
        value="zh"
        checked={lang === "zh"}
      />
      <label htmlFor="radio-zh">中文</label>
    </StyledWrapper>
  );
}
