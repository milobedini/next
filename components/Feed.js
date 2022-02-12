import styles from '../styles/Feed.module.scss'
import Stories from './Stories'

const Feed = () => {
  return (
    <main className={styles.main}>
      <section className={styles.storiesWrapper}>
        <Stories />
      </section>
      <section></section>
    </main>
  )
}

export default Feed
