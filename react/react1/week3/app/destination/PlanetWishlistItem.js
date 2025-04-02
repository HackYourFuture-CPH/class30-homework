"use client";
import styles from "@/components/destination/destination.module.css";
export const PlanetWishlistItem = ({ name, onRemove, thumbnail }) => {
  return (
    <div className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={thumbnail} alt="" />
      <b>{name.toUpperCase()}</b>
      <button onClick={onRemove}>remove</button>
    </div>
  );
};
