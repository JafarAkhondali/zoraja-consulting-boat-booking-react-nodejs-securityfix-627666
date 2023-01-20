import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Home from '../client/home.tsx'

describe('Home', () => {
  test('renders Home component', () => {
    render(<Home />)

    expect(screen.getByText('Looking for The Sun and Fun')).toBeInTheDocument()
  })
})
