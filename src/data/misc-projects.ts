export interface MiscProject {
  slug: string
  title: string
  subtitle: string
  thumbnail?: string
}

export const projects: MiscProject[] = [
  {
    slug: 'tdl',
    title: 'Burkemanian TDL',
    subtitle: 'Project subtitle, otherwise short description',
  },
  {
    slug: 'project-two',
    title: 'Project Title',
    subtitle: 'Project subtitle, otherwise short description',
  },
]
