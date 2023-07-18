'use client'
import {
  BriefcaseIcon,
  EnvelopeIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid'
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../Icons'
import MobileNav from './MobileNav'

export default function Menu() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className='sticky top-0 flex-col justify-between hidden w-16 h-screen text-gray-300 shadow lg:w-20 bg-zinc-900 md:flex lg:py-4 xl:py-8'>
        <div className='w-full'>
          <button
            onClick={() => scrollTo('home')}
            className='flex flex-col items-center justify-center w-full h-16 shadow-sm lg:h-20 group shadow-zinc-800 hover:text-cyan-500'
          >
            <HomeIcon className='w-6 h-6 lg:w-8 lg:h-8 group-hover:scale-110' />
            <span className='text-xs group-hover:scale-110'>Home</span>
          </button>

          <button
            onClick={() => scrollTo('about')}
            className='flex flex-col items-center justify-center w-16 h-16 shadow-sm lg:h-20 lg:w-20 group shadow-zinc-800 hover:text-cyan-500'
          >
            <UserIcon className='w-6 h-6 lg:w-8 lg:h-8 group-hover:scale-110' />
            <span className='text-xs group-hover:scale-110'>About</span>
          </button>
          <button
            onClick={() => scrollTo('portfolio')}
            className='flex flex-col items-center justify-center w-16 h-16 shadow-sm lg:h-20 lg:w-20 group shadow-zinc-800 hover:text-cyan-500'
          >
            <BriefcaseIcon className='w-6 h-6 lg:w-8 lg:h-8 group-hover:scale-110' />
            <span className='text-xs group-hover:scale-110'>portfolio</span>
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className='flex flex-col items-center justify-center w-16 h-16 shadow-sm lg:h-20 lg:w-20 group shadow-zinc-800 hover:text-cyan-500'
          >
            <EnvelopeIcon className='w-6 h-6 lg:w-8 lg:h-8 group-hover:scale-110' />
            <span className='text-xs group-hover:scale-110'>Contact</span>
          </button>
        </div>
        <div>
          <a
            href='https://github.com/kapoylawas'
            target='_blank'
            className='flex flex-col items-center justify-center h-16 lg:h-20 group bg-cyan-950 hover:text-cyan-400'
          >
            <span className='w-6 h-6 lg:w-8 lg:h-8 group-hover:scale-125'>
              <GithubIcon />
            </span>
          </a>
          <a
            href='https://www.linkedin.com/in/arief-sangga-utama/'
            target='_blank'
            className='flex flex-col items-center justify-center h-16 lg:h-20 group bg-cyan-950 hover:text-cyan-400'
          >
            <span className='w-6 h-6 lg:w-8 lg:h-8 group-hover:scale-125'>
              <LinkedInIcon />
            </span>
          </a>
          <a
            href='https://twitter.com/alif_faizar'
            target='_blank'
            className='flex flex-col items-center justify-center h-16 lg:h-20 group bg-cyan-950 hover:text-cyan-400'
          >
            <span className='w-6 h-6 lg:w-8 lg:h-8 group-hover:scale-125'>
              <TwitterIcon />
            </span>
          </a>
        </div>
      </div>
      <MobileNav scrollTo={scrollTo} />
    </>
  )
}
