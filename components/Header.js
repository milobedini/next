import Image from 'next/image'
import logo from '../assets/peacock.png'
import styles from '../styles/Header.module.scss'
import {
  HeartIcon,
  HomeIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from '@heroicons/react/solid'

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerBand}>
        {/* left */}
        <div className={styles.logoWrapper}>
          <Image src={logo} layout="fill" objectFit="contain" />
        </div>

        {/* middle, search */}
        <div className={styles.middleHeader}>
          <div className={styles.searchIconWrapper}>
            <SearchIcon color="#004A8F" className={styles.searchIcon} />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        {/* right */}
        <div className={styles.rightHeader}>
          <HomeIcon className={styles.rightIcon} color="#26A96C" />
          <MenuIcon className={styles.burgerIcon} color="#26A96C" />
          <div className={styles.airplaneWrapper}>
            <PaperAirplaneIcon className={styles.rightIcons} color="#26A96C" />
            <div className={styles.airplaneNumber}>3</div>
          </div>
          <PlusCircleIcon className={styles.rightIcons} color="#26A96C" />
          <UserGroupIcon className={styles.rightIcons} color="#26A96C" />
          <HeartIcon className={styles.rightIcons} color="#26A96C" />
          <img
            className={`${styles.avatar} ${styles.rightIcons} `}
            src="https://res.cloudinary.com/dvgbdioec/image/upload/v1641473906/x92clfsasiacrsyoxci6.jpg"
            alt="profile"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
