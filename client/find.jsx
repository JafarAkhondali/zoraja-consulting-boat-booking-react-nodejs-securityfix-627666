
//
//  find.jsx
//
//  © 2020 Zoraja Consulting. All rights reserved but even though use it.
//

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

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

class FindResults extends React.Component {
  static propTypes = {
    boats: PropTypes.object.isRequired
  }

  state = {
    showSearch: false
  }

  componentDidUpdate(prevProps) {
    if (prevProps.boats.isRequesting && !this.props.boats.isRequesting) {
      this.setState({ showSearch: true })
    }
  }

  render() {
    const { list: boatList, isRequesting, error } = this.props.boats
    const { showSearch } = this.state

    if (isRequesting) {
      return <Title>Loading...</Title>
    }

    if (!showSearch) {
      return null
    }

    if (error) {
      return <Title>An error occurred.</Title>
    }

    if (boatList.length < 1) {
      return <Title>No results.</Title>
    }

    const boatItems = boatList.map(boat => <BoatItem info={boat} key={boat.name} />)

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
}

class Find extends React.Component {
  render() {
    return (
      <Container>
        <Title>FIND A BOAT</Title>
        <Divider />
        <FindContent>
          <FindForm onGetOffer={this.getOffer} onSearch={this.search} />
        </FindContent>
        <FindResults boats={this.props.boats} />
      </Container>
    )
  }

  getOffer = type => {
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

  search = () => {
    this.props.dispatch({ type: BOATS_SEARCH_BEGIN })

    fetch('/api/v1/boats')
      .then(response => response.json())
      .then(boats => this.props.dispatch({ type: BOATS_SEARCH, payload: boats }))
      .catch(error => this.props.dispatch({ type: BOATS_SEARCH_ERROR, payload: error }))
  }
}

const mapStateToProps = state => {
  return {
    boats: state.boats
  }
}

export default connect(
  mapStateToProps,
)(Find)
