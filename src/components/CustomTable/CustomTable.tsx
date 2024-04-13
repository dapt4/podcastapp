import { Link } from 'react-router-dom'
import { EpisodeT } from '../../types/EpisodeT'

interface PropsType{
  data: EpisodeT[]
  podcastId: string | undefined
}

export default function CustomTable ({ data, podcastId }: PropsType) {
  const simpleDate = (rawDate: string) => {
    return rawDate.split('T')[0].replace(/-/g, '/')
  }
  const simpleDuration = (ts: number) => {
    const date = new Date(ts)
    return `${date.getHours()}:${date.getMinutes()}`
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((episode: EpisodeT, index: number) => {
          if (index === 0) return ''
          return (
            <tr key={episode.trackId}>
              <td><Link to={`/podcast/${podcastId}/episode/${episode.trackId}`}> {episode.trackName}</Link></td>
              <td>{simpleDate(episode.releaseDate)}</td>
              <td className='td-center'>{simpleDuration(episode.trackTimeMillis)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
