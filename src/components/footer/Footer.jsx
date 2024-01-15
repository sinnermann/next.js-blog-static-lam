import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Creating Most Incredible Websites</div>
      <div className={styles.text}>
        Made by Elmar A. © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;