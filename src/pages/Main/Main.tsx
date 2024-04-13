import { useQuery } from '@tanstack/react-query'
import { getPodcasts } from '../../api/podcastApi'
import { PodcastSimple } from '../../types/PodcastT'
import './Main.scss'
import Loader from '../../components/Loader/Loader'
import PodCard from '../../components/PodCard/PodCard'
import Finder from '../../components/Finder/Finder'
import useMain from '../../hooks/useMain'

export default function Main () {
  const { isLoading, text, handleChange, FPodcasts } = useMain()
  if (isLoading) return <Loader />
  return (
    <>
      <Finder podcast={FPodcasts} text={text} handleChange={handleChange} />
      <div className='podcast'>
        {FPodcasts && FPodcasts.map((podcast: PodcastSimple) => (
          <PodCard key={podcast.id} data={podcast} />
        ))}
      </div>
    </>
  )
}
