import { create } from 'zustand'
import { PlanList } from '../../services/plans'
interface PlanStoreType {
  selectedForWhoPlan: 'me' | 'other'
  setSelectedForWhoPlan: (selected: 'me' | 'other') => void
  selectedPlan: PlanList | null
  setSelectedPlan: (selected: PlanList) => void
}

const setPlanToLocalStorage = (plan: PlanList | undefined) => {
  if (plan) return localStorage.setItem('plan', JSON.stringify(plan))
  return localStorage.removeItem('plan')
}

export const usePlan = create<PlanStoreType>(set => ({
  selectedForWhoPlan: 'me',
  setSelectedForWhoPlan: (selected: 'me' | 'other') =>
    set(() => ({ selectedForWhoPlan: selected })),
  selectedPlan: null,
  setSelectedPlan: (selected: PlanList) => {
    set(() => ({ selectedPlan: selected }))
    setPlanToLocalStorage(selected)
  }
}))
