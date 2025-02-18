import Link from 'next/link'
import { FC } from 'react'

interface HeaderProps {
  menuOpen: boolean
  setMenuOpen: (menuOpen: boolean) => void
}

const Header: FC<HeaderProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className="p-4 flex items-center justify-between flex-wrap">
      <h1 className="text-2xl font-bold">OBC</h1>

      <div className="lg:hidden flex items-center">
        <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      <nav className={`w-full lg:w-auto ${menuOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className="flex lg:flex-row flex-col lg:space-x-4 space-y-4 lg:space-y-0">
          <li className="p-2 hover:opacity-65 cursor-pointer">
            <Link href="/" className="">
              Home
            </Link>
          </li>
          <li className="p-2 hover:opacity-65 cursor-pointer">
            <Link href="/about" className="">
              About Me
            </Link>
          </li>
          <li className="bg-gray-100 p-2 rounded hover:opacity-65 cursor-pointer">
            <Link
              target="blank"
              href="https://drive.google.com/file/d/1bo30CM4ER0VwlvkOj7grvsxlSQyhdWAr/view?usp=sharing"
              className=""
            >
              My Resume
            </Link>
          </li>
          <li className="bg-[#00FFD0] p-2 rounded hover:opacity-65 cursor-pointer">
            <Link href="mailto:onahbernardchizoba@gmail.com" target="blank" className="">
              Contact Bernard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
