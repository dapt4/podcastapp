import { ChangeEvent } from 'react'
import { PodcastSimple } from '../../types/PodcastT'
import './Finder.scss'

interface PropsType {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  text: string
  podcast: PodcastSimple[]
}

export default function Finder ({ podcast, handleChange, text }: PropsType) {
  return (
    <div className='finder'>
      <span className='finder-badge'>{podcast.length}</span>
      <div className='finder-box'>
        <input
          onChange={handleChange}
          className='finder-input'
          value={text}
          placeholder='Filter podcasts...'
        />
      </div>
    </div>
  )
}
