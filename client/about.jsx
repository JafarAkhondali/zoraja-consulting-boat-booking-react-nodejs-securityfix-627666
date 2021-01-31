
//
//  about.jsx
//
//  © 2020 Zoraja Consulting. All rights reserved but even though use it.
//

import React from 'react'
import styled from 'styled-components'

import { mainContentWidth } from './css-variables'

const Container = styled.main`
  width: ${mainContentWidth}px;
  margin: 0 auto;
  padding-bottom: 64px;
`

const Title = styled.h1`
  margin: 64px 0 44px 32px;
  padding: 0;
  font-size: 36px;
  font-style: normal;
  color: #4d5256;
`

const AboutContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: #ffffff;
`

const ImageCollage = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 713px;
  height: 100%;

  & img:first-child {
    margin-bottom: 4px;
  }

  & img:nth-child(2) {
    margin-right: 4px;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;

  & section {
    padding-left: 32px;
    font-weight: 300;
    line-height: 35px;
    color: #4d5256;

    & p a {
      text-decoration: underline;

      &:hover {
        cursor: pointer;
      }
    }
  }

  & section:first-child {
    font-size: 24px;

    & p {
      margin-top: 0;
    }
  }

  & section:nth-child(2) {
    font-size: 18px;

    & h3 {
      margin-bottom: 0;
    }

    & p {
      margin-top: 0
    }
  }
`

export default class About extends React.Component {
  render() {
    return (
      <Container>
        <article>
          <Title>ABOUT <strong>BRACh</strong></Title>
          <AboutContainer>
            <ImageCollage>
              <img src='images/pic1.jpg' />
              <img src='images/pic2.jpg' />
              <img src='images/pic3.jpg' />
            </ImageCollage>
            <Description>
              <section>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla quis tempor risus. Suspendisse et felis sapien. Sed
                  fringilla diam sed elementum pharetra. Maecenas magna
                  urna, dapibus a ante ut, porttitor ultrices erat.
                </p>
              </section>
              <section>
                <h3>Morbi nec lectus</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis tempor risus.
                  Suspendisse et felis sapien. Sed fringilla diam sed elementum pharetra. Maecenas magna
                  urna, dapibus a ante ut, porttitor ultrices erat. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nulla quis tempor risus. Suspendisse et felis sapien. Sed fringilla diam sed
                  elementum pharetra. Maecenas magna urna, dapibus a ante ut, porttitor ultrices
                  erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis tempor risus.
                  Suspendisse et felis sapien. Sed fringilla diam sed elementum pharetra. Maecenas magna
                  urna, dapibus a ante ut, porttitor ultrices erat.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nulla quis tempor risus. Suspendisse et felis sapien. Sed fringilla diam sed
                  elementum pharetra. Maecenas magna urna, dapibus a ante ut, porttitor ultrices erat.<br />
                  <a>Link >></a>
                </p>
              </section>
            </Description>
          </AboutContainer>
        </article>
      </Container>
    )
  }
}
