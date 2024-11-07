type StackCardProps = {
  title: string;
  description: string;
};

const StackCard: React.FC<StackCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-[8px] flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-center text-gray-500">{description}</p>
    </div>
  );
};
export default StackCard;
