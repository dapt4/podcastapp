import PodCard from './PodCard'
import { render, screen } from '@testing-library/react'
import data from '../../mocks/podcasts.json'
import { BrowserRouter } from 'react-router-dom'

describe('test for PodCard', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <PodCard data={data[0]} />
      </BrowserRouter>
    )
  })
  test('check if render', () => {
    expect(screen.findByText(/Artist:/i)).toBeDefined()
  })
  test('check if the image has the url', async () => {
    const image = await screen.findByRole('img') as HTMLImageElement
    expect(image.src).toContain('https://is1-ssl.mzstatic.com')
  })
  test('check the name of podcast', () => {
    expect(screen.findByText(/The Joe Budden Podcast/i))
  })
})
