import CustomTable from './CustomTable'
import { render, screen } from '@testing-library/react'
import data from '../../mocks/episodes.json'
import { BrowserRouter } from 'react-router-dom'

describe('test for CustomTable', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CustomTable podcastId='79687345' data={data} />
      </BrowserRouter>
    )
  })
  test('check if the thead is render', () => {
    expect(screen.findByText('Title')).toBeDefined()
  })
  test('check if a cell is render', async () => {
    const text = 'New Music Friday: The best albums out April 12'
    const cell = await screen.findByText(text)
    expect(cell).toBeDefined()
  })
})
