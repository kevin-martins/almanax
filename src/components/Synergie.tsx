import { useState } from 'react'
import { getFile, getMonsterById, getNewMonsterSpellsById } from '../helpers/helpers'
import { SynergieProps, SpellProps } from '../models/monsters'
import MonsterSpell from './MonsterSpell'

export const Synergie = (data: SynergieProps) => {
  const [hover, setHover] = useState(false)
  const [stay, setStay] = useState(false)
  const oldApiMonster = getMonsterById(data.ankamaId)

  const handleClick = () => {
    if (stay) return setStay(false)
    return setStay(true)
  }

  return (
    <li>
      <span
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleClick}
        className='relative text-yellow-500 text-lg font-bold cursor-pointer'
      >
        {data.name}
      </span> 
      {(hover || stay) && <section className="absolute z-50 bg-gray-900/90 py-2 px-4 top-20 rounded-lg ml-2">
        <div className='flex w-full'>
          <p className='text-2xl font-bold text-center text-yellow-500 mx-auto'>{oldApiMonster.name}</p>
          <button className='text-red-300 hover:text-red-600 text-xl font-bold ml-auto' onClick={() => setStay(false)}>x</button>
        </div>
        <div className='flex w-full'>
          <div className='w-96 ml-auto'>
            <img
              src={getFile(`/assets/monsters/${oldApiMonster._id}`)}
              alt={"pas encore d'image pour: " + oldApiMonster.name}
              className='mx-auto transform scale-125 p-5'
            />
            <ul className='flex m-auto'>
              {oldApiMonster.statistics.map((statistic: any, i: number) => {
                const currentElement = Object.keys(statistic)[0]
                const min = statistic[currentElement].min
                const max = statistic[currentElement].max
                return (
                  <li key={i + Date.now()} className='relative ml-3 m-auto'>
                    <img src={getFile(`/assets/icons/${currentElement.toLowerCase()}`, "webp")} alt={`${currentElement}`} className="mx-auto" />
                    <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-lg">{max === null ? min : `${min} ${max}`}</span>
                  </li>
                )
              })}
          </ul>
          </div>
          <section className='text-left mr-auto mt-5'>
            <ul>
              {oldApiMonster.resistances.map((resistance: any, i: number) => {
                const currentElement = Object.keys(resistance)[0]
                const min = resistance[currentElement].min
                const max = resistance[currentElement].max
                return (
                  <li key={i + Date.now()} className="ml-2 flex">
                    <img src={getFile(`/assets/icons/${currentElement.toLowerCase()}`, "webp")} alt={`${currentElement}`} className="w-10 h-10 p-1" />
                    <span className="ml-2 my-auto font-bold text-lg">{max === null ? min : `${min} à ${max}`}%</span>
                  </li>
                )
              })}
            </ul>
          </section>
        </div>
        {data.spells?.length > 0 ?data.spells.map((spell: SpellProps) => (
          <MonsterSpell {...spell} />
        )) : getNewMonsterSpellsById(data.ankamaId).map((spell: SpellProps) => (
          <MonsterSpell {...spell} />
        ))}
      </section>}
    </li>
  )
}

export default Synergie
