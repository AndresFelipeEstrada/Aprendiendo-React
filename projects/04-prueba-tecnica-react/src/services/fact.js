const FACT_API_URI = 'https://dog-api.kinduff.com/api/facts'

export const factFetch = async () => {
  try {
    const response = await fetch(FACT_API_URI)
    const data = await response.json()
    const { facts } = data
    return facts
  } catch (error) {
    console.log(error)
  }
}
