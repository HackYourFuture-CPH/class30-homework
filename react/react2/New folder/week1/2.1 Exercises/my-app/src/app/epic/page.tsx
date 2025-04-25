'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function EpicImagePage() {
  const searchParams = useSearchParams()
  const date = searchParams.get('date') || '2024-04-01' // تاریخ پیش‌فرض
  const [imageData, setImageData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchEpicImage() {
      try {
        const formattedDate = date.replaceAll('-', '/')
        const response = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=DEMO_KEY`
        )
        const data = await response.json()
        if (data.length === 0) {
          setError('No images available for this date.')
          return
        }
        const imageName = data[0].image
        const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/png/${imageName}.png`
        setImageData({ url: imageUrl, caption: data[0].caption })
      } catch (err) {
        setError('Failed to fetch image.')
      }
    }

    fetchEpicImage()
  }, [date])

  if (error) return <p className="text-red-500">{error}</p>
  if (!imageData) return <p>Loading...</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">NASA EPIC Image for {date}</h1>
      <img src={imageData.url} alt="EPIC" className="w-full max-w-2xl mx-auto mb-4 rounded shadow" />
      <p className="text-gray-700">{imageData.caption}</p>
    </div>
  )
}