import { useEffect, useState } from 'react'
import { factFetch } from '../services/fact'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    factFetch().then(fact => setFact(fact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
