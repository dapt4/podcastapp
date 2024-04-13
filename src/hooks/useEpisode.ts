import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getPodcast } from '../api/podcastApi'
import { EpisodeD } from '../types/EpisodeD'

export default function useEpisode () {
  const { podcastId, episodeId } = useParams()

  const { isLoading, data } = useQuery({
    queryKey: [podcastId],
    queryFn: () => getPodcast(podcastId),
    staleTime: 1000 * 60 * 60 * 24,
    refetchInterval: 1000 * 60 * 60 * 24
  })

  const track = episodeId && data?.find(
    (episode: EpisodeD) => episode.trackId === parseInt(episodeId))

  return { isLoading, data, podcastId, track }
}
