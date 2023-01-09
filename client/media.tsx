
//
//  media.tsx
//
//  © 2022 Zoraja Consulting. All rights reserved but even though use it.
//

import React from 'react'
import styled from 'styled-components'

import { mainContentWidth } from './css-variables'

const Container = styled.main`
  width: ${mainContentWidth}px;
  min-height: calc(100% - 72px - 256px - 84px);
  margin: 0 auto;
  padding-bottom: 64px;
`

const Title = styled.h1`
  margin: 20px 36px;
  font-size: 20px;
`

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export default function Media() {
  return (
    <Container>
      <Title>Media</Title>
      <VideoContainer>
        <video src="videos/promo-video.mp4" controls width="800"></video>
      </VideoContainer>
    </Container>
  )
}
