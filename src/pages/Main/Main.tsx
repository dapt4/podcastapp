import { useQuery } from '@tanstack/react-query'
import { getPodcasts } from '../../api/podcastApi'
import { PodcastSimple } from '../../types/PodcastT'
import './Main.scss'
import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'

export default function Main () {
  const navigate = useNavigate()
  const { data, isLoading } = useQuery({
    queryKey: ['podcasts'],
    queryFn: getPodcasts,
    staleTime: 1000 * 60 * 60 * 24,
    refetchInterval: 1000 * 60 * 60 * 24
  })
  const [text, setText] = useState('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  const FPodcasts = data?.filter((pod: PodcastSimple) => {
    return pod.title.toLowerCase().includes(text.toLowerCase()) ||
      pod.artist.toLowerCase().includes(text.toLowerCase())
  })
  const handleClick = (id: string) => navigate(`/podcast/${id}`)
  if (isLoading) return <Loader />
  return (
    <>
      <div className='finder'>
        <span className='finder-badge'>{FPodcasts.length}</span>
        <div className='finder-box'>
          <input
            onChange={handleChange}
            className='finder-input'
            value={text}
            placeholder='Filter podcasts...'
          />
        </div>
      </div>
      <div className='podcast'>
        {FPodcasts && FPodcasts.map(({ id, title, artist, image }: PodcastSimple) => (
          <div key={id} className='podcast-element' onClick={() => handleClick(id)}>
            <div className='podcast-image'>
              <img src={image} alt={title} />
            </div>
            <strong className='podcast-title'>{title}</strong>
            <p className='podcast-author'>Artist: {artist}</p>
          </div>
        ))}
      </div>
    </>
  )
}
