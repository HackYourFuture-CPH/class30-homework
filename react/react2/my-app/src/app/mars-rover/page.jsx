"use client";
import { useEffect, useState } from "react";

function MarsRover() {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    const res = await fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
    );
    const data = await res.json();
    setPhotos(data.photos);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Mars Rover Photos</h1>
      {photos.length === 0 && <p>Loading...</p>}
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "12px",
              background: "#fafafa",
            }}
          >
            <img
              src={photo.img_src}
              alt={`Photo taken by ${photo.rover.name}`}
              width="100%"
              style={{ borderRadius: "8px" }}
            />
            <p><strong>Camera:</strong> {photo.camera.full_name}</p>
            <p><strong>Date:</strong> {photo.earth_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarsRover;
