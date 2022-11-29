import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from 'app/components/elements/Button';
import styled from 'styled-components/macro';

export function HomePage() {
  return (
    <Wrapper>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div>
        <Button>Hello</Button>
      </div>
      <span>My HomePage</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;
