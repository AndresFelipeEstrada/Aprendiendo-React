const IMAGE_RAMDOM_URI = 'https://dog.ceo/api/breeds/image/random'

export const imageFetch = async () => {
  try {
    const response = await fetch(IMAGE_RAMDOM_URI)
    const data = await response.json()
    const { message } = data
    return message
  } catch (error) {
    console.log(error)
  }
}
