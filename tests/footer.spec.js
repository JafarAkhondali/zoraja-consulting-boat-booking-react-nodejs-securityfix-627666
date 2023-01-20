import React from 'react'
import renderer from 'react-test-renderer'

import Footer from '../client/footer.tsx'

describe('footer', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Footer />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
