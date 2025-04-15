import React from "react";
import Image from "next/image";

export default async function NasaPictureOfTheDay() {
  const data = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
  );

  if (!data.ok) {
    throw new Error("Failed to fetch data from NASA API");
  }
  const res = await data.json();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>NASA Picture of the Day</h1>
      <h2 style={{ textAlign: "center", padding: "10px" }}>{res.title}</h2>
      <p style={{ textAlign: "center", padding: "10px" }}>{res.explanation}</p>
      <p style={{ textAlign: "center", padding: "10px" }}>{res.date}</p>
      <Image src={res.url} alt={res.title} width={400} height={400} />
    </div>
  );
}
