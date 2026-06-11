import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import styles from './ProjectTile.module.css'

interface Props {
  project: Project
  canReveal: boolean
  onReveal: () => void
}

export default function ProjectTile({ project, canReveal, onReveal }: Props) {
  const [imageDecoded, setImageDecoded] = useState(!project.thumbnail)
  const [visible, setVisible] = useState(false)
  const hasRevealed = useRef(false)

  useEffect(() => {
    if (!project.thumbnail) return
    const img = new Image()
    img.src = project.thumbnail
    img.decode()
      .then(() => setImageDecoded(true))
      .catch(() => setImageDecoded(true))
  }, [project.thumbnail])

  useEffect(() => {
    if (!imageDecoded || !canReveal || hasRevealed.current) return
    hasRevealed.current = true
    setVisible(true)
    const timer = setTimeout(onReveal, 150)
    return () => clearTimeout(timer)
  }, [imageDecoded, canReveal, onReveal])

  return (
    <Link
      to={`/work/${project.slug}`}
      className={`${styles.tile}${visible ? ` ${styles.visible}` : ''}`}
    >
      <div className={`${styles.thumbnail}${project.thumbnail ? ` ${styles.thumbnailShadow}` : ''}`}>
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} className={styles.image} />
        ) : null}
      </div>
      <div className={styles.meta}>
        <p>
          <span className={styles.title}>{project.title}</span>
          <span className={styles.subtitle}>, {project.subtitle}</span>
        </p>
      </div>
    </Link>
  )
}
