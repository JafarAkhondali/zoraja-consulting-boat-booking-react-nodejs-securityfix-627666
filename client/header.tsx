
//
//  header.tsx
//
//  © Zoraja Consulting. All rights reserved but even though use it.
//  vJan23
//

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { mainContentWidth, menuBackgroundColor } from './css-variables'

const BrachHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 0 calc(calc(100% - ${mainContentWidth}px) / 2);
  background-color: #ffffff;

  & img {
    margin-left: 32px;
  }
`

const MenuContainer = styled.div<{ open: boolean }>`
  position: relative;
  margin-right: 16px;

  & i {
    font-size: 45px;
    background-color: ${props => props.open ? menuBackgroundColor : 'transparent' };

    &:hover {
      cursor: pointer;
      background-color: ${menuBackgroundColor};
    }
  }
`

const Menu = styled.nav`
  position: absolute;
  top: 45px;
  right: 0;
  width: 256px;
  z-index: 1;
  background-color: ${menuBackgroundColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);

  & ul {
    list-style: none;
    margin: 0;
    padding: 32px;

    & li:not(:first-child) {
      padding-top: 16px;
    }

    & li a {
      font-size: 18px;
      color: #ffffff;
      text-decoration: none;

      &:hover {
        color: #0066b3;
        cursor: pointer;
      }
    }
  }
`

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <BrachHeader>
	    <img src='images/logo-BRACh1.png' />
	    <MenuContainer open={isMenuOpen}>
	      <i className='material-icons' onClick={toggleMenu}>menu</i>
	      {isMenuOpen ? (
          <Menu>
  	        <ul>
  	          <li><Link to='/'>Home</Link></li>
  	          <li><Link to='about'>About BRACh</Link></li>
  	          <li><Link to='find'>Find a boat</Link></li>
  	          <li><Link to='media'>Media</Link></li>
  	          <li><Link to='contact'>Contact</Link></li>
  	        </ul>
  	      </Menu>
        ) : null}
	    </MenuContainer>
	  </BrachHeader>
  )
}
