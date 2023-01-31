import { useState } from 'react'
import monsterData from '../api/keepedMonsters.json'
import MonsterCard from '../components/MonsterCard'

const Monsters = (): JSX.Element => {
    const [hover, setHover] = useState(false)
    return (
        <div className='flex flex-wrap gap-10 max-w-7xl mx-auto mt-20 pb-44'>
            {monsterData.map((monster: any, i: number) => (
                <MonsterCard key={i + Date.now()} monster={monster} state={[hover, setHover]} />
            ))}
        </div>
    )
}

export default Monsters

