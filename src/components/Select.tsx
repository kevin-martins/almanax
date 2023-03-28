type Option = {
  value: string,
  text: string,
}

type Props = {
  currentValue: string,
  options: Option[],
  onChange: any,
}

export const Select = ({ currentValue, options, onChange }: Props) => {
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
          {option.text}
        </option>
      ))}
    </select>
  )
}

export default Select
