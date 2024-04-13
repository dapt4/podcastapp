import { useQuery } from '@tanstack/react-query'
import { getPodcasts } from '../api/podcastApi'
import { ChangeEvent, useState } from 'react'
import { PodcastSimple } from '../types/PodcastT'

export default function useMain () {
  const { data, isLoading } = useQuery({
    queryKey: ['podcasts'],
    queryFn: getPodcasts,
    staleTime: 1000 * 60 * 60 * 24,
    refetchInterval: 1000 * 60 * 60 * 24
  })
  const [text, setText] = useState('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  const FPodcasts = data?.filter((pod: PodcastSimple) => {
    return pod.title.toLowerCase().includes(text.toLowerCase()) ||
      pod.artist.toLowerCase().includes(text.toLowerCase())
  })
  return {
    isLoading,
    text,
    handleChange,
    FPodcasts
  }
}
