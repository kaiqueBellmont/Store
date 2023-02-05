import Link from 'next/link'
import styles from './styles.module.scss'


export default function Ad() {
    return <Link href="/browse">
        <div className={styles.ad}>Isso deveria aparecer?</div>
    </Link >

}
