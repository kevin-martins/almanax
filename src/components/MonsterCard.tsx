import { getPath } from '../helpers/helpers'

const MonsterCard = ({ monster, state }: any) => {
    return (
        <div
            className='relative'
            // onMouseEnter={() => state.setHover(true)}
            // onMouseLeave={() => state.setHover(false)}
        >
            <div className='absolute py-2 px-4 bg-yellow-500 w-max left-1/2 -translate-x-1/2 -top-12 text-center rounded'>
                {/* <img src={monsterTypeToIcon(monster.monsterType)} alt={monster.name} className="absolute left-1/2 -translate-x-1/2 -top-3" /> */}
                {/* <p>{monster.monsterType}</p> */}
                <p className='text-xl font-bold'>{monster.name}</p>
            </div>
            <img src={getPath(`/assets/monsters/${monster.ankamaId}`)} alt={"pas encore d'image pour: " + monster.name} className={`${state.hover && 'transform scale-90'} mt-8 text-center mx-auto text-white`} />
        </div>
    )
}

export default MonsterCard