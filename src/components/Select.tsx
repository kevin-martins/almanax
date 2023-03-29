type Props = {
  currentValue: string,
  options: string[],
  onChange: any,
}

export const Select = ({ currentValue, options, onChange }: Props) => {
  return (
    <select
      value={currentValue}
      onChange={onChange}
      className="outline-none bg-gray-700 shadow-2xl text-yellow-500 p-2 text-lg mt-5"
    >
      {options.map((text: string, i: number) => (
        <option
          key={i}
          value={text}
          className="bg-gray-700"
        >
          {text}
        </option>
      ))}
    </select>
  )
}

export default Select
