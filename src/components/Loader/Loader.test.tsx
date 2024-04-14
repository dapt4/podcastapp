import Loader from './Loader'
import { render, screen } from '@testing-library/react'

describe('test for Loader', () => {
  test('check if render', () => {
    render(<Loader />)
    expect(screen.findByRole('div')).toBeDefined()
    expect(screen.findByRole('i')).toBeDefined()
  })
})
