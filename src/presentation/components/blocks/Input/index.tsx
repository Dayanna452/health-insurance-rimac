interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className='input-container'>
      {label && <label htmlFor=''></label>}
      <input type={props.type} {...props} />
    </div>
  )
}
