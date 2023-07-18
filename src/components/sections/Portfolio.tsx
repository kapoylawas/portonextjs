import PortfolioCard from '@/components/PortfolioCard'
import { PROJECTS } from '@/constants'

export interface IProject {
  name: string
  tech: string[]
  imageUrl: string
  url: string
  githubUrl: string
}

export default function Portfolio() {
  return (
    <section id='portfolio' className='w-full px-0 py-8 md:px-4 lg:px-8'>
      <h1 className='text-3xl font-bold text-center md:text-4xl'>Portofolio</h1>
      <ul
        role='list'
        className='grid gap-6 mt-8 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8'
      >
        {PROJECTS.map((project) => (
          <PortfolioCard key={project.name} {...project} />
        ))}
      </ul>
    </section>
  )
}
