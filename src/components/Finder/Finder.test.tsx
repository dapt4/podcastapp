import Finder from './Finder'
import { fireEvent, render, screen } from '@testing-library/react'
import data from '../../mocks/podcasts.json'
import { vi } from 'vitest'

describe('test for Finder', () => {
  test('check how many times the event is fired', async () => {
    const mockFn = vi.fn()
    render(<Finder podcast={data} text='' handleChange={mockFn} />)
    const input = await screen.findByPlaceholderText('Filter podcasts...')
    fireEvent.input(input, { target: { value: 'Joe' } })
    expect(input).toBeDefined()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
