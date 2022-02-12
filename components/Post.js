import styles from '../styles/Post.module.scss'
import { DotsHorizontalIcon } from '@heroicons/react/solid'

const Post = ({ id, username, userImage, postImage, caption }) => {
  return (
    <div className={styles.post}>
      {/* Header */}
      <div className={styles.postHeader}>
        <img src={userImage} alt="" className={styles.userImage} />
        <p className={styles.username}>{username}</p>
        <DotsHorizontalIcon className={styles.dots} />
      </div>

      {/* Image */}
      {/* Buttons */}
      {/* Caption */}
      {/* Comments */}
      {/* Input Box */}
    </div>
  )
}

export default Post
