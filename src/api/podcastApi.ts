import { PodcastT } from '../types/PodcastT'

export const getPodcasts = async () => {
  const url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  const res = await fetch(url)
  const data = await res.json()
  const result = data.feed.entry.map((podcast:PodcastT) => (
    {
      id: podcast.id.attributes['im:id'],
      title: podcast['im:name'].label,
      artist: podcast['im:artist'].label,
      image: podcast['im:image'][0].label
    }
  ))
  return result
}

export const getPodcast = async (id: string | undefined) => {
  if (id === undefined) return {}
  const url = `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
  const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
  const data = res.ok ? await res.json() : {}
  return JSON.parse(data.contents).results
}
