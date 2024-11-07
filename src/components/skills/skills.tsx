import Image from "next/image";

type SkillsProps = {
  image: string;
  name: string;
};

const Skills: React.FC<SkillsProps> = ({
  image,
  name,
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-[8px] w-full h-48">
      <div className="">
          <Image
            width={140}
            height={140}
            alt="star-green"
            src={image}
            className="mr-2"
          />
      </div>
      <h2 className="text-center font-bold mt-2">{name}</h2>
    </div>
  );
};

export default Skills;
