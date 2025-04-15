"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function NasaEpic() {
  const searcParams = useSearchParams();
  const date = searcParams.get("date");
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://epic.gsfc.nasa.gov/api/natural/date/${date}?api_key=DEMO_KEY`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setImageData(data[0]);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchImage();
  }, [date]);

  const renderImage = () => {
    if (!imageData) return null;

    const [year, month, day] = date.split("-");
    const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${imageData.image}.jpg`;

    return (
      <div>
        <h2>EPIC Image for {date}</h2>
        <img src={imageUrl} alt={`EPIC image for ${date}`} width={300} />
        <p>{imageData.caption}</p>
      </div>
    );
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>NASA EPIC VIEWER</h1>
      {!date && (
        <p>
          Please provide a date in the URL query string, e.g.,{" "}
          <code>?date=2023-10-01</code>
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {renderImage()}
    </div>
  );
}
