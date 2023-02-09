import React from 'react'
import { getFile } from '../helpers/helpers'
import { SpellProps } from '../models/monsters'

const MonsterSpell = (spell: SpellProps): JSX.Element => {
  return (
    <div>
        <img src={getFile(`/assets/icons/${spell.effect}`)} />
      {spell.info}
    </div>
  )
}

export default MonsterSpell
