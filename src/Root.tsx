import { Link, Outlet, useNavigation } from 'react-router-dom'
import './Root.scss'

export default function Root () {
  const navigation = useNavigation()
  return (
    <>
      <header className='root-header'>
        <Link className='root-link' to='/'>
          <strong>Pod</strong>
          <span>caster</span>
        </Link>
        <span className='root-separator' />
        {navigation.state === 'loading' && <i className='root-loader' />}
      </header>
      <Outlet />
    </>
  )
}
