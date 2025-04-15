import styles from "@/app/about_us/page.module.css";

const partners = [
  { name: "alphabet", img: "/business_partners/alphabet-logo.png" },
  { name: "amazon", img: "/business_partners/amazon_logo.png" },
  { name: "cbc", img: "/business_partners/CBC_Logo_White.png" },
  { name: "microsoft", img: "/business_partners/Microsoft-Logo-white.png" },
  { name: "nyu", img: "/business_partners/nyu-logo.png" },
  { name: "queen", img: "/business_partners/QueensLogo_white.png" },
  { name: "samsung", img: "/business_partners/samsung-logo.png" },
  { name: "sodexo", img: "/business_partners/sodexo-logo.png" },
];

const OurPartners = () => {
  return (
    <section className={styles.ourPartners}>
      <h2 style={{ textAlign: "left", fontSize: "20px" }}>OUR PARTNERS</h2>
      <h3 style={{ fontSize: "32px", fontWeight: "bold", maxWidth: "400px" }}>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </h3>
      <div className={styles.gridStyle}>
        {partners.map((partner, index) => {
          return (
            <div key={index} className={styles.logoContainer}>
              <img
                src={partner.img}
                alt={partner.name}
                className={styles.imageStyle}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurPartners;
