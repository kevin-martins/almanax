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
    <select value={currentValue} onChange={onChange}>
      {options.map((option: Option, i: number) => (
        <option
          key={i + Date.now()}
          value={option.value}
        >
          {getTextByLanguage(option.text, language)}
        </option>
      ))}
    </select>
  )
}

export default Select
