import { useAppSelector } from '../../app/hooks'
import { DataProps } from '../../models/data'
import { language } from '../../models/language'
import { TableHead } from '../../models/table'
import Head from './Head'

export const Table = (): JSX.Element => {
  const currentLanguage = useAppSelector(state => state.almanax.language)
  const data = useAppSelector(state => state.almanax.array)

  const tableHeaders: TableHead[] = [
    { fr: "Dates", en: "Dates", className: "w-1/6 text-center" },
    { fr: "Ressources", en: "Ressources", className: "w-1/6 text-center" },
    { fr: "Quantités", en: "Quantities", className: "w-1/6 text-center" },
    { fr: "Bonus", en: "Bonuses", className: "w-3/6 text-center" },
  ]

  return (
    <div className="max-w-6xl mx-auto pt-24 pb-14 px-3">
      <table className="w-full mb-2">
        <thead className="text-white/80">
          <tr className='border-b-[.5px] border-white'>
            {tableHeaders.map((head: TableHead, i: number) => (
              <Head key={i} title={currentLanguage === language.En ? head.en : head.fr} className={head.className} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: DataProps, i: number) => (
            <tr
              key={i + Date.now()}
              className={`${i !== data.length - 1 && 'border-b-[.5px] border-white/20'} text-center text-white hover:bg-white/20`}
            >
              <td>
                {row.date}
              </td>
              <td>
                {row.name}
              </td>
              <td>
                {row.quantity}
              </td>
              <td>{row.bonus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
