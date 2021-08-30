import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Krai A. | Home</title>
        <meta
          name='description'
          content="Hello, I am Krai and I'm a Software Developer based in Singapore"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I am <a href='https://www.linkedin.com/in/krai-alapide/'>Krai!</a>
        </h1>
        <h1 className={styles.subtitle}>
          I am Software Engineer based in Singapore.
        </h1>
        <div className={styles.description}>
          This website is still under construction though.
          <p>
            For now, so you can reach me at{' '}
            <a className='link' href='mailto:krai.alapide@gmail.com'>
              krai.alapide@gmail.com
            </a>{' '}
            instead!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
