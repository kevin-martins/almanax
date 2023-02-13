import { useLocation } from 'react-router-dom';
import MonsterSpell from '../../components/MonsterSpell';
import Synergie from '../../components/Synergie';
import { getNewMonsterById, getFile, extractBrackedText, getNewMonsterSpellsById } from '../../helpers/helpers';
import { SpellProps, SynergieProps } from '../../models/monsters';

const MonsterInformation = () => {
  const location = useLocation()
  const monsterId: number = parseInt(location.pathname.split('/')[2])
  const monster = getNewMonsterById(monsterId)
  return (
    <div className='mt-8 text-white text-center'>
      <div className='flex w-full'>
        <div className='w-96 ml-auto'>
          <p className='text-2xl font-bold text-center text-yellow-500'>{monster.name}</p>
          <img
            src={getFile(`/assets/monsters/${monsterId}`)}
            alt={"pas encore d'image pour: " + monster?.name}
            className='mx-auto transform scale-125 p-5'
          />
          <ul className='flex m-auto'>
            {monster.statistics.map((statistic: any, i: number) => {
              const currentElement = Object.keys(statistic)[0]
              const min = statistic[currentElement].min
              const max = statistic[currentElement].max
              return (
                <li key={i + Date.now()} className='relative ml-3 m-auto'>
                  <img src={getFile(`/assets/icons/${currentElement.toLowerCase()}`, "webp")} alt={`${currentElement}`} className="mx-auto" />
                  <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-xl">{max === null ? min : `${min} ${max}`}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <section className='text-left mr-auto mt-5'>
          <ul>
            {monster.resistances.map((resistance: any, i: number) => {
              const currentElement = Object.keys(resistance)[0]
              const min = resistance[currentElement].min
              const max = resistance[currentElement].max
              return (
                <li key={i + Date.now()} className="ml-2 flex">
                  <img src={getFile(`/assets/icons/${currentElement.toLowerCase()}`, "webp")} alt={`${currentElement}`} className="w-12 h-12 p-1" />
                  <span className="ml-2 my-auto font-bold text-lg">{max === null ? min : `${min} à ${max}`}%</span>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
      <section className='mt-5 w-full m-auto'>
        {monster.spells?.length > 0 ? monster.spells.map((spell: SpellProps) => (
            <MonsterSpell {...spell} />
          )) : getNewMonsterSpellsById(monster.ankamaId).map((spell: SpellProps) => (
            <MonsterSpell {...spell} />
          ))}
      </section>
      {monster.synergie.length > 0 && <ul>Monstres qui peuvent poser problème :</ul>}
      {monster.synergie.map((dataMonster: SynergieProps, i: number) => {
        return (
          <Synergie key={i + Date.now()} {...dataMonster} />
        )
      })}
      {/* <section className='mx-auto'>
        <p className=''>Sorts :</p>
        <ul className='w-full text-center'>
          {monster.spells.map((spell: any, i: number) => {
            return (
              <li key={i + Date.now()} className="flex w-full">
                <span className='font-bold text-yellow-500 underline'>{spell.name === "" ? "Pas de nom" : spell.name}</span>
                <span className='mx-1'>:</span>
                {extractBrackedText(spell.effect).map((text: string) => {
                    return (
                      <>
                        {text[0] === "[" ?
                        <>
                          <Redirection to='' >
                            <span className='font-bold mr-1 cursor-pointer'>{text}</span>
                          </Redirection>
                        </> :
                        <span className="mr-1">{text}</span>}
                      </>
                    )
                })}
              </li>
            )
          })}
        </ul>
      </section> */}
    </div>
  )
}

export default MonsterInformation
