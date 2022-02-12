import styles from '../styles/Posts.module.scss'
import Post from './Post'
import logo from '../assets/peacock.png'

const testData = [
  {
    id: '1',
    username: 'milobedini',
    userImage:
      'https://res.cloudinary.com/dvgbdioec/image/upload/v1641473906/x92clfsasiacrsyoxci6.jpg',
    postImage: logo,
    caption: 'Spread your wings. ',
  },
  {
    id: '1',
    username: 'milobedini',
    userImage:
      'https://res.cloudinary.com/dvgbdioec/image/upload/v1641473906/x92clfsasiacrsyoxci6.jpg',
    postImage: logo,
    caption: 'Spread your wings. ',
  },
  {
    id: '1',
    username: 'milobedini',
    userImage:
      'https://res.cloudinary.com/dvgbdioec/image/upload/v1641473906/x92clfsasiacrsyoxci6.jpg',
    postImage: logo,
    caption: 'Spread your wings. ',
  },
]

const Posts = () => {
  return (
    <div>
      {testData.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImage={post.userImage}
          postImage={post.postImage}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
