import { useAppSelector } from '../../app/hooks'
import { splitNumbers, textFormat } from '../../helpers/helpers'
import { DataProps } from '../../models/data'
import { FilterSearch } from '../../models/filter'
import { HighlightBonusNumbers } from '../../models/table'

type Props = {
  cell: DataProps,
  dataLength: number,
  index: number,
}

const Cell = ({ cell, dataLength, index }: Props): JSX.Element => {
  const filter = useAppSelector(state => state.almanax.filter)
  if (filter === FilterSearch.None || filter === cell.filterSearch)
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
          {splitNumbers(textFormat(cell.bonus)).map((text: HighlightBonusNumbers, i: number) => {
            if (text.isNumber) return <span key={i + Date.now()} className='font-bold text-yellow-500'>{text.text}</span>
            return <span key={i + Date.now()}>{text.text}</span>
          })}
          {/* {cell.bonus} */}
        </td>
      </tr>
    )
  return (<></>)
}

export default Cell
