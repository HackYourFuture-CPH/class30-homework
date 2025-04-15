"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function MarsRoverPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }
        const data = await response.json();
        setPhotos(data.photos);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Mars Rover Photos</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {photos.map((photo) => (
          <div key={photo.id} style={{ margin: "10px" }}>
            <Image
              src={photo.img_src}
              alt="Mars Rover"
              width={300}
              height={300}
            />
            <p>
              <strong>Camera: </strong>
              {photo.camera.full_name}
            </p>
            <p>
              <strong>Date: </strong>
              {photo.earth_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
