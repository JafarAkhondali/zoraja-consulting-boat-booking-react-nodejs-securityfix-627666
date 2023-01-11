
//
//  find-form.tsx
//
//  © Zoraja Consulting. All rights reserved but even though use it.
//  vJan23
//

import React from 'react'
import styled from 'styled-components'

export const FormButton = styled.button`
  align-self: center;
  width: 152px;
  height: 48px;
  margin-top: 20px;
  border: none;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #6ac4ef;

  &:hover {
    cursor: pointer;
    background-color: #0066b3;
  }

  &:focus {
    outline: none;
  }
`

const FieldsContainer = styled.div`
  display: flex;
  align-items: flex-start;

  & fieldset {
    margin: 0;
    padding: 0;
    border: none;

    & legend {
      margin-bottom: 8px;
      font-size: 16px;
      font-weight: 400;
    }

    & p {
      display: flex;
      align-items: center;
      margin: 8px 0;
      font-size: 14px;
      font-weight: 300;

      & input {
        margin: 0;
      }

      & label {
        padding-left: 8px;
      }
    }
  }

  & fieldset:not(:first-child) {
    margin-left: 96px;
  }

  & fieldset:last-child {
    display: flex;
    flex-direction: column;

    & ${FormButton} {
      width: 228px;
      font-size: 16px;
      background-color: #0066b3;

      &:hover {
        cursor: pointer;
        background-color: #6ac4ef;
      }
    }
  }
`

const TextInput = styled.input`
  width: 156px;
  height: 24px;
  padding: 4px;
  border: none;
  color: #757d84;
  background-color: #c6cacd;
  font-family: 'Roboto', sans-serif;

  &:focus {
    outline: none;
    outline-offset: 0;
  }
`

const StyledSelect = styled(TextInput)`
  height: 32px;
`

const SearchContainer = styled.div`
  position: relative;
  width: 220px;

  & ${TextInput} {
    width: 100%;
  }

  & i {
    position: absolute;
    top: 4px;
    right: 0;
    color: #8d949a;
    user-select: none;
  }
`

export type OfferType = 'best' | 'popular'

export interface FindFormProps {
  onGetOffer: (offerType: OfferType) => void
  onSearch: () => void
}

export default function FindForm(props: FindFormProps) {
  const { onGetOffer, onSearch } = props

  const onBestOffersClick = () => {
    onGetOffer('best')
  }

  const onMostPopularClick = () => {
    onGetOffer('popular')
  }

  const onSearchClick = () => {
    onSearch()
  }

  return (
    <form action=''>
      <FieldsContainer>
        <fieldset>
          <legend>Category/Type</legend>
          <p>
            <input type='radio' name='type' id='type_1' value='sailing' />
            <label htmlFor='type_1'>Sailing</label>
          </p>
          <p>
            <input type='radio' name='type' id='type_2' value='yacht' />
            <label htmlFor='type_2'>Yacht</label>
          </p>
          <p>
            <input type='radio' name='type' id='type_3' value='catamaran' />
            <label htmlFor='type_3'>Catamaran</label>
          </p>
          <p>
            <input type='radio' name='type' id='type_4' value='all' />
            <label htmlFor='type_4'>All</label>
          </p>
        </fieldset>

        <fieldset>
          <legend>Price Range</legend>
          <p>
            <input type='radio' name='price' id='price_1' value='price1' />
            <label htmlFor='price_1'>500 - 1000 Eur</label>
          </p>
          <p>
            <input type='radio' name='price' id='price_2' value='price2' />
            <label htmlFor='price_2'>1000 - 2000 Eur</label>
          </p>
          <p>
            <input type='radio' name='price' id='price_3' value='price3' />
            <label htmlFor='price_3'>2000 - 4000 Eur</label>
          </p>
          <p>
            <input type='radio' name='price' id='price_4' value='price4' />
            <label htmlFor='price_4'>4000 - 10000 Eur</label>
          </p>
          <p>
            <input type='radio' name='price' id='price_5' value='price5' />
            <label htmlFor='price_5'>10000 - 15000 Eur</label>
          </p>
        </fieldset>

        <fieldset>
          <legend>Length</legend>
          <p>
            <input type='radio' name='length' id='length_1' value='length1' />
            <label htmlFor='length_1'>6 - 9 m</label>
          </p>
          <p>
            <input type='radio' name='length' id='length_2' value='length2' />
            <label htmlFor='length_2'>9 - 15 m</label>
          </p>
          <p>
            <input type='radio' name='length' id='length_3' value='length3' />
            <label htmlFor='length_3'>15 - 20 m</label>
          </p>
          <p>
            <input type='radio' name='length' id='length_4' value='length4' />
            <label htmlFor='length_4'>20 - &gt; m</label>
          </p>
        </fieldset>

        <fieldset>
          <legend>Departure Port</legend>
          <StyledSelect as='select' name='departurePort'>
            <option value='rijeka'>Rijeka</option>
            <option value='cres'>Cres</option>
            <option value='split'>Split</option>
            <option value='zadar'>Zadar</option>
            <option value='šibenik'>Šibenik</option>
            <option value='biograd'>Biograd</option>
          </StyledSelect>
        </fieldset>

        <fieldset>
          <legend>Departure/Arrival Date</legend>
          <TextInput type='text' name='date' defaultValue='06.07 - 13.07.2018.' autoComplete='off' />
        </fieldset>

        <fieldset>
          <legend>Search boats by name</legend>
          <SearchContainer>
            <TextInput type='text' name='search' />
            <i className='material-icons'>search</i>
          </SearchContainer>
          <FormButton type='button' onClick={onBestOffersClick}>Best offers</FormButton>
          <FormButton type='button' onClick={onMostPopularClick}>Most popular boats</FormButton>
        </fieldset>
      </FieldsContainer>
      <FormButton type='button' onClick={onSearchClick}>Search</FormButton>
    </form>
  )
}
