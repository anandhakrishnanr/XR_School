// pages/index.js
import Head from 'next/head';
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
        <h1>My Company Name</h1>
      </header>

      {/* Stay Tuned Message */}
      <main className={styles.main}>
        <h2>STAY TUNED</h2>
      </main>

      {/* Contact Information */}
      <footer className={styles.footer}>
        <h3>Contact Information</h3>
        <p>Email: contact@mycompanyname.io</p>
        <p>Phone: +1-234-567-8901</p>
        <p>Address: 123, My Company St, City, Country</p>
      </footer>
    </div>
  );
}
