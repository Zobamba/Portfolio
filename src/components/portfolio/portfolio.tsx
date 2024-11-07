import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className="px-32 pt-16">
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-4xl font-bold mb-2">My Portfolio</h1>
        <p className="text-lg mb-4 text-gray-500">Check out some applications {`I've`} developed</p>
      </div>
      <div>
        <ul>
          <li className="flex items-center justify-between mb-24">
            <div className="w-62%">
              <Image width={600} height={600} alt="delic" src={'/delic.jpeg'} />
            </div>
            <div className="w-[35%]">
              <h1 className="text-4xl font-bold mb-2">Delic Restaurant</h1>
              <p className="text-lg mb-4 text-gray-500 text start mt-4 mb-8">
                An online restaurant application for users to order and track meals/dishes.
              </p>
              <Link
                className="bg-[#00FFD0] p-[12px] rounded hover:opacity-65 cursor-pointer"
                href={'https://delic.netlify.app/'}
                target="blank"
              >
                View Application
              </Link>
            </div>
          </li>
          <li className="flex items-center justify-between mb-24">
            <div className="w-62%">
              <Image width={600} height={600} alt="delic-admin" src={'/delic-admin.png'} />
            </div>
            <div className="w-[35%]">
              <h1 className="text-4xl font-bold mb-2">Delic Admin</h1>
              <p className="text-lg mb-4 text-gray-500 text start mt-4 mb-8">
                The admin panel of the online restaurant application to manage the {`restaurant's`}{' '}
                menu, including adding, updating, or removing dishes, monitor and filling incoming
                orders.
              </p>
              <Link
                className="bg-[#00FFD0] p-[12px] rounded hover:opacity-65 cursor-pointer"
                href={'https://delic-admin.netlify.app/'}
                target="blank"
              >
                View Application
              </Link>
            </div>
          </li>
          <li className="flex items-center justify-between mb-24">
            <div className="w-62%">
              <Image width={600} height={600} alt="delic-be" src={'/delic-be.jpeg'} />
            </div>
            <div className="w-[35%]">
              <h1 className="text-4xl font-bold mb-2">Delic Backend</h1>
              <p className="text-lg mb-4 text-gray-500 text start mt-4 mb-8">
                The backend system for the online restaurant application.
              </p>
              <Link
                className="bg-[#00FFD0] p-[12px] rounded hover:opacity-65 cursor-pointer"
                href={'https://github.com/Zobamba/Delic'}
                target="blank"
              >
                View Application
              </Link>
            </div>
          </li>
          <li className="flex items-center justify-between mb-24">
            <div className="w-62%">
              <Image width={600} height={600} alt="kings-avatar" src={'/kings-avatar.jpg'} />
            </div>
            <div className="w-[35%]">
              <h1 className="text-4xl font-bold mb-2">Kings Avatar</h1>
              <p className="text-lg mb-4 text-gray-500 text start mt-4 mb-8">
                A simple tool for easily creating and customizing profile display pictures.
              </p>
              <Link
                className="bg-[#00FFD0] p-[12px] rounded hover:opacity-65 cursor-pointer"
                href={'https://kings-avatar.netlify.app/'}
                target="blank"
              >
                View Application
              </Link>
            </div>
          </li>
          <li className="flex items-center justify-between mb-24">
            <div className="w-62%">
              <Image width={600} height={600} alt="spin-the-wheel" src={'/spin-the-wheel.jpg'} />
            </div>
            <div className="w-[35%]">
              <h1 className="text-4xl font-bold mb-2">Spin The Wheel</h1>
              <p className="text-lg mb-4 text-gray-500 text-start mt-4 mb-8">
                An interactive spinning wheel game where users can spin to get random results.
              </p>
              <Link
                className="bg-[#00FFD0] p-[12px] rounded hover:opacity-65 cursor-pointer"
                href={'https://spinourwheel.netlify.app/'}
                target="blank"
              >
                View Application
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Portfolio
