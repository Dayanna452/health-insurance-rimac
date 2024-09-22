interface InputContainerProps
  extends React.InputHTMLAttributes<HTMLDivElement> {
  label?: string
}

export const Input = ({ label, className, ...props }: InputContainerProps) => {
  return (
    <div className='input-container' {...props}>
      {label && <label htmlFor=''></label>}
      <input
        className={`input ${className ? className : ''}`}
        type={props.type}
      />
    </div>
  )
}
