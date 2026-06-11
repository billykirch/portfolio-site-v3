import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './Misc.module.css'

export default function Misc() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.body}>
            <p>Extras on the way...</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
