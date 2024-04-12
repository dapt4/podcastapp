import { useParams } from 'react-router-dom'
import { getPodcast } from '../../api/podcastApi'
import { useQuery } from '@tanstack/react-query'
import Description from '../../components/Description/Description'
import './Episode.scss'
import { EpisodeD } from '../../types/EpisodeD'
import Loader from '../../components/Loader/Loader'

export default function Episode () {
  const { podcastId, episodeId } = useParams()

  const { isLoading, data } = useQuery({
    queryKey: [podcastId],
    queryFn: () => getPodcast(podcastId),
    staleTime: 1000 * 60 * 60 * 24,
    refetchInterval: 1000 * 60 * 60 * 24
  })

  const track = episodeId && data?.find((episode: EpisodeD) => episode.trackId === parseInt(episodeId))
  if (isLoading) return <Loader />
  return (
    <div className='layout'>
      {data && <Description data={data[0]} />}
      {
        track && (
          <div className='episode'>
            <h1>
              <strong>{track.trackName}</strong>
            </h1>
            <p dangerouslySetInnerHTML={{ __html: track.description }} />
            <audio className='episode-player' src={track.episodeUrl} controls>
              Your browser does not support the audio element.
            </audio>
          </div>
        )
      }
    </div>
  )
}
