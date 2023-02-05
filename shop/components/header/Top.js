import styles from './styles.module.scss'
import { MdSecurity } from 'react-icons/md'
import { BsSuitHeart } from 'react-icons/bs'
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri'
import Link from 'next/link'


export default function Top() {
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
            <MdSecurity/>
            <span>Buyer protection</span>
          </li>
          <li>
            <span>Customer Service</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <BsSuitHeart/>
            <Link href="/profile/whishlist">
            <span>Whishlist</span>
            </Link>
          </li>
          <li>
            <div className={styles.flex}>
              <RiAccountPinCircleLine/>
              <span>Account</span>
              <RiArrowDropDownFill/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
