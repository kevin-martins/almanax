import { highlightPercentages } from '../../helpers/textFormatter'
import { AlmanaxProps } from '../../models/almanax'
import { HighlightPercentageProps } from '../../models/table'

type Props = {
  cell: AlmanaxProps,
  dataLength: number,
  index: number,
}

const Cell = ({ cell, dataLength, index }: Props): JSX.Element => {
  return (
    <tr
      className={`${index !== dataLength - 1 && 'border-b-[.5px] border-white/20'} text-center text-white hover:bg-white/20 h-full text-md`}
    >
      <td>
        {cell.date}
      </td>
      <td>
        <div className='flex'>
          <img src={cell.icon} alt={cell.name} className='w-10 h-10 my-auto' />
          <p className='m-auto'>{cell.name}</p>
        </div>
      </td>
      <td>
        <p className='text-xl'>{cell.quantity}</p>
      </td>
      <td>
        {highlightPercentages(cell.bonus).map((text: HighlightPercentageProps, i: number) => {
          if (text.shouldHighlight) return <span key={i + Date.now()} className='font-bold text-yellow-500'>{text.text}</span>
          return <span key={i + Date.now()}>{text.text}</span>
        })}
      </td>
      <td>
        <p className='text-xl'>{cell.reward}</p>
      </td>
    </tr>
  )
}

export default Cell
