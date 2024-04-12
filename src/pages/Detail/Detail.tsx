import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { getPodcast } from '../../api/podcastApi'
import './Detail.scss'
import { EpisodeT } from '../../types/EpisodeT'
import Description from '../../components/Description/Description'
import Loader from '../../components/Loader/Loader'

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
  if (isLoading) return <Loader />
  return (
    <section className='detail-view'>
      <Description data={data[0]} />
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
