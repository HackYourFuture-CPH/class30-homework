import styles from "./page.module.css";
import values from "./OurValues";
import OurCrew from "./ourCrew.js";
import OurPartners from "./ourPartners";

const OurValues = () => {
  return (
    <section className={styles.OurValues}>
      <h2 style={{ textAlign: "center", color: "#fff", padding: "2rem" }}>
        Our Values
      </h2>
      <div className={styles.grid}>
        {values.map((value, index) => (
          <div key={index} className={styles.card}>
            <span className={styles.number}>{value.number}</span>
            <h4 className={styles.title}>{value.title}</h4>
            <p className={styles.description}>{value.description}</p>
            <div className={styles.divider}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <OurValues />
        </section>
        <section className="card">
          <OurCrew />
        </section>
        <section className="card">
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;
