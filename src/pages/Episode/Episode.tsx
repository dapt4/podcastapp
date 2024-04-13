import Description from '../../components/Description/Description'
import './Episode.scss'
import Loader from '../../components/Loader/Loader'
import useEpisode from '../../hooks/useEpisode'

export default function Episode () {
  const { isLoading, data, podcastId, track } = useEpisode()
  if (isLoading) return <Loader />
  return (
    <div className='layout'>
      {data && <Description data={data[0]} podcastId={podcastId} />}
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
