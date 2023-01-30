import Card from './Card'
import { cardOptions } from '../api/cards'
import { CardProps } from '../models/card'

const Home = () => {
  return (
    <div className='grid place-items-center' style={{ height: "calc(100vh - 76px)" }}>
      <div className='flex flex-wrap gap-4 max-w-5xl'>
        {cardOptions.map((card: CardProps, i: number) => (
          <Card key={i + Date.now()} {...card} />
        ))}
      </div>
    </div>
  )
}

export default Home