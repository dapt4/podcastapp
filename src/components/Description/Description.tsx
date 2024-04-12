import { PodcastDescriptionT } from '../../types/PodcastDescription'
import './Description.scss'

interface PropsType {
  data: PodcastDescriptionT
}

export default function Description ({ data }:PropsType) {
  return (
    <div className='description'>
      <div className='description-image'>
        <img src={data.artworkUrl100} alt={data.collectionName} />
      </div>
      <div className='description-title'>
        <strong>{data.collectionCensoredName}</strong>
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
