interface SubheadingProps {
  title: string;
}

const Subheading = ({ title }: SubheadingProps) => {
  return (
    <div className="bg-enviro-green-200 border-enviro-green-300 w-1/2 rounded-4xl border-1 py-4">
      <div className="font-enviro-single-day text-center text-3xl text-white">
        {title}
      </div>
    </div>
  );
};

export default Subheading;
