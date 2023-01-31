import monsterData from '../api/keepedMonsters.json'
import { getPath, monsterTypeToIcon } from '../helpers/helpers'

const Monsters = (): JSX.Element => {
    return (
        <div className='flex flex-wrap gap-10 max-w-7xl mx-auto mt-20 pb-44'>
            {monsterData.map(monster => {
                return (
                    <div className='relative w-96 h-60 bg-slate-800 border-2 hover:border-yellow-500 border-gray-900 rounded shadow-lg mx-auto'>
                        <div className='absolute py-2 px-4 bg-yellow-500 w-max left-1/2 -translate-x-1/2 -top-8 text-center rounded'>
                            {/* <img src={monsterTypeToIcon(monster.monsterType)} alt={monster.name} className="absolute left-1/2 -translate-x-1/2 -top-3" /> */}
                            {/* <p>{monster.monsterType}</p> */}
                            <p className='text-xl font-bold'>{monster.name}</p>
                        </div>
                        <img src={getPath(`/assets/monsters/${monster.ankamaId}`)} alt={"pas encore d'image pour: " + monster.name} className='mt-8 text-center mx-auto text-white' />
                        {/* <ul>
                            {monster.resistances.map((resistance: any, i: number) => {
                                const currentElement = Object.keys(resistance)[0]
                                const min = resistance[currentElement].min
                                const max = resistance[currentElement].max
                                return (
                                    <li>{currentElement}: {max === null ? min : `${min} à ${max}`}</li>
                                )
                            })}
                        </ul>
                        <p>{monster.synergie}</p>
                        <p>{monster.areas}</p>
                        <p>{monster.archi?.name}</p>
                        <ul>
                            {monster.spells.map((resistance: any, i: number) => {
                                const currentElement = Object.keys(resistance)[0]
                                const min = resistance[currentElement].min
                                const max = resistance[currentElement].max
                                return (
                                    <li>{currentElement}: {max === null ? min : `${min} à ${max}`}</li>
                                )
                            })}
                        </ul> */}
                    </div>
                )
            })}
        </div>
    )
}

export default Monsters

