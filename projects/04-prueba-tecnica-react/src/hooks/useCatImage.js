import { useState, useEffect } from 'react'
import { imageFetch } from '../services/imageFetch'

export const useCatImage = ({ fact }) => {
  const [image, setImage] = useState()

  const refreshImage = async () => {
    imageFetch().then(image => setImage(image))
  }

  useEffect(() => {
    if (!fact) return

    const getImage = async () => {
      refreshImage()
    }

    getImage()
  }, [fact])

  return { image }
}
