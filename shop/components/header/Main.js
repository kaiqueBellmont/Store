import Link from 'next/link'
import styles from './styles.module.scss'
import { RiSearch2Line } from 'react-icons/ri'
import { FaOpenCart } from 'react-icons/fa'


export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/">
          <img className={styles.logo} src="../../../logo.png" alt="" />
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder='search...' />
          <div className={styles.search_icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link href="/cart">
          <a className={styles.cart}>
            <FaOpenCart />
          </a>
        </Link>
      </div>
    </div>
  )
}
