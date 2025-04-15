"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Footer.module.css";

const navbarItems = [
  {
    title: "ABOUT_US",
    link: "/about_us",
  },
  {
    title: "DESTINATION",
    link: "/destination",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

const socialMediaLinks = [
  {
    title: "Facebook",
    url: "https://facebook.com",
    icon: "/socialmedia/facebook.png",
  },
  {
    title: "Instagram",
    url: "https://instagram.com",
    icon: "/socialmedia/instagram.jpeg",
  },
  {
    title: "TikTok",
    url: "https://tiktok.com",
    icon: "/socialmedia/tiktok.png",
  },
  {
    title: "On the streets at night",
    url: "https://google.com",
    icon: "/socialmedia/google.png",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: "/socialmedia/linkedin.png",
  },
];

const SocialMediaItem = ({ url, title, icon }) => (
  <li>
    <a href={url} target="_blank">
      <img src={icon} alt={`${title} icon`} className={styles.socialIcon} />
      {title}
    </a>
  </li>
);

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>

      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          {navbarItems.map((item) => (
            <li key={item.link}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {socialMediaLinks.map((social) => (
            <SocialMediaItem key={social.url} {...social} />
          ))}
        </ul>
      </div>
    </footer>
  );
};
