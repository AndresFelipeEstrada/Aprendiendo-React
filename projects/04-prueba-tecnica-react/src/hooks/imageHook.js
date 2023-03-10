import { useState, useEffect } from 'react'
import { getImage } from '../services/getImage'

export const useImage = ({ fact }) => {
  const [image, setImage] = useState()

  useEffect(() => {
    if (!fact) return
    getImage().then(image => setImage(image))
  }, [fact])

  return { image }
}
