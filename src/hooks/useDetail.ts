import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getPodcast } from '../api/podcastApi'

export default function useDetail () {
  const { podcastId } = useParams()
  const { isLoading, data } = useQuery({
    queryKey: [podcastId],
    queryFn: () => getPodcast(podcastId),
    staleTime: 1000 * 60 * 60 * 24,
    refetchInterval: 1000 * 60 * 60 * 24
  })
  return { isLoading, data, podcastId }
}
