import { useState, useCallback } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectTile from '../components/ProjectTile'
import { projects } from '../data/projects'
import styles from './Home.module.css'

export default function Home() {
  const [revealedCount, setRevealedCount] = useState(0)

  const handleReveal = useCallback(() => {
    setRevealedCount(prev => prev + 1)
  }, [])

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectTile
              key={project.slug}
              project={project}
              canReveal={i === revealedCount}
              onReveal={handleReveal}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
