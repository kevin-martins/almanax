import { useAppSelector } from "../app/hooks"
import { getTextByLanguage } from "../helpers/helpers"
import { FilterSearch } from "../models/filter"

export type Text = {
  language: string,
  text: string
}

type Option = {
  value: string | FilterSearch,
  text: Text[],
}

type Props = {
  currentValue: string | FilterSearch,
  options: Option[],
  onChange: any,
}

export const Select = ({ currentValue, options, onChange }: Props) => {
  const language = useAppSelector(state => state.almanax.language)
  return (
    <select
      value={currentValue}
      onChange={onChange}
      className="outline-none bg-gray-700 shadow-2xl text-yellow-500 p-2 text-lg mt-5"
    >
      {options.map((option: Option, i: number) => (
        <option
          key={i + Date.now()}
          value={option.value}
          className="bg-gray-700"
        >
          {getTextByLanguage(option.text, language)}
        </option>
      ))}
    </select>
  )
}

export default Select
