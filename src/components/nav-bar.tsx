export function Navbar() {
  return (
    <nav className='mt-6 text-white'>
      <ul>
        <li>
          <a className='flex items-center justify-start gap-x-2 group cursor-pointer'>
            <div className='h-[2px] w-4 bg-gray-200 rounded-full group-hover:w-12  transition-all group-hover:bg-white' />
            <span className='text-gray-200 group-hover:text-white transition-all text-lg font-medium'>
              Sobre mí
            </span>
          </a>
        </li>
        <li>
          <a className='flex items-center justify-start gap-x-2 group cursor-pointer'>
            <div className='h-[2px] w-4 bg-gray-200 rounded-full group-hover:w-12  transition-all group-hover:bg-white' />
            <span className='text-gray-200 group-hover:text-white transition-all text-lg font-medium'>
              Experiencia
            </span>
          </a>
        </li>{' '}
        <li>
          <a className='flex items-center justify-start gap-x-2 group cursor-pointer'>
            <div className='h-[2px] w-4 bg-gray-200 rounded-full group-hover:w-12  transition-all group-hover:bg-white' />
            <span className='text-gray-200 group-hover:text-white transition-all text-lg font-medium'>
              Reseñas
            </span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
