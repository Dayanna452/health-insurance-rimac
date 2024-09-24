import { useEffect } from 'react'
import { Header } from '../contents/Header'
import { PlanResume } from '../contents/PlanResume'
import { usePlan } from '../../../data/stores/usePlan'

export const ResumeContent = () => {
  const { setSelectedPlan } = usePlan()

  useEffect(() => {
    const planSelected = localStorage.getItem('plan')

    if (planSelected) {
      setSelectedPlan(JSON.parse(planSelected))
    }
  }, [])

  return (
    <div className='template'>
      <Header />
      <main>
        <PlanResume />
      </main>
    </div>
  )
}
