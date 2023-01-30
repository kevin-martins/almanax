import monsterData from '../api/keepedMonsters.json'

const Monsters = (): JSX.Element => {
    return (
        <div className='flex flex-wrap gap-4 max-w-6xl mx-auto mt-10'>
            {monsterData.map(monster => {
                return (
                    <div className='w-80 h-60 bg-white rounded shadow-lg mx-auto'>
                        <img src={monster.imgUrl} alt={monster.name} />
                        <p className='text-lg'>{monster.name}</p>
                        <p>{monster.monsterType}</p>
                        <ul>
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
                    </div>
                )
            })}
        </div>
    )
}

export default Monsters

