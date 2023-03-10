const RAMDOM_IMAGE_URI = 'https://dog.ceo/api/breeds/image/random'

export const getImage = async () => {
  try {
    const response = await fetch(RAMDOM_IMAGE_URI)
    const data = await response.json()
    const { message } = data
    return message
  } catch (error) {
    console.log(error)
  }
}
