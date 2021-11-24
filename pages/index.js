import Link from 'next/link';
import styles from '../styles/pages/Home.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>

      <h2 className={styles.title}>
        Welcome to Only You&lsquo;d!
      </h2>

      <p className={styles.description}>
        Only You&lsquo;d is an open-sourced and crowd-sourced game inspired by the Loaded Questions boardgame.
      </p>

      <section className={styles.launchpad}>
        <Link href="/play">
          <a className={styles.cardbutton}>Play a game online!</a>
        </Link>

        <Link href="/bank">
          <a className={styles.cardbutton}>View the question bank!</a>
        </Link>

        <Link href="/help">
          <a className={styles.cardbutton}>Contribute to the question bank!</a>
        </Link>
      </section>
        
    </div>
  )
};

export default HomePage;
