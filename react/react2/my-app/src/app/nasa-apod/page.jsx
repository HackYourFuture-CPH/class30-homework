// src/app/nasa-apod/page.jsx
import Image from 'next/image';

export default async function NasaApod() {
   const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <Image
        src={data.url}
        alt={data.title}
        width={800}
        height={500}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <p style={{ marginTop: '1rem' }}>{data.explanation}</p>
    </div>
  );
}
