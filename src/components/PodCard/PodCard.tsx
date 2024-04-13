import { useNavigate } from 'react-router-dom'
import { PodcastSimple } from '../../types/PodcastT'
import './PodCard.scss'

interface PropsType {
  data: PodcastSimple
}

export default function PodCard ({ data }: PropsType) {
  const navigate = useNavigate()
  const handleClick = (id: string) => navigate(`/podcast/${id}`)
  return (
    <div key={data.id} className='podcast-element' onClick={() => handleClick(data.id)}>
      <div className='podcast-image'>
        <img src={data.image} alt={data.title} />
      </div>
      <strong className='podcast-title'>{data.title}</strong>
      <p className='podcast-author'>Artist: {data.artist}</p>
    </div>
  )
}
