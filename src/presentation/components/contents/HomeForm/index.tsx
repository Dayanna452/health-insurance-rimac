import { Button } from '../../blocks/Button'
import { Checkbox } from '../../blocks/Checkbox'
import { Input } from '../../blocks/Input'

export const HomeForm = () => {
  return (
    <form>
      <Input type='email' name='email' />
      <Input type='email' name='email' />
      <Checkbox />
      <Checkbox />
      <Button>Submit</Button>
    </form>
  )
}
