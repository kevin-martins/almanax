import { useState } from 'react'
import monsterData from '../api/keepedMonsters.json'
import MonsterCard from '../components/MonsterCard'
import Redirection from '../components/Redirection'

const Monsters = (): JSX.Element => {
    const [hover, setHover] = useState(false)
    return (
        <div className='flex flex-wrap gap-10 max-w-7xl mx-auto mt-20 pb-44'>
            {monsterData.map((monster: any, i: number) => (
                <Redirection
                    key={i + Date.now()} 
                    to={'/monster/' + monster.ankamaId}
                    className="border-2 hover:border-yellow-500 w-96 h-60 bg-slate-800 border-slate-800 rounded shadow-lg mx-auto"
                >
                    <MonsterCard monster={monster} state={[hover, setHover]} />
                </Redirection>
            ))}
        </div>
    )
}

export default Monsters

