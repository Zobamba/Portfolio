import React from 'react'
import Image from 'next/image'
import Header from '@/src/components/header/header'
import IconTop from '@/src/components/icon-top/icon-top'
import Socials from '@/src/components/socials/socials'
import Footer from '@/src/components/footer/footer'
import Skills from '@/src/components/skills/skills'
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <Header />
      <main className="py-16">
        <div className="flex items-center justify-between px-28 w-full mb-24">
          <div className="flex flex-col w-[50%]">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg mb-4 text-gray-500 mb-4">
              {"I'm"} a software engineer with a passion for creating user-friendly and accessible
              applications. I have good communication skills and an important ability to perform
              well in a team.
            </p>
            <p className="text-lg mb-4 text-gray-500 mb-4">
              I have worked on various projects, from small startups to large corporations, and{' '}
              {"I'm "}always eager to learn and grow. I am dedicated to crafting robust backend
              systems and designing intuitive, scalable user interfaces to deliver efficient and
              innovative solutions.
            </p>
            <p className="text-lg mb-4 text-gray-500 mb-4">
              When I am not at my desk, I play video games or listen to music. Sometimes I take a
              walk on the street.
            </p>
          </div>
          <div className="relative w-[50%] h-[500px]">
            <Image alt="my-image" src="/my-image.jpg" fill className="object-cover" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between py-16 px-28">
          <h1 className="text-4xl font-bold mb-4 p-0 m-0">Technical Skills</h1>
          <p className="text-lg mb-4 text-gray-500">
            I am proficient with these stacks and have built amazing applications with them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full">
            <Skills image="/html.webp" name="HTML" />
            <Skills image="/css.webp" name="CSS" />
            <Skills image="/sass.png" name="SCSS" />
            <Skills image="/tailwind-css.svg" name="TAILWINDCSS" />
            <Skills image="/js.png" name="JAVASCRIPT" />
            <Skills image="/ts.svg" name="TYPESCRIPT" />
            <Skills image="/react.svg" name="REACT.JS" />
            <Skills image="/nxt.png" name="NEXT.JS" />
            <Skills image="/nodejs.png" name="NODE.JS" />
            <Skills image="/pg.png" name="POSTGRESQL" />
            <Skills image="/mysql.png" name="MYSQL" />
            <Skills image="/mon.png" name="MONGODB" />
            <Skills image="/rabbitmq.svg" name="RABBITMQ" />
            <Skills image="/aws.png" name="AWS" />
            <Skills image="/api.png" name="APIs" />
            <Skills image="/git.png" name="APIs" />
            <Skills image="/ags.png" name="APIs" />
          </div>
          <div className="w-[30%] flex flex-col items-center justify-between mb-8 mt-24">
            <h1 className="text-4xl font-bold mb-8">Github/Resume</h1>

            <ul className="flex space-x-4">
              <li className="bg-[#00FFD0] p-[12px] rounded hover:opacity-65 cursor-pointer">
                <Link target="blank" href="https://github.com/Zobamba" className="">
                  My Github Repo
                </Link>
              </li>
              <li className="bg-gray-100 p-[12px] rounded hover:opacity-65 cursor-pointer">
                <Link
                  target="blank"
                  href="https://drive.google.com/file/d/1zTRbNh3VhjYCT1P8t2rMM06Mb0pxPdvx/view?usp=sharing"
                  className=""
                >
                  View My Resume
                </Link>
              </li>{' '}
            </ul>
          </div>
        </div>
      </main>
      <IconTop />
      <Socials />
      <Footer />
    </div>
  )
}

export default About
