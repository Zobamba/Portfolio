import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Socials = () => {
  return (
    <div className="flex items-center justify-between px-28 mb-8">
      <div>
        <h1 className="text-2xl font-bold">OBC</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          href={'https://x.com/onah_chizoba'}
          target="blank"
          className="bg-gray-100 rounded p-2 hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          <Image width={25} height={25} src={'/x-twitter.svg'} alt="" />
        </Link>
        <Link
          href={'https://www.instagram.com/onah_zoba/'}
          target="blank"
          className="bg-gray-100 rounded p-2 hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          <Image width={25} height={25} src={'/instagram.svg'} alt="" />
        </Link>
        <Link
          href={'https://www.facebook.com/bernard.onah/'}
          target="blank"
          className="bg-gray-100 rounded p-2 hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          <Image width={25} height={25} src={'/fb.svg'} alt="" />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/bernard-onah-2543a11a0/'}
          target="blank"
          className="bg-gray-100 rounded p-2"
        >
          <Image width={25} height={25} src={'/linkedin.svg'} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Socials
