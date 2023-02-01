import { useLocation } from 'react-router-dom';
import { getMonsterById, getPath } from '../../helpers/helpers';

const MonsterInformation = () => {
  const location = useLocation()
  const monsterId: number = parseInt(location.pathname.split('/')[2])
  const monster = getMonsterById(monsterId)
  return (
    <div className='mt-8 text-white text-center'>
      <div className='flex w-full'>
        <div className='w-96 ml-auto'>
          <p className='text-2xl font-bold text-center'>{monster.name}</p>
          <img
            src={getPath(`/assets/monsters/${monsterId}`)}
            alt={"pas encore d'image pour: " + monster?.name}
            className='mx-auto'
          />
        </div>
        <section className='text-left mr-auto'>
          <p>Resistances :</p>
          <ul>
            {monster.resistances.map((resistance: any, i: number) => {
              const currentElement = Object.keys(resistance)[0]
              const min = resistance[currentElement].min
              const max = resistance[currentElement].max
              return (
                <li key={i + Date.now()} className='ml-3'>{currentElement} : {max === null ? min : `${min} à ${max}`}</li>
              )
            })}
          </ul>
        </section>
      </div>
      <p>{monster.synergie}</p>
      <p>{monster.areas}</p>
      <p>{monster.archi?.name}</p>
      <section className='mx-auto'>
        <p className=''>Sorts :</p>
        <ul>
          {monster.spells.map((spell: any, i: number) => {
            return (
              <li key={i + Date.now()}>{spell.name === "" ? "Pas de nom" : spell.name} : {spell.effect}</li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default MonsterInformation
