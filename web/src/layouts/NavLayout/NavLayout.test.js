import { render, cleanup } from '@testing-library/react'

import NavLayout from './NavLayout'

describe('NavLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<NavLayout />)
    }).not.toThrow()
  })
})
