import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { getPodcast } from '../../api/podcastApi'
import './Detail.scss'
import { EpisodeT } from '../../types/EpisodeT'

export default function Detail () {
  const { podcastId } = useParams()
  const { isLoading, data } = useQuery({
    queryKey: [podcastId],
    queryFn: () => getPodcast(podcastId),
    staleTime: 1000 * 60 * 60 * 24,
    refetchInterval: 1000 * 60 * 60 * 24
  })
  const simpleDate = (rawDate: string) => {
    return rawDate.split('T')[0].replace(/-/g, '/')
  }
  const simpleDuration = (ts: number) => {
    const date = new Date(ts)
    return `${date.getHours()}:${date.getMinutes()}`
  }
  console.log(data)
  if (isLoading) return <div>Loading...</div>
  return (
    <section className='detail-view'>
      <div className='description'>
        <div className='description-image'>
          <img src={data[0].artworkUrl100} alt={data[0].collectionName} />
        </div>
        <div className='description-title'>
          <strong>{data[0].collectionCensoredName}</strong>
          <i>by {data[0].collectionName}</i>
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
      <div className='content'>
        <div className='content-title'>
          <strong>Episodes: {data.length - 1}</strong>
        </div>
        <div className='content-table'>
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
        </div>
      </div>
    </section>
  )
}
