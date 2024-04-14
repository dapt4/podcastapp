import Detail from './Detail'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

describe('test for the Detail page', () => {
  beforeEach(() => {
    const queryClient = new QueryClient()
    render(
      <QueryClientProvider client={queryClient}>
        <Detail />
      </QueryClientProvider>
    )
  })
  test('check if the counter works', () => {
    expect(screen.findByText(/Episodes:/i)).toBeDefined()
  })
  test('check if the Description card is render', () => {
    expect(screen.findByText(/Description:/)).toBeDefined()
  })
  test('check if the table is render', () => {
    expect(screen.findByText(/title:/i)).toBeDefined()
  })
})
