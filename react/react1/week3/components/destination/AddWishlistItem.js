"use client";

import { useState } from "react";
import styles from "./destination.module.css";

export const AddWishlistItem = ({ onAddWishlistItem = () => {} }) => {
  const [thumbnail, onThumbnailChange] = useState(
    "/destination/image-europa.png"
  );
  const [wishlistItem, setWishlistItem] = useState("");

  const onAddItemPressed = () => {
    if (!wishlistItem.trim()) return;

    onAddWishlistItem({
      name: wishlistItem,
      thumbnail,
    });

    setWishlistItem("");
    onThumbnailChange("/destination/image-europa.png");
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={wishlistItem}
        onChange={(e) => setWishlistItem(e.target.value)}
        placeholder="Enter wishlist item name"
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select
        id="customWishlistThumbnail"
        value={thumbnail}
        onChange={(e) => onThumbnailChange(e.target.value)}
      >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD TO WISHLIST</button>
      <div>
        <p>Selected Item: {wishlistItem || "None"}</p>
        <img src={thumbnail} alt="Selected destination" width="100" />
      </div>
    </div>
  );
};
