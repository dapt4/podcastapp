import { Link } from 'react-router-dom'
import { PodcastDescriptionT } from '../../types/PodcastDescription'
import './Description.scss'

interface PropsType {
  data: PodcastDescriptionT
  podcastId: string | undefined
}

export default function Description ({ data, podcastId }:PropsType) {
  return (
    <div className='description'>
      <div className='description-image'>
        <Link to={`/podcast/${podcastId}`}>
          <img src={data.artworkUrl100} alt={data.collectionName} />
        </Link>
      </div>
      <div className='description-title'>
        <Link to={`/podcast/${podcastId}`}>
          <strong>{data.collectionCensoredName}</strong>
        </Link>
        <i>by {data.collectionName}</i>
      </div>
      <div className='description-desc'>
        <strong>
          Description:
        </strong>
        <p>A podcast where musicians take apart their songs,
          and price, tell the story of how they where made
        </p>
      </div>
    </div>
  )
}
