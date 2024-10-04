import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Card.module.css'

const inter = Inter({ subsets: ['latin'] })

const Return = () => {
  return (
    <>
      <Link
        href="/"
        className={styles.card}
        style={{fontSize: "1.5rem", fontWeight: "bold"}}
      >
        トップに戻る
      </Link>
    </>
  )
}

export default Return