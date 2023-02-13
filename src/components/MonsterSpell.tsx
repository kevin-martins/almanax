import React from 'react'
import { getFile } from '../helpers/helpers'
import { Effect, SpellProps } from '../models/monsters'

const MonsterSpell = (spell: SpellProps): JSX.Element => {
  return (
    <div className='grid grid-rows-1 grid-flow-col mx-auto w-80'>
      {/* <img src={getFile(`/assets/icons/${spell.effect}`)} alt={`${Effect[spell.effect]}`} className="ml-auto" /> */}
      <span className='font-bold text-yellow-500 text-lg'>{`${Effect[spell.effect]}`}</span>
      <span>: {spell.info}</span>
    </div>
  )
}

export default MonsterSpell
