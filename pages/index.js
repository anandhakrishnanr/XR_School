// pages/index.js
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>XR School - Stay Tuned</title>
        <meta name="description" content="Stay tuned for more updates from XR School" />
      </Head>

      {/* Company Name */}
      <header className={styles.header}>
        <h1>XR School</h1>
      </header>

      {/* Stay Tuned Message */}
      <main className={styles.main}>
        <h2>STAY TUNED</h2>
      </main>

      {/* Contact Information */}
      <footer className={styles.footer}>
        <h3>Connect With Us</h3>

        {/* Social Media Links */}
        <div className={styles.socialMedia}>
          <a href="https://www.linkedin.com/company/xr-school-io" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/xrschool.io?igsh=MTl6ZGo1YWR5Z2dmMw==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          </a>
        </div>
      </footer>
    </div>
  );
}
