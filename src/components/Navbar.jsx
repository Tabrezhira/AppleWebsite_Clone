import {appleImg, bagImg, searchImg} from '../utils'


function Navbar() {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width '>
        <img src={appleImg} alt="Apple" width={14}/>
        <div className='flex flex-1 justify-center max-sm:hidden'>
          {['Phone','Macbooks','Tablets'].map((nav) => (
            <div key={nav}>
                {nav}
            </div>
          ))}
        </div>
        <div>
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="search" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar