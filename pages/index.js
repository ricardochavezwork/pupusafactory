import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PupusaFactory</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Benvenuto su PupusaFactory.it
        </h1>

        <p className={styles.description}>
          Lavori in corso sulla nostra pagina...
        </p>

        <p className={styles.description}>
          Seguici su :
        </p>

        <div className={styles.grid}>
          <a href="https://www.facebook.com/pupusafactory/" target="_blank" className={styles.card}>
            <h3>Facebook &rarr;</h3>
          </a>

          <a
            href="m.me/pupusafactory" target="_blank"
            className={styles.card}
          >
            <h3>Facebook Messenger &rarr;</h3>
          </a>

          <a href="https://www.instagram.com/pupusafactory.it/" target="_blank" className={styles.card}>
            <h3>Instagram &rarr;</h3>
          </a>

          <a
            href="https://twitter.com/pupusafactory" target="_blank"
            className={styles.card}
          >
            <h3>Twitter &rarr;</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
