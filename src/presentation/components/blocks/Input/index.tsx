interface InputContainerProps extends React.InputHTMLAttributes<HTMLDivElement> {
  label?: string
}

export const Input = ({ label, ...props }: InputContainerProps) => {
  return (
    <div className='input-container' {...props}>
      {label && <label htmlFor=''></label>}
      <input className={`input ${props.className}`} type={props.type}  />
    </div>
  )
}
