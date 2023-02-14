import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Button } from 'app/components/elements/Button'
import styled from 'styled-components/macro'
import { messages } from 'app/pages/HomePage/messages'

export function HomePage() {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div>
        <Title>Hello World</Title>
        <Button>{t(messages.routingTitle())}</Button>
      </div>
      <p>{t(messages.routingDescription())}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`

const Title = styled.h1`
  text-align: center;
`
