import { Link } from 'react-router-dom'
import './Detail.scss'
import { EpisodeT } from '../../types/EpisodeT'
import Description from '../../components/Description/Description'
import Loader from '../../components/Loader/Loader'
import useDetail from '../../hooks/useDetail'
import CustomTable from '../../components/CustomTable/CustomTable'

export default function Detail () {
  const { isLoading, data, podcastId } = useDetail()
  if (isLoading) return <Loader />
  return (
    <section className='detail-view'>
      <Description data={data[0]} podcastId={podcastId} />
      <div className='content'>
        <div className='content-title'>
          <strong>Episodes: {data.length - 1}</strong>
        </div>
        <div className='content-table'>
          <CustomTable data={data} podcastId={podcastId} />
        </div>
      </div>
    </section>
  )
}
