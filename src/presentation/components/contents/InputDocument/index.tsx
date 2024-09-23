import { Input } from '../../blocks/Input'
import { Select } from '../../blocks/Select'

export const InputDocument = () => {
  const options = [
    { value: 'dni', label: 'DNI' },
    { value: 'pasaporte', label: 'Pasaporte' }
  ]

  return (
    <div className='row document-container'>
      <div className='col-6 col-lg-5'>
        <Select options={options} />
      </div>
      <div className='col-6 col-lg-7'>
        <Input type='email' name='email' />
      </div>
    </div>
  )
}
