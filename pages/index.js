import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Peacock</title>
        <meta name="description" content="Spread your wings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}

      {/* Modal */}
    </div>
  )
}
