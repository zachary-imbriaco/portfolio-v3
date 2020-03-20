import { render, cleanup } from '@testing-library/react'

import ProjectlistPage from './ProjectlistPage'

describe('ProjectlistPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectlistPage />)
    }).not.toThrow()
  })
})
