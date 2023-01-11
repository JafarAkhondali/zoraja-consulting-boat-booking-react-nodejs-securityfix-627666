
//
//  footer.tsx
//
//  © Zoraja Consulting. All rights reserved but even though use it.
//  vJan23
//

import React from 'react'
import styled from 'styled-components'

import { mainContentWidth, footerHeight, footerBackgroundColor } from './css-variables'

const BrachFooter = styled.footer`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 calc(calc(100% - ${mainContentWidth}px) / 2);
  height: ${footerHeight}px;
  font-size: 16px;
  font-weight: 300;
  color: #ffffff;
  background-color: ${footerBackgroundColor};
`

const Logo = styled.img`
  margin-left: 32px;
  margin-right: 128px;
`

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  height: 32px;

  & > img {
    margin-left: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`

const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 220px;

  & i {
    margin-left: 48px;

    &:hover {
      cursor: pointer;
    }
  }
`

const GoUpContainer = styled.div`
  position: absolute;
  right: 64px;
  top: calc(${footerHeight}px / 2 - 32px);
  width: 64px;
  height: 64px;
  background-color: #8296a1;

  &:hover {
    cursor: pointer;
  }
`

const GoUpArrow = styled.div`
  position: absolute;
  left: 14px;
  top: 14px;
  width: 0;
  height: 0;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-bottom: 36px solid ${footerBackgroundColor};
`

const ImpressumContainer = styled.div`
  position: absolute;
  left: calc(calc(100% - ${mainContentWidth}px) / 2 + 32px);
  bottom: 48px;
  font-size: 12px;
  font-weight: 300;
`

const Impressum = styled.span`
  padding-left: 120px;
`

const NavisYachtLink = styled.a`
  text-decoration: none;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`

export default function Footer() {
  return (
    <BrachFooter>
      <Logo src='images/logo-BRACh2.png' />
      <LinksContainer>Find us on:
        <img src='images/facebook.png' />
        <img src='images/instagram.png' />
        <img src='images/twitter.png' />
        <img src='images/youtube.png' />
      </LinksContainer>
      <ShareContainer>
        <span>Share:</span><i className='material-icons'>share</i>
      </ShareContainer>
      <GoUpContainer onClick={() => window.scrollTo(0, 0)}>
        <GoUpArrow />
      </GoUpContainer>
      <ImpressumContainer>
        <span>Boat Rent And Charter, Split 2020</span>
        <Impressum>
          Powered by: ZORAJA Consulting d.o.o. / Design: Luka Duplančić /
          <NavisYachtLink href='https://navisyachtcharter.com/' target='_blank'>
            Photos courtesy of Navis Yacht Charter Company
          </NavisYachtLink>
        </Impressum>
      </ImpressumContainer>
    </BrachFooter>
  )
}
