import Typewriter from '@/components/TypeWriter'

export default function Hero() {
  return (
    <section
      id='home'
      className='h-[calc(100vh-2rem)] flex flex-col items-center justify-center w-full'
    >
      <div className='flex flex-col items-center justify-center w-full gap-3 md:max-w-2xl lg:max-w-4xl'>
        <div className='flex flex-col items-center gap-2 md:gap-4'>
          <h1 className='text-5xl font-extrabold text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500'>
            Arief Sangga Utama
          </h1>
          <Typewriter text='Fullstack Web Developer' />
        </div>
        <span className='w-full h-1 rounded bg-gradient-to-r from-rose-400 via-sky-500 to-cyan-500'></span>
        <p className='text-lg text-center md:text-xl'>
          My expertise lies in web development and I have a strong understanding
          of both front-end and back-end technologies. I have a deep interest in
          technology and it drives me to constantly seeking opportunities to
          expand my knowledge and improve my skills.
        </p>
        <div className='relative mt-4'>
          <div className='h-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 w-44 md:w-52 md:h-10 lg:w-64 lg:h-12'></div>
          <a
            href='https://drive.google.com/file/d/1ZrR4U4jjZGCoI7sae4NaMqdqu7kS7e9W/view?usp=sharing'
            target='_blank'
            className='absolute flex items-center justify-center h-8 font-mono text-sm font-bold text-gray-900 bg-white w-44 md:w-52 md:h-10 lg:w-64 lg:h-12 md:text-base lg:text-lg lg:font-semibold right-1 bottom-1 lg:right-2 lg:bottom-2 hover:right-0 hover:bottom-0'
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
