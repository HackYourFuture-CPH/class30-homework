"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
const API_KEY = "COBS1ucXITlX4X7uhAkOafcK6NGKGH0bdCzAnIRu";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json()
      );
      setRoverPhoto(roverPhotoResponse);
    };

    const fetchAstronomyPicOfTheDay = async () => {
      const astronomyPicOfTheDayResponse = await fetch(
        NASA_URLs.astronomyPicOfTheDay
      ).then((response) => response.json());
      setDailyImg(astronomyPicOfTheDayResponse);
    };

    fetchRoverPhotos();
    fetchAstronomyPicOfTheDay();
  }, []);

  const RoverPhoto = ({ src, date, roverName }) => {
    return (
      <div className={styles.roverPhotoCard}>
        <h3>Rover: {roverName}</h3>
        <p>Date: {date}</p>
        <img
          className={styles.nasaPicOfTheDayImg}
          src={src}
          alt={`Photo taken by ${roverName}`}
        />
      </div>
    );
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          {dailyImg.url ? (
            <>
              <h3>{dailyImg.title}</h3>
              <p>{dailyImg.explanation}</p>
              <img
                className={styles.nasaPicOfTheDayImg}
                src={dailyImg.url}
                alt={dailyImg.title}
              />
            </>
          ) : (
            <p>Loading astronomy picture of the day...</p>
          )}
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {roverPhoto?.photos?.length ? (
            <div className={styles.roverPhotosGrid}>
              {roverPhoto.photos.map((photo) => (
                <RoverPhoto
                  key={photo.id}
                  src={photo.img_src}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                />
              ))}

              {/* TASK - React 1 week 3 */}
              {/* Create a react component for the <RoverPhoto />, which should accept the following props */}
              {/* 1. src: source of the img (img_src in the data from the API) */}
              {/* 2. date: earth_date data coming from the API */}
              {/* 3. roverName: will be in the rover object - rover.name */}

              {/* TIPS: */}
              {/* If you don't know how the data looks like you can: */}
              {/* 1. use console.log() to write the data to the console */}
              {/* 2. use the network tab in the developer tab - https://developer.chrome.com/docs/devtools/network */}
            </div>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
