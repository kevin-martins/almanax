import React from 'react'
import monsterData from '../api/keepedMonsters.json'

const Monsters = () => {
    console.log(monsterData)
    return (
        <div className='text-white'>
            {monsterData.map(monster => {
                const element = monster.resistances
                return (
                    <>
                        <img src={monster.url} alt={monster.name} />
                        <p>{monster.name}</p>
                        <p>{monster.monsterType}</p>
                        <ul>
                            {monster.resistances.map((resistance, i: number) => {
                                const currentElement = Object.keys(element[i])
                                console.log(currentElement)
                                return (
                                    <li>{currentElement}: {currentElement[i]}</li>
                                    // <li>{element[i]}: {resistance[element][i].min} | {resistance.Terre?.max}</li>
                                )
                            })}
                        </ul>
                    </>
                )
            })}
        </div>
    )
}

export default Monsters

