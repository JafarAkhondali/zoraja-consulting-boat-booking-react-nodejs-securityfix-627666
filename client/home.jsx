
//
//  home.jsx
//
//  © 2020 Zoraja Consulting. All rights reserved but even though use it.
//

import React from 'react'
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

const Gallery = styled.div`
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

const ImageButton = styled.div`
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

export default class Home extends React.Component {
  state = {
    activeIndex: 0
  }

  _imageInterval = null

  componentDidMount() {
    this.startSlideshow()
  }

  componentWillUnmount() {
    this.cleanup()
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Container>
        <Gallery activeIndex={activeIndex}>
          <img src='images/slider-1.jpg' />
          <img src='images/slider-2.jpg' />
          <img src='images/slider-3.jpg' />
          <img src='images/slider-4.jpg' />
          <ImageButtonsContainer>
            <ImageButton active={activeIndex === 0} onClick={() => this.handleClick(0)} />
            <ImageButton active={activeIndex === 1} onClick={() => this.handleClick(1)} />
            <ImageButton active={activeIndex === 2} onClick={() => this.handleClick(2)} />
            <ImageButton active={activeIndex === 3} onClick={() => this.handleClick(3)} />
          </ImageButtonsContainer>
        </Gallery>
        <TagLine>Looking for The Sun and Fun</TagLine>
        <Divider />
      </Container>
    )
  }

  handleClick = index => {
    this.selectImage(index)
    this.restartSlideshow()
  }

  selectImage = index => {
    if (this.state.activeIndex === index) {
      return
    }

    this.setState({ activeIndex: index })
  }

  startSlideshow = () => {
    this._imageInterval = setInterval(() => this.selectImage((this.state.activeIndex + 1) % 4), 5000)
  }

  cleanup = () => {
    if (this._imageInterval) {
      clearInterval(this._imageInterval)
      this._imageInterval = null
    }
  }

  restartSlideshow = () => {
    this.cleanup()
    this.startSlideshow()
  }
}
