import { Button } from '../../blocks/Button'
import { Checkbox } from '../../blocks/Checkbox'
import { Input } from '../../blocks/Input'
import { InputDocument } from '../InputDocument'

export const HomeForm = () => {
  return (
    <form className='form gap-16'>
      <InputDocument />
      <Input />
      <Checkbox text='Acepto lo Política de Privacidad' />
      <Checkbox text='Acepto la Política Comunicaciones Comerciales' />
      <Button>Submit</Button>
    </form>
  )
}
