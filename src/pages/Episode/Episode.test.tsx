import Episode from './Episode'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

describe('test for the Episode page', () => {
  beforeEach(() => {
    const queryClient = new QueryClient()
    render(
      <QueryClientProvider client={queryClient}>
        <Episode />
      </QueryClientProvider>
    )
  })
  test('check if the play card is render', () => {
    expect(screen.findByRole('h1')).toBeDefined()
  })
  test('check if the Description card is render', () => {
    expect(screen.findByText(/Description:/)).toBeDefined()
  })
  test('check if the audio tag is render', () => {
    expect(screen.findByText('Your browser does not support the audio element.')).toBeDefined()
  })
})
