import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Projects.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Krai A. | Projects</title>
        <meta name='description' content="Krai's projects" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Link href='/'>
        <a className='link_home'> Go Back Home</a>
      </Link>
      <main className={styles.main}>
        <h1 className={styles.subtitle}>
          (WIP) Here are the links to some of my personal work and research
        </h1>
        <div className={styles.project_link}>
          <a href='https://zil.kraiyons.dev'>CoinViewer</a>
          <p>
            A frontend application that displays coins from Zilliqa&apos;s
            TestNet Blockchain.
          </p>
          Written in React Hooks, ZilliqaJS, TailwindCSS, Jest and Testing
          Library
        </div>
        <div className={styles.project_link}>
          <a href='https://budget.kraiyons.dev/'>SimpleBudget</a>
          <p>
            A simple frontend application used to calculate an individual&apos;s
            expenses
          </p>
          Written in VueJS
        </div>
        <div className={styles.project_link}>
          <a href='#'>SickFits</a>
          <p>
            An ecommerce platform made during my study of Wes Bos&apos;s
            Advanced React
          </p>
          Written in React, NextJS, Apollo, GraphQL, Node, Express, Yoga, and
          Prisma
        </div>
        <div className={styles.project_link}>
          <a href='#'>HR App</a>
          <p>
            A full web application that handles employee registration and leave
            management.
          </p>
          Written in React Hooks, TailwindCSS, Node, Express, MongoDB and
          Mongoose
        </div>
      </main>
    </div>
  );
};

export default Home;
