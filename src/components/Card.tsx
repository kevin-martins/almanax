import { useState } from "react"
import { CardProps } from "../models/card"
import Redirection from "./Redirection"

const Card = (card: CardProps) => {
    const [hover, setHover] = useState(false)
    console.log(hover)
    return (
        <Redirection to={card.to} className="relative mx-auto sm:w-[30rem] sm:h-[15rem] min-w-[17rem] max-w-[30rem] px-3 transition hover:scale-110 duration-300 ease-in-out" setHoverState={setHover}>
            <>
                <img src={process.env.PUBLIC_URL + card.src} alt={card.alt} className='w-full h-full object-cover rounded' />
                <button className="absolute bg-gray-800 bottom-3 left-1/2 -translate-x-1/2 w-32 text-center py-2 rounded">
                    <p className={`text-lg delay-50 ${hover ? 'text-yellow-500': 'text-white'}`}>{card.name}</p>
                </button>
            </>
        </Redirection>
    )
}

export default Card