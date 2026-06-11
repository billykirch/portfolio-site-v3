import React from 'react'
import styles from '../pages/ProjectPage.module.css'

import qabuddyThumb from '../assets/project-images/qabuddy/thumbnail3.png'
import qabuddyModel from '../assets/project-images/qabuddy/concept-model.png'

import fairworkThumb from '../assets/project-images/fairwork/thumbnail.png'
import fairworkInput from '../assets/project-images/fairwork/input-ss.png'
import fairworkThinking from '../assets/project-images/fairwork/thinking-ss.png'
import fairworkResult from '../assets/project-images/fairwork/result-ss.png'

import articThumb from '../assets/project-images/artic/thumbnail.jpg'
import articSample from '../assets/project-images/artic/sample-document.jpg'

import metamagThumb from '../assets/project-images/metamag/thumbnail2.png'
import metamagDiagram from '../assets/project-images/metamag/diagram.jpg'




export interface Project {
  slug: string
  title: string
  subtitle: string
  thumbnail?: string
  images?: string[]
  content?: React.ReactNode
}

export const projects: Project[] = [
  {
    slug: 'fairwork',
    title: 'FairWork',
    subtitle: 'An AI-powered contract-review tool to protect workers from labor exploitations',
    thumbnail: fairworkThumb,
    content: (
      <>
      <h3>&lt;/&gt;</h3>
      <p className={styles.tags}>Claude Platform, Python, Typescript, React</p>
      <h3>Background</h3>
      <p>
        In an employer’s market, job-seekers are inclined to accept a contract with minimal legal counselling. Signing onto unclear fine print causes major headaches in any work disputes down the line.
      </p>
      <p>
        This imbalance is a serious problem for an increasingly fragmented workforce tending toward independent contracting.
      </p>
      <h3>Process</h3>
      <p>
        Leveraging an LLM is a helpful first step. There's is potential to quickly and cheaply identify weakness that could later be exploited by an employer.
      </p>
      <p>
        That was the impetus for FairWork. Upload a contract, and quickly understand potential risks as an employee.
      </p>
      <p>
        Contract <i>flags</i> are broken down by <i>high</i> and <i>moderate</i> levels of severity. The system references specific sections and clauses in any uploaded contract, explaining the legal issues that could arise, tailored to your specific job title and relevant state jurisdiction.
      </p>
      <p>
        It was also important that the design include <i>caution</i> flags to identify areas in the contract that, while not illegal, are vague or exploitative. In such cases, the system provides a risk assessment based on the ambiguity of the clause.
      </p>
      <h3>Outcome</h3>
      <p>
        Employers have AI and human legal resources at their disposal when creating contracts. It is only fair that an employee uses the same tools to understand their work conditions and guarantee their fair treatment in the workplace. This can start with FairWork.
      </p>
      <p style={{ color: 'var(--color-secondary)', fontWeight: '300' }}>
        For a technical description, check out the <a href='https://github.com/billykirch/fairwork' target='_blank' style={{ textDecoration: 'underline' }}>Github repository</a>.
      </p>
      </>
    ),
    images: [fairworkInput, fairworkThinking, fairworkResult],
  },
  {

    slug: 'artic-notes',
    title: 'ArtIC Notes',
    subtitle: 'An exercise in AWS for quickly noting artwork observations',
    thumbnail: articThumb,
    content: (
      <>
        <h3>&lt;/&gt;</h3>
        <p className={styles.tags}>
          AWS, Python, CLI
        </p>
        <h3>Background</h3>
        <p>
          In an art history course (Spanish Art and Architecture, to be precise), I took notes on dozens of artworks. Irritatingly, when referencing my notes later on, I’d have to search the internet for details that would contextualize my momentary observations.
        </p>
        <p>
          I figured that having an automated tool to wrap background descriptions and images into my own notes would have been useful for my studies.
        </p>
        <h3>Process</h3>
        <p>
          When presented with an open-ended final project in a course on scalable software architectures, I took the opportunity to build such a tool. The project explores the Art Institute of Chicago (ArtIC) API, making use of artwork information and images provided by the institute.
        </p>
        <p>
          The project codebase primarily leverages AWS: S3 to store finalized PDF notes, RDS to organize users and their associated note IDs, Lambda to handle triggers and events, and the API Gateway to wrap all available functions into a RESTful API.
        </p>
        <h3>Outcome</h3>
        <p>
          Paired with a command line interface allowing users to type their own notes, the program renders tidy documents for later reference (see image).
        </p>
        <p>
          This combination enables users to upload custom notes associated with ArtIC assets to the cloud, then download their PDF notes locally, at any time.
        </p>
      </>
    ),
    images: [articSample],
  },
  {
    slug: 'dtr',
    title: 'Q&A Buddy',
    subtitle: 'Undergraduate research on improving peer-mentorship for computer science students',
    thumbnail: qabuddyThumb,
    content: (
      <>
        <h3>&lt;/&gt;</h3>
        <p className={styles.tags}>UX, Research</p>
        <p style={{ color: 'var(--color-secondary)', fontWeight: '300' }}>
          Read about the <a href='https://dtr.northwestern.edu/projects/recXp41jRcoUwlcLq' target='_blank' style={{ textDecoration: 'underline' }}>project</a> and the <a href='https://dtr.northwestern.edu/how-we-work' target='_blank' style={{ textDecoration: 'underline' }}>research group</a>.
        </p>
      </>
    ),
    images: [qabuddyModel],
  },
  {
    slug: 'metamag',
    title: 'Meta-Mag',
    subtitle: 'A study of the mutating journalistic and cultural role of magazines',
    thumbnail: metamagThumb,
    content: (
      <>
        <h3>&lt;/&gt;</h3>
        <p className={styles.tags}>Research</p>
        <p style={{ color: 'var(--color-secondary)', fontWeight: '300' }}>
          Access the compilation of articles <a href='https://nuknightlab.notion.site/Magazines-in-the-21st-Century-What-It-Takes-to-Succeed-05fb8c72c7cf4fee91cf10f67548a285' target='_blank' style={{ textDecoration: 'underline' }}>here</a>.
        </p>
      </>
    ),
    images: [metamagDiagram],
  },
  {
    slug: 'muniment',
    title: 'Muniment',
    subtitle: 'Details forthcoming...',
  },
]
