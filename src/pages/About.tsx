import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './About.module.css'
import { contactLinks } from '../data/contact'
import headshot from '../assets/headshot.jpg'

export default function About() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.biosquare}>
          <img src={headshot} className={styles.headshot} alt='Headshot of Billy'/>
          <div className={styles.bio}>
            <div>
              <p>
                Billy is a multidisciplinary designer and engineer. He received a B.S. in C.S. with an AI concentration from Northwestern University in Evanston, IL.
              </p>
            </div>
            <div className={styles.contact}>
              {contactLinks.map(({ label, href }) => (
                <a key={label} href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
