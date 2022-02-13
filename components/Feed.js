import styles from '../styles/Feed.module.scss'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'

const Feed = () => {
  return (
    <main className={styles.main}>
      <section className={styles.storiesWrapper}>
        <Stories />
        <Posts />
      </section>
      <section>
        <MiniProfile />
        <Suggestions />
      </section>
    </main>
  )
}

export default Feed
