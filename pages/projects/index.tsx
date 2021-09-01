import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Krai A. | Projects</title>
        <meta name='description' content="Krai's projects" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Here are some of the applications I created in my effort to have a
          portfolio.
        </h1>
      </main>
    </div>
  );
};

export default Home;
