import { useAppSelector } from '../../app/hooks'
import { AlmanaxProps } from '../../models/almanax'
import { TableHead } from '../../models/table'
import Head from './Head'
import Cell from './Cell'
import { FilterSearch } from '../../models/filter'

export const Table = (): JSX.Element => {
  const { filters, almanax } = useAppSelector(state => state.dofus)

  const tableHeaders: TableHead[] = [
    { title: "Dates", className: "w-2/12 text-center" },
    { title: "Ressources", className: "w-2/12 text-center" },
    { title: "Quantités", className: "w-1/12 text-center" },
    { title: "Bonus", className: "w-5/12 text-center" },
    { title: "Récompense", className: "w-2/12 text-center" },
  ]

  return (
    <div className="max-w-7xl m-auto pt-16 pb-14 px-3">
      <table className="w-full mb-2">
        <thead className="text-white/80">
          <tr className='border-b-[.5px] border-white'>
            {tableHeaders.map((head: TableHead, i: number) => (
              <Head key={i} title={head.title} className={head.className} />
            ))}
          </tr>
        </thead>
        <tbody>
          {/* {data.map((cell: AlmanaxProps, i: number) => (
            <Cell key={i} cell={cell} dataLength={data.length} index={i} />
          ))} */}
          {almanax
            // .filter((cell: AlmanaxProps) => (
            //   filter === FilterSearch.None || filter === cell.filterSearch
            // ))
            .map((cell: AlmanaxProps, i: number) => (
              <Cell key={i} cell={cell} dataLength={almanax.length} index={i} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
