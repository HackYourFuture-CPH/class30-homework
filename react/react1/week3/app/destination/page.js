"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { PlanetWishlistItem } from "@/app/destination/PlanetWishlistItem";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetCard from "./PlanetCard";

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const onAddOrRemovePlanet = (name, index) => {
    setSelectedPlanets((prevSelected) => {
      if (prevSelected.includes(name)) {
        return prevSelected.filter((planet) => planet !== name);
      } else {
        return [...prevSelected, name];
      }
    });
    console.log(
      `You selected the following planet: ${name}, with the index of ${index}`
    );
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.name === name)) {
        return prevWishlist.filter((item) => item.name !== name);
      } else {
        return [
          ...prevWishlist,
          { name, thumbnail: `/destination/image-${name.toLowerCase()}.png` },
        ];
      }
    });
  };

  const handleAddWishlistItem = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };
  const removeFromWishlist = (name) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.name !== name)
    );
    setSelectedPlanets((prevSelected) =>
      prevSelected.filter((planet) => planet !== name)
    );
  };
  const numberOfPlanets = selectedPlanets.length;
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>You have {numberOfPlanets} in your wishlist</p>
          )}

          <AddWishlistItem onAddWishlistItem={handleAddWishlistItem} />

          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {wishlist.length > 0 ? (
              wishlist.map((item) => (
                <PlanetWishlistItem
                  key={item.name}
                  name={item.name}
                  onRemove={() => removeFromWishlist(item.name)}
                  thumbnail={item.thumbnail}
                />
              ))
            ) : (
              <p>No items in wishlist</p>
            )}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>

          <PlanetCard
            name={"Europa"}
            description={
              "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers."
            }
            thumbnail={"destination/image-europa.png"}
            isSelected={selectedPlanets.includes("Europa")}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <PlanetCard
            name={"Mars"}
            description={
              "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth."
            }
            thumbnail={"destination/image-mars.png"}
            isSelected={selectedPlanets.includes("Mars")}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <PlanetCard
            name={"Moon"}
            description={
              "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers."
            }
            thumbnail={"destination/image-moon.png"}
            isSelected={selectedPlanets.includes("Moon")}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <PlanetCard
            name={"Titan"}
            description={
              "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets."
            }
            thumbnail={"destination/image-titan.png"}
            isSelected={selectedPlanets.includes("Titan")}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
        </section>
      </main>
    </div>
  );
};

export default Destinations;
