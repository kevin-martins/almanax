import Card from './Card'
import { cardOptions } from '../api/cards'
import { CardProps } from '../models/card'

const Home = () => {
  return (
    <div className='grid place-items-center'>
        <div className="absolute flex bottom-1/2 translate-y-1/2 flex-wrap items-center gap-4 max-w-6xl">
            {cardOptions.map((card: CardProps, i: number) => (
                <Card key={i + Date.now()} {...card} />
            ))}
        </div>
    </div>
  )
}

export default Home