import Link from 'next/link'

const Header = () => {
  return (
    <header className="p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">OBC</h1>
      <nav>
        <ul className="flex space-x-4">
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
              href="https://drive.google.com/file/d/1zTRbNh3VhjYCT1P8t2rMM06Mb0pxPdvx/view?usp=sharing"
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
