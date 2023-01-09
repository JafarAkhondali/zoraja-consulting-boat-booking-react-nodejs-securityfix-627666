
//
//  home.tsx
//
//  © 2022 Zoraja Consulting. All rights reserved but even though use it.
//

import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { mainContentWidth } from './css-variables'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${mainContentWidth}px;
  margin: 0 auto;
  padding-bottom: 64px;
`

const Gallery = styled.div<{ activeIndex: number }>`
  position: relative;

  & img {
    display: none;
  }

  & img:nth-child(${props => props.activeIndex + 1}) {
    display: block;
    width: ${mainContentWidth}px;
  }
`

const ImageButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  width: 100%;
`

const ImageButton = styled.div<{ active: boolean }>`
  width: 20px;
  height: 20px;
  opacity: ${props => props.active ? 1 : 0.5};
  background-color: ${props => props.active ? '#ededed' : '#ffffff'};

  &:hover {
    cursor: pointer;
  }

  &:not(:first-child) {
    margin-left: 16px;
  }
`

const TagLine = styled.h1`
  margin: 0;
  margin-top: 48px;
  padding-bottom: 8px;
  font-size: 64px;
  font-style: italic;
  font-weight: 100;
  color: #8d949a;
`

const Divider = styled.hr`
  width: 410px;
  margin: 0;
  border-width: 2px;
`

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)
  const _imageInterval = useRef<ReturnType<typeof setInterval>>()

  const selectImage = useCallback(
    (index: number) => {
      if (activeIndex === index) {
        return
      }

      setActiveIndex(index)
    },
    [activeIndex],
  )

  const startSlideshow = useCallback(
    () => {
      _imageInterval.current = setInterval(() => selectImage((activeIndex + 1) % 4), 5000)
    },
    [activeIndex, selectImage],
  )

  const cleanup = useCallback(
    () => {
      if (_imageInterval.current) {
        clearInterval(_imageInterval.current)
        _imageInterval.current = undefined
      }
    },
    [],
  )

  useEffect(() => {
    startSlideshow()

    return () => cleanup()
  }, [startSlideshow, cleanup])

  const restartSlideshow = () => {
    cleanup()
    startSlideshow()
  }

  const handleClick = (index: number) => {
    selectImage(index)
    restartSlideshow()
  }

  return (
    <Container>
      <Gallery activeIndex={activeIndex}>
        <img src='images/slider-1.jpg' />
        <img src='images/slider-2.jpg' />
        <img src='images/slider-3.jpg' />
        <img src='images/slider-4.jpg' />
        <ImageButtonsContainer>
          <ImageButton active={activeIndex === 0} onClick={() => handleClick(0)} />
          <ImageButton active={activeIndex === 1} onClick={() => handleClick(1)} />
          <ImageButton active={activeIndex === 2} onClick={() => handleClick(2)} />
          <ImageButton active={activeIndex === 3} onClick={() => handleClick(3)} />
        </ImageButtonsContainer>
      </Gallery>
      <TagLine>Looking for The Sun and Fun</TagLine>
      <Divider />
    </Container>
  )
}
