import { FC } from 'react'
import { Header } from '../contents/Header'
import { StepperPlans } from '../contents/StepperPlans'

export const PlansLayout: FC = () => {
  return (
    <div className='template'>
      <Header />
      <main>
        <StepperPlans />
        <div className=''>
          <h2>Rocío ¿Para quién deseas cotizar?</h2>
          <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
          <div className='row'>
            <div className='col-12'>para mi</div>
            <div className='col-12'> para alguien más</div>
          </div>
        </div>
      </main>
    </div>
  )
}
