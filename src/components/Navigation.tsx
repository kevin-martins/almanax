import Redirection from './Redirection'

const Navigation = () => {
  return (
    <nav className='relative bg-gray-800 z-50 py-6 text-white text-xl shadow-xl sticky top-0'>
      <div className='w-max mx-auto flex gap-5'>
        <Redirection to='/' className='hover:text-yellow-500' children='Accueil' />
        <Redirection to='/almanax' className='hover:text-yellow-500' children='Almanax' />
        <Redirection to='/forgemagie' className='hover:text-yellow-500' children='Forgemagie' />
      </div>
    </nav>
  )
}

export default Navigation