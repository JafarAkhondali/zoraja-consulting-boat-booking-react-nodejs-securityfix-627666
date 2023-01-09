
//
//  contact.jsx
//
//  © 2022 Zoraja Consulting. All rights reserved but even though use it.
//

import React from 'react'
import styled from 'styled-components'

import { mainContentWidth } from './css-variables'

const Container = styled.main`
  min-height: calc(100% - 72px - 256px - 32px);
  width: 100%;
  padding: 16px 0;
  background-color: #6ac4ef;
  background-repeat: no-repeat;
  background-position: right center;
`

const Title = styled.h1`
  margin: 64px 0 16px calc(calc(100% - ${mainContentWidth}px) / 2);
  padding-left: 32px;
  font-size: 36px;
  font-weight: 400;
  color: #ffffff;
`

const ContactContainer = styled.div`
  display: flex;
  margin: 32px calc(calc(100% - ${mainContentWidth}px) / 2);
  padding-left: 32px;
  color: #ffffff;

  & form {
    display: flex;
  }
`

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 32px;

  & fieldset {
    margin: 0;
    padding: 0;
    border: none;

    & legend {
      margin-bottom: 4px;
      font-size: 16px;
      font-weight: 400;
    }

    & input,
    & textarea {
      width: 156px;
      height: 24px;
      padding: 4px;
      border: none;
      color: #606970;
      background-color: #b5e2f7;
      font-family: 'Roboto', sans-serif;

      &:focus {
        outline: none;
        outline-offset: 0;
      }
    }

    & textarea {
      width: 452px;
      height: 164px;
      resize: none;
    }
  }

  & fieldset:not(:first-child) {
    margin-top: 16px;
  }
`

const SendContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  & span {
    font-size: 16px;
    font-weight: 300;
  }

  & button {
    width: 96px;
    height: 48px;
    border: none;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    color: #6ac4ef;
    background-color: #ffffff;

    &:hover {
      cursor: pointer;
      background-color: #0066b3;
    }
  }
`

const PdpContainer = styled.div`
  width: 256px;
  margin-top: 24px;
  font-size: 14px;
  font-weight: 300;

  & input {
    margin: 4px
  }

  & label {
    vertical-align: top;
  }

  & span {
    display: block;
    margin-left: 4px;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-left: 64px;
  font-size: 16px;
  font-weight: 300;

  & p {
    margin: 8px 0;
  }
`

const TelephoneNumber = styled.span`
  padding: 4px;
  border-radius: 8px;
  color: #0066b3;
  background-color: #b5e2f7;
`

const ContactEmail = styled.span`
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`

export default function Contact() {
  return (
    <Container>
      <Title>CONTACT</Title>
      <ContactContainer>
        <form action='/api/v1/contact-message' method='post'>
          <FormColumn>
            <fieldset>
              <legend>Name</legend>
              <input type='text' name='name' />
            </fieldset>
            <fieldset>
              <legend>Surname</legend>
              <input type='text' name='surname' />
            </fieldset>
            <fieldset>
              <legend>E-mail*</legend>
              <input type='email' name='email' required />
            </fieldset>
          </FormColumn>

          <FormColumn>
            <fieldset>
              <legend>Message*</legend>
              <textarea name='message' required></textarea>
            </fieldset>
            <SendContainer>
              <span>* Must fill out</span>
              <button type='submit'>SEND</button>
            </SendContainer>
          </FormColumn>
        </form>
        <PdpContainer>
          <input type='checkbox' name='pdp' id='pdp-checkbox' />
          <label htmlFor='pdp-checkbox'>Personal Data Protection</label>
          <span>
            I agree to use my e-mail address
            for my personal needs as a recommendation
            and offer your services.
            Logging out the mailng list is possible in
            any moment, and checkout instructions
            are in every mail.
          </span>
        </PdpContainer>
        <InfoContainer>
          <p>
            <strong>BRACh</strong><br />
            Boat Rent And Charter
          </p>
          <p>
            Address:<br />
            Splitska Street, 21000 Split, Croatia
          </p>
          <p>
            Telephone:<br />
            <TelephoneNumber>+385 (0)21 123 456</TelephoneNumber>
          </p>
          <p>
            E-mail:<br />
            <ContactEmail>info@brach.com</ContactEmail>
          </p>
        </InfoContainer>
      </ContactContainer>
    </Container>
  )
}
