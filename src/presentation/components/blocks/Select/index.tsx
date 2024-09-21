interface SelectProps {
  options: string[]
}

export const Select = ({ options }: SelectProps) => {
  return (
    <div className="select-container">
      <select className="select-container__input">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
