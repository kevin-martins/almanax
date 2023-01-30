import { cardOptions } from '../api/cards'
import { capitalize } from '../helpers/helpers'
import Redirection from './Redirection'

const Navigation = () => {
  return (
    <nav className='relative bg-gray-800 z-50 py-6 text-white text-xl shadow-xl sticky top-0'>
      <div className='w-max mx-auto flex gap-5'>
        <Redirection to='/' className='hover:text-yellow-500' children='Accueil' />
        {cardOptions.map(option => (
          <Redirection to={option.to} className='hover:text-yellow-500' children={capitalize(option.name)} />
        ))}
      </div>
    </nav>
  )
}

export default Navigation