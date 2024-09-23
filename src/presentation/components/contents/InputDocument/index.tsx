import { Input } from '../../blocks/Input'
import { Select } from '../../blocks/Select'
import { ValueLabel } from '../../blocks/Select/types/select'

interface InputDocumentProps {
  options: ValueLabel[]
  selectOption: ValueLabel
  onChangeDocument: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeSelect: (option: ValueLabel) => void
}

export const InputDocument = ({
  onChangeDocument,
  onChangeSelect,
  options,
  selectOption
}: InputDocumentProps) => {
  return (
    <div className='row document-container'>
      <div className='col-6 col-lg-5'>
        <Select
          options={options}
          selectOption={selectOption}
          onChangeSelect={onChangeSelect}
        />
      </div>
      <div className='col-6 col-lg-7'>
        <Input
          className='input_simple'
          label='Nro. de documento'
          type='number'
          name='document'
          onChange={onChangeDocument}
        />
      </div>
    </div>
  )
}
