import styles from '../styles/Feed.module.scss'
import Posts from './Posts'
import Stories from './Stories'

const Feed = () => {
  return (
    <main className={styles.main}>
      <section className={styles.storiesWrapper}>
        <Stories />
        <Posts />
      </section>
      <section></section>
    </main>
  )
}

export default Feed
