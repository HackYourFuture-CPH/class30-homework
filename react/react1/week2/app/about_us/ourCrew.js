import styles from "./page.module.css";

const crew = [
  {
    img: "/crew/image-douglas-hurley.webp",
    name: "Captain Douglas Hurley",
    description:
      "A former NASA astronaut with over 15 years of experience, Captain Douglas leads our missions with unparalleled expertise and a passion for space exploration.",
  },
  {
    img: "/crew/image-anousheh-ansari.webp",
    name: "Chief Engineer Anousheh Ansari",
    description:
      "With her extensive background in aerospace engineering, Anousheh is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
  },
  {
    img: "/crew/image-mark-shuttleworth.webp",
    name: "Crew Member Mark Shuttleworth",
    description:
      "Mark brings a unique blend of technical skills and customer service experience to the team. He's always ready to assist with any needs and to make sure every traveler has an unforgettable experience",
  },
  {
    img: "/crew/image-victor-glover.webp",
    name: "Mission Specialist Victor Glover",
    description:
      "As a mission specialist, Victor's job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Victor is the perfect guide for our space travelers.",
  },
];

const OurCrew = () => {
  return (
    <section className={styles.ourCrew}>
      <h2>Meet our talented crew</h2>
      <p>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>
      <div className={styles.crewList}>
        {crew.map((member, index) => (
          <div key={index} className={styles.crewMember}>
            <img
              src={member.img}
              alt={member.name}
              className={styles.crewImage}
            />
            <h3 style={{ color: "black" }}>{member.name}</h3>
            <p style={{ color: "black" }}>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCrew;
