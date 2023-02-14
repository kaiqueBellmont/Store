import styles from './styles.module.scss'


import Ad from './Ad'
import Main from './Main'
import Top from './Top'
export default function Header() {
  return (
    <header className={styles.header}>
      <Ad />
      <Top />
      <Main />
    </header>
  )
}
