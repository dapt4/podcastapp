export const getPodcasts = async () => {
  const url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  const res = await fetch(url)
  return await res.json()
}

export const getPodcast = async (id: string ) => {
  const url = `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
  const res = await fetch(url)
  return await res.json()
}
