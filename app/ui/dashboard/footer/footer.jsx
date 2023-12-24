import styles from "./footer.module.css";
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className={styles.container}>
    <div className={styles.footerContent}>
      <p className={styles.text}>© 2024 <Link href="https://github.com/Selman-S" target="_blank">Selman-s</Link> | <a href="https://selmansahbudak.com.tr/" target="_blank">
          selmansahbudak.com.tr
      </a></p>
    </div>
  </footer>
  );
};

export default Footer;