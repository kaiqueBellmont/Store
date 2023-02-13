import styles from './styles.module.scss'
import { MdSecurity } from 'react-icons/md'
import { BsSuitHeart } from 'react-icons/bs'
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri'
import Link from 'next/link'
import { useState } from 'react'


export default function Top() {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png"
              alt="" />
            <span>Brasil / real</span>
          </li>
          <li>
            <MdSecurity />
            <span>Buyer protection</span>
          </li>
          <li>
            <span>Customer Service</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <BsSuitHeart />
            <Link href="/profile/whishlist">
              <span>Whishlist</span>
            </Link>
          </li>
          {
            loggedIn ? (
              <li>
                <div className={styles.flex}>
                  <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="" />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}
