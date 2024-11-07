import Image from 'next/image'

type TestimonialsProps = {
  title: string
  name: string
  occupation: string
  starGreenCount: number
  starGrayCount: number
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  name,
  occupation,
  starGreenCount,
  starGrayCount,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-[8px] flex flex-col items-start justify-center w-full min-w-full">
      <div className="flex mb-4">
        {Array.from({ length: starGreenCount }).map((_, index) => (
          <Image
            key={index}
            width={20}
            height={20}
            alt="star-green"
            src="/star-green.svg"
            className="mr-2"
          />
        ))}
        {Array.from({ length: starGrayCount }).map((_, index) => (
          <Image
            key={index}
            width={20}
            height={20}
            alt="star-gray"
            src="/star-gray.svg"
            className="mr-2"
          />
        ))}
      </div>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <p className="text-left text-gray-900">{name}</p>
      <p className="text-left text-gray-500">{occupation}</p>
    </div>
  )
}

export default Testimonials
