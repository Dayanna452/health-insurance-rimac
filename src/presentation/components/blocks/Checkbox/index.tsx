interface CheckboxProps extends React.HTMLAttributes<HTMLLabelElement> {
  text: string
}

export const Checkbox = ({ text='Checkbox' }: CheckboxProps) => {
  return (
    <label className='checkbox-container'>
      <input className='checkbox' type='checkbox' />
      <span className='checkbox-label'>{text}</span>
    </label>
  )
}
