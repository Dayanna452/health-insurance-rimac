import { useState } from 'react'
import { Button } from '../../blocks/Button'
import { Checkbox } from '../../blocks/Checkbox'
import { Input } from '../../blocks/Input'
import { InputDocument } from '../InputDocument'
import { UserData } from '../../../types/user'
import { UserInit } from '../../../../data/constants/data'
import { ValueLabel } from '../../blocks/Select/types/select'
import { useNavigate } from 'react-router-dom'

export const HomeForm = () => {
  const navigate = useNavigate()
  const options = [
    { value: 'dni', label: 'DNI' },
    { value: 'pasaporte', label: 'Pasaporte' }
  ]
  const [selectOption, setSelectOption] = useState<ValueLabel>(options[0])
  const [userData, setUserData] = useState<UserData>(UserInit)
  const [formError, setFormError] = useState<string | null>(null)

  // Verificar si todos los campos están completos
  const isFormComplete: boolean =
    userData.typeDocument !== '' &&
    userData.document !== '' &&
    userData.phoneNumber !== '' &&
    userData.privacy &&
    userData.conditions

    console.log('userData', userData)

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isFormComplete) {
      navigate('/plans')
      setFormError(null)
    } else {
      // Si faltan campos, muestra un error
      console.log('formError', formError)
      setFormError('Por favor, completa todos los campos.')
    }
  }

  return (
    <form className='form gap-16'>
      <InputDocument
        options={options}
        selectOption={selectOption}
        onChangeDocument={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, document: selectOption.value })}
        onChangeSelect={() => {
          setSelectOption(selectOption)
          setUserData({ ...userData, typeDocument: selectOption.value })
        }}
      />
      <Input
      type='number'
        label='Celular'
        name='phoneNumber'
        value={userData.phoneNumber}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, phoneNumber: selectOption.value })}
      />
      <div className='d-flex flex-column gap-10'>
        <Checkbox
          name='privacy'
          checked={userData.privacy}
          text='Acepto lo Política de Privacidad'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserData({ ...userData, privacy: e.target.checked })
          }
        />
        <Checkbox
          name='conditions'
          checked={userData.conditions}
          text='Acepto la Política Comunicaciones Comerciales'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserData({ ...userData, conditions: e.target.checked })
          }
        />
      </div>
      <div>
        <Button className='btn_conditions' color='dark' variant='text'>
          Aplican Términos y Condiciones.
        </Button>
      </div>
      <Button
        color='dark'
        disabled={!isFormComplete}
        onClick={e => handleSubmit(e)}
      >
        Cotiza Aquí
      </Button>
    </form>
  )
}
