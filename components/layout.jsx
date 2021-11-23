import styles from './layout.module.scss';
import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Only You&lsquo;d</title>
        <meta name="description" content="Only You'd is an open-sourced and crowd-sourced game inspired by the Loaded Questions boardgame." />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1><Link href="/"><a>Only You&lsquo;d</a></Link></h1>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <a 
          href="https://github.com/tif-calin/only-youd/"
          target="_blank"
          rel="noopener noreferrer"
        >steal this</a>
      </footer>
    </div>
  );
};

export default Layout;
