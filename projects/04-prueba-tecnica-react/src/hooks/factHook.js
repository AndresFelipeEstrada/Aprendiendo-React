import { useEffect, useState } from 'react'
import { getFact } from '../services/getFact'

export const useFact = () => {
  const [fact, setFact] = useState()

  const newFact = () => {
    getFact().then(fact => setFact(fact))
  }

  useEffect(newFact, [])

  return {
    fact, newFact
  }
}
