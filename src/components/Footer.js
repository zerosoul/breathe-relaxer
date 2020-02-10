import React from 'react';
import styled from 'styled-components';
import GitHubButton from 'react-github-btn';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
  justify-content: center;
  align-items: center;
  .info {
    margin: 0.8rem 0;
  }
`;
export default function Footer() {
  return (
    <Wrapper>
      <GitHubButton
        href="https://github.com/zerosoul/breathe-relaxer"
        data-show-count="true"
        aria-label="Star breathe-relaxer on GitHub"
      >
        Star
      </GitHubButton>
      <div className="info">
        <span> Copyright © {new Date().getFullYear()} By </span>
        <a rel="noopener noreferrer" href="https://yangerxiao.com" target="_blank">
          Tristan
        </a>
      </div>
    </Wrapper>
  );
}
