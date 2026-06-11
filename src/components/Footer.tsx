import styles from './Footer.module.css'
import { contactLinks } from '../data/contact'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        {contactLinks.map(({ label, href }) => (
          <a key={label} href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        ))}
      </div>
      <span>© {new Date().getFullYear()} Billy Kirchgessner</span>
    </footer>
  )
}
