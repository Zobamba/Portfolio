import Image from "next/image";

type TestimonialsProps = {
  title: string;
  name: string;
  occupation: string;
  starGreenCount: number;
  starGrayCount: number;
};

const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  name,
  occupation,
  starGreenCount,
  starGrayCount,
}) => {
  return (
    <div className="bg-gray-100  p-4 rounded-[8px] flex flex-col items-start justify-center">
      <div className="flex">
        {Array.from({ length: starGreenCount }).map((_, index) => (
          <Image
            key={index}
            width={20}
            height={20}
            alt="star-green"
            src={"/star-green.svg"}
            className="mr-2"
          />
        ))}
        {Array.from({ length: starGrayCount }).map((_, index) => (
          <Image
            key={index}
            width={20}
            height={20}
            alt="star-green"
            src={"/star-gray.svg"}
            className="mr-2"
          />
        ))}
      </div>
      <h2 className="text-l font-bold mb-4">{title}</h2>
      <p className="mt-2 text-center text-gray-900">{name}</p>
      <p className="mt-2 text-center text-gray-500">{occupation}</p>
    </div>
  );
};

export default Testimonials;
