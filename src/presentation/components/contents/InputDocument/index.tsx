import { Input } from '../../blocks/Input'
import { Select } from '../../blocks/Select'

export const InputDocument = () => {
  const options = ['DNI', 'NIE', 'Pasaporte']

  return (
    <div className='row'>
      <div className='col-5 col-sm-4'>
        <Select options={options} />
      </div>
      <div className='col-7 col-sm-8'>
        <Input type='email' name='email' />
      </div>
    </div>
  )
}
