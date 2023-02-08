// @ts-check
import { test, expect } from '@playwright/test'
const LOCALHOST_URL = 'http://localhost:5173/'
const IMAGE_RAMDOM_URI = 'https://images.dog.ceo/breeds/'

test('app show ramdom fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(IMAGE_RAMDOM_URI)).toBeTruthy()
})
