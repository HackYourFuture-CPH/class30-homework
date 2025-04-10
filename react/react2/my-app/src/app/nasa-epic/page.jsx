"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

function NasaEpicPage() {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  useEffect(() => {
    if (!date) return;

    const fetchImage = async () => {
      try {
        const res = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=DEMO_KEY`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch image data");
        }

        const data = await res.json();

        if (data.length === 0) {
          throw new Error("No images found for this date");
        }

        const imageName = data[0].image;

        const [year, month, day] = date.split("-");

        const imgUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${imageName}.jpg`;

        setImageUrl(imgUrl);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchImage();
  }, [date]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>NASA EPIC Image</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="NASA EPIC"
          width={800}
          style={{ borderRadius: "10px", marginTop: "1rem" }}
        />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}

export default NasaEpicPage;
