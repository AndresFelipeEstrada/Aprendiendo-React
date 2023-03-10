const RAMDOM_FACT_URI = 'https://dog-api.kinduff.com/api/facts'

export const getFact = async () => {
  try {
    const response = await fetch(RAMDOM_FACT_URI)
    const data = await response.json()
    const { facts } = data
    return facts
  } catch (error) {
    console.log(error)
  }
}
