import { usePlan } from '../../../../data/stores/usePlan'

export const PlanResume = () => {
  const { selectedPlan } = usePlan()
  

  console.log('PlanResume', selectedPlan)
  return (
    <>
      {selectedPlan && (
        <div className='plan-resume'>
          <h3 className='plan-title'>Precios calculados para:</h3>
          <h2>{selectedPlan.name}</h2>
          <p>selectedPlan selected: {selectedPlan.age}</p>
        </div>
      )}
    </>
  )
}
