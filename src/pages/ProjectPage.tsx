import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { projects } from '../data/projects'
import styles from './ProjectPage.module.css'

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <p className={styles.notFound}>Project not found. <Link to="/">Return home.</Link></p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.body}>
          <div className={styles.content}>
            <h1 className={styles.title}>{project.title}</h1>
            <h2 className={styles.subtitle}>{project.subtitle}</h2>
            {project.tags && project.tags.length > 0 && (
              <div className={styles.tags}>
                {project.tags.map((i) => (
                  <span className={styles.tag}>{i}</span>
                ))}
              </div>
            )}
            {project.content}
          </div>
          {project.images && project.images.length > 0 && (
            <div className={styles.images}>
              {project.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} image ${i + 1}`}
                  className={styles.projectImage}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
