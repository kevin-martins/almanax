import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { DataProps } from '../../models/data'
import { FilterSearch } from '../../models/filter'

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
        className={`${index !== dataLength - 1 && 'border-b-[.5px] border-white/20'} text-center text-white hover:bg-white/20 h-full`}
      >
        <td>
          {cell.date}
        </td>
        <td>
          <div className='flex'>
            <img src={cell.icon} alt={cell.name} className='w-10 h-10 my-auto' />
            <p className='mx-auto'>{cell.name}</p>
          </div>
        </td>
        <td>
          {cell.quantity}
        </td>
        <td>{cell.bonus}</td>
      </tr>
    )
  return (
    <></>
  )
}

export default Cell
