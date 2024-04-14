import Main from './Main'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

describe('test for the main page', () => {
  beforeEach(() => {
    const queryClient = new QueryClient()
    render(
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    )
  })
  test('check if th counter works', () => {
    expect(screen.findByText('100')).toBeDefined()
  })
  test('check if the input (finder) is render', () => {
    expect(screen.findByPlaceholderText('Filter podcasts...')).toBeDefined()
  })
  test('check if render a card', () => {
    expect(screen.findByText(/Artist:/i)).toBeDefined()
  })
})
