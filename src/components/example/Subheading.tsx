type SubheadingProps = {
  title: string;
};

const Subheading = ({ title }: SubheadingProps) => {
  return (
    <div className="bg-enviro-green-200 w-1/2 rounded-4xl py-4">
      <h2 className="font-enviro-single-day text-center text-2xl text-white">
        {title}
      </h2>
    </div>
  );
};

export default Subheading;
