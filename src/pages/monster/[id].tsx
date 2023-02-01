import { useLocation } from 'react-router-dom';
import { getMonsterById, getPath } from '../../helpers/helpers';

// const history = useHistory()
// history.location.pathname

const MonsterInformation = () => {
  const location = useLocation()
  const monsterId: number = parseInt(location.pathname.split('/')[2])
  const monster = getMonsterById(monsterId)
  return (
    <div>
      <img
        src={getPath(`/assets/monsters/${monsterId}`)}
        alt={"pas encore d'image pour: " + monster?.name}
        className='mt-8 text-center mx-auto text-white'
      />
      {location.pathname}
    </div>
  )
}

export default MonsterInformation
