import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

interface ValueLabel {
  value: string
  label: string
}
interface SelectProps {
  options: ValueLabel[]
}

export const Select = ({ options }: SelectProps) => {
  const [openSelect, setOpenSelect] = useState(false)
  const [selectOption, setSelectOption] = useState<ValueLabel>(options[0])

  const handleToggle = () => setOpenSelect(!openSelect)
  const handleOptionClick = (option: ValueLabel) => {
    setSelectOption(option)
    setOpenSelect(false)
  }

  return (
    <div className='select-container'>
      <div
        className='row justify-content-between select-container__button'
        onClick={handleToggle}
      >
        {selectOption.label}
        <IoIosArrowDown />
      </div>
      <ul className={`select-list ${!openSelect ? 'select-list_hidden' : ''}`}>
        {options.map((option, index) => (
          <li
            key={index}
            value={option.value}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
