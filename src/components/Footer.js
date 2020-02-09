import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  font-size: 0.6rem;
  justify-content: center;
  align-items: center;
`;
export default function Footer() {
  return (
    <Wrapper>
      <span>
        <span> Copyright © {new Date().getFullYear()} By </span>
        <a rel="noopener noreferrer" href="https://yangerxiao.com" target="_blank">
          Tristan
        </a>
      </span>
    </Wrapper>
  );
}
