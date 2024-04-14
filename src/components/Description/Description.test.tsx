import Description from './Description'
import { render, screen } from '@testing-library/react'
import data from '../../mocks/description.json'
import { BrowserRouter } from 'react-router-dom'

describe('test for Description', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Description podcastId='79687345' data={data} />
      </BrowserRouter>
    )
  })
  test('check if the image has the url', async () => {
    const image = await screen.findByRole('img') as HTMLImageElement
    expect(image.src).toContain('https://is1-ssl.mzstatic.com')
  })
  test('check if the title is render', () => {
    expect(screen.findByText('All Songs Considered')).toBeDefined()
  })
})
