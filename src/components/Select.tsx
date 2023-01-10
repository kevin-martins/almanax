import { useAppSelector } from "../app/hooks"
import { getTextByLanguage } from "../helpers/helpers"

export type Text = {
  language: string,
  text: string
}

type Option = {
  value: string,
  text: Text[] | string,
}

type Props = {
  currentValue: string,
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
          {typeof option.text === "string" ? option.text : getTextByLanguage(option.text, language)}
        </option>
      ))}
    </select>
  )
}

export default Select
