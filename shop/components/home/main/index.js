import styles from './styles.module.scss'
import Offers from './offers'
import MainSwiper from './swiper'

import Link from 'next/link'

import { useSession } from 'next-auth/react'
import Menu from './Menu'
import User from './User'
import Header from './Header'

export default function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <Menu />
      <MainSwiper />
      <Offers />
      <User />
    </div>
  )
}
