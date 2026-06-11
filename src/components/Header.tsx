import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { label: 'WORK', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'MISC', path: '/misc' },
]

export default function Header() {
  const { pathname } = useLocation()

  const isActive = (path: string | null) => {
    if (path === '/') return pathname === '/'
    if (!path) return false
    return pathname.startsWith(path)
  }

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.name}>
        <span>BILLY</span>
        <span>KIRCH:</span>
      </Link>
      <nav className={styles.nav}>
        {NAV_ITEMS.map(({ label, path }) => {
          const active = isActive(path)
          if (!path) {
            return (
              <span key={label} className={`${styles.navItem} ${styles.inactive} ${styles.disabled}`}>
                {label}
              </span>
            )
          }
          return (
            <Link
              key={label}
              to={path}
              className={`${styles.navItem} ${active ? styles.active : styles.inactive}`}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
