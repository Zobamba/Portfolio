import Header from '@/src/components/header/header'
import Footer from '@/src/components/footer/footer'
import StackCard from '@/src/components/stack-card/stack-card'
import Intro from '@/src/components/intro/intro'
import Portfolio from '@/src/components/portfolio/portfolio'
import Testimonials from '@/src/components/testimonials/testimonials'
import IconTop from '@/src/components/icon-top/icon-top'
import Socials from '@/src/components/socials/socials'

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="py-16">
        <Intro />
        <div className="flex flex-col items-center justify-between bg-gray-100 py-16 px-28 mb-8 border">
          <h1 className="text-4xl font-bold mb-4 p-0 m-0">What I Do</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <StackCard
              title="Backend Development"
              description="I specialise in architecting and implementing robust, scalable, and efficient server-side solutions with nodejs. My expertise lies in crafting the backbone of applications, ensuring seamless communication between the database and the frontend."
            />
            <StackCard
              title="Frontend Development"
              description="I bring creativity and precision to the user interface, ensuring an immersive and delightful experience for every user. I specialise in crafting pixel-perfect, responsive, and intuitive frontend solutions that captivate and engage audiences."
            />
          </div>
        </div>
        <Portfolio />
        <div className="flex flex-col items-center justify-between py-16 px-28">
          <h1 className="text-4xl font-bold mb-4 p-0 m-0">Testimonials</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Testimonials
              title="Onah Bernard Chizoba has an important ability to perform well in a team. He is result-oriented and has the ability to adapt to a new team."
              name="Emmanuel Chigbo"
              occupation="SWE Github"
              starGreenCount={3}
              starGrayCount={2}
            />
            <Testimonials
              title="Onah Bernard Chizoba is an exceptional full-stack developer who brings designs to life with clean, efficient code. A reliable and skilled collaborator."
              name="Adesuwa Natalie"
              occupation="UI/UX Designer"
              starGreenCount={4}
              starGrayCount={1}
            />
            <Testimonials
              title="His expertise in building robust backend systems is truly impressive, providing a strong foundation for applications that demand efficiency and scalability."
              name="Benjamin Ifeanyi"
              occupation="SWE Pearson"
              starGreenCount={4}
              starGrayCount={1}
            />
            <Testimonials
              title="Perfectly merging creativity and technical skill, Onah Bernard Chizoba reliably crafts intuitive user interfaces and robust backend services that enhance brand presence"
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
