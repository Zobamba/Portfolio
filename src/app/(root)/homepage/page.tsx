'use client'
import Header from '@/src/components/header/header'
import Footer from '@/src/components/footer/footer'
import StackCard from '@/src/components/stack-card/stack-card'
import Intro from '@/src/components/intro/intro'
import Portfolio from '@/src/components/portfolio/portfolio'
import Testimonials from '@/src/components/testimonials/testimonials'
import IconTop from '@/src/components/icon-top/icon-top'
import Socials from '@/src/components/socials/socials'
import { useState } from 'react'

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="py-16">
        <Intro />
        <div className="flex flex-col items-center justify-between bg-gray-100 py-12 sm:py-16 px-8 sm:px-28 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 p-0 m-0 text-center">What I Do</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <StackCard
              title="Backend Development"
              description="I design and implement scalable, efficient server-side architectures using Node.js. My expertise lies in building the core foundation of applications, ensuring secure, fast, and seamless interactions between the database and frontend."
            />
            <StackCard
              title="Frontend Development"
              description="I bring creativity and precision to user interfaces, crafting pixel-perfect, responsive, and intuitive designs. My goal is to create engaging and accessible experiences that captivate users across all devices."
            />
          </div>
        </div>
        <Portfolio />
        <div className="flex flex-col items-center justify-between py-12 sm:py-16 px-8 sm:px-28 mb-8">
          <h1 className="text-4xl font-bold mb-4 p-0 m-0">Testimonials</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Testimonials
              title="Onah Bernard Chizoba is a strong team player who is result-oriented and quickly adapts to new team environments."
              name="Emmanuel Chigbo"
              occupation="Software Engineer, GitHub"
              starGreenCount={3}
              starGrayCount={2}
            />
            <Testimonials
              title="Onah Bernard Chizoba is an exceptional full-stack developer who brings designs to life with clean, efficient code. He is a reliable and skilled collaborator."
              name="Adesuwa Natalie"
              occupation="UI/UX Designer"
              starGreenCount={4}
              starGrayCount={1}
            />
            <Testimonials
              title="His expertise in building robust backend systems is truly impressive, laying a strong foundation for applications that demand efficiency and scalability."
              name="Benjamin Ifeanyi"
              occupation="Software Engineer, Pearson"
              starGreenCount={4}
              starGrayCount={1}
            />
            <Testimonials
              title="Onah Bernard Chizoba effectively combines creativity with technical skill, crafting intuitive user interfaces and robust backend services that elevate brand presence."
              name="Clinton Felix"
              occupation="Product Manager"
              starGreenCount={3}
              starGrayCount={2}
            />
          </div>
        </div>
      </main>
      <IconTop />
      <Socials />
      <Footer />
    </div>
  )
}
export default HomePage
