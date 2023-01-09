
//
//  find.jsx
//
//  © 2022 Zoraja Consulting. All rights reserved but even though use it.
//

import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { usePrevious } from './hooks'
import FindForm, { FormButton } from './find-form.jsx'
import {
  BOATS_SEARCH_BEGIN,
  BOATS_SEARCH_ERROR,
  BOATS_SEARCH
} from './actions'

import { mainContentWidth } from './css-variables'

const Container = styled.main`
  min-height: calc(100% - 72px - 256px - 32px);
  width: 100%;
  padding: 16px 0;
  background-color: #8d949a;
  background-image: url('../images/pic-durbin.png');
  background-repeat: no-repeat;
  background-position: right 156px;
`

const Title = styled.h1`
  margin: 64px 0 16px calc(calc(100% - ${mainContentWidth}px) / 2);
  padding-left: 32px;
  font-size: 36px;
  font-weight: 400;
  color: #ffffff;
`

const Divider = styled.hr`
  margin: 0;
  padding: 0;
`

const FindContent = styled.div`
  display: flex;
  margin: 32px calc(calc(100% - ${mainContentWidth}px) / 2);
  padding-left: 32px;
  color: #ffffff;

  & form {
    display: flex;
    flex-direction: column;
  }
`

const BoatList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  column-gap: 8px;
  row-gap: 24px;
  width: 100%;
`

const BoatItemContainer = styled.div`
  padding: 8px;
  background-color: #ffffff;
`

const BoatImage = styled.img`
  width: 100%;
  height: 256px;
  object-fit: cover;
`

const BoatDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`

const DescriptionText = styled.span`
  font-size: 24px;
  line-height: 32px;
  color: #4d5256;
`

const NameText = styled(DescriptionText)`
  padding-bottom: 8px;
  font-weight: 800;
  color: #0066b3;
`

const BoatName = styled(NameText)`
  text-transform: uppercase;
`

const BoatType = styled(DescriptionText)`
  text-transform: capitalize;
`

const InquireButton = styled(FormButton)`
  width: 100%;
`

const BoatItem = props => {
  const { info: { name, type, length, price } } = props

  return (
    <BoatItemContainer>
      <BoatImage src={`images/boats/${encodeURIComponent(name)}-01.jpg`} />
      <BoatDescription>
        <NameText>Boat name: <BoatName>{name}</BoatName></NameText>
        <DescriptionText>Category/Type: <BoatType>{type}</BoatType></DescriptionText>
        <DescriptionText>Length: {length} m</DescriptionText>
        <DescriptionText>Price: {price} Eur</DescriptionText>
        <InquireButton>Inquire now</InquireButton>
      </BoatDescription>
    </BoatItemContainer>
  )
}

function FindResults(props) {
  const { boats: { list: boatList, isRequesting, error } } = props
  const [showSearch, setShowSearch] = useState(false)
  const prevIsRequesting = usePrevious(isRequesting)

  const boatItems = useMemo(
    () => boatList.map(boat => <BoatItem info={boat} key={boat.name} />),
    [boatList],
  )

  useEffect(() => {
    if (isRequesting && !prevIsRequesting) {
      setShowSearch(true)
    }
  }, [isRequesting])

  if (isRequesting) {
    return <Title>Loading...</Title>
  }

  if (!showSearch) {
    return null
  }

  if (error) {
    return <Title>An error occurred.</Title>
  }

  if (boatItems.length < 1) {
    return <Title>No results.</Title>
  }

  return (
    <>
      <Title>RESULTS</Title>
      <Divider />
      <FindContent>
        <BoatList>
          {boatItems}
        </BoatList>
      </FindContent>
    </>
  )
}

export default function Find() {
  const dispatch = useDispatch()
  const boats = useSelector(state => state.boats)

  const getOffer = type => {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText))
          } else {
            console.log('An error occurred during the request.')
          }
        }
    };

    xhr.open('GET', `/api/v1/boats/offers?type=${type}`)
    xhr.send()
  }

  const search = () => {
    dispatch({ type: BOATS_SEARCH_BEGIN })

    fetch('/api/v1/boats')
      .then(response => response.json())
      .then(boats => dispatch({ type: BOATS_SEARCH, payload: boats }))
      .catch(error => dispatch({ type: BOATS_SEARCH_ERROR, payload: error }))
  }

  return (
    <Container>
      <Title>FIND A BOAT</Title>
      <Divider />
      <FindContent>
        <FindForm onGetOffer={getOffer} onSearch={search} />
      </FindContent>
      <FindResults boats={boats} />
    </Container>
  )
}
