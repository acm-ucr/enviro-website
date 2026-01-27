interface SubheadingProps {
  title: string;
  bg: string;
  text: string;
}

const Subheading = ({ title, bg, text }: SubheadingProps) => {
  return (
    <div
      className={`${bg} border-enviro-green-300 w-1/2 rounded-4xl border-1 py-4`}
    >
      <div className={`font-enviro-single-day text-center text-5xl ${text}`}>
        {title}
      </div>
    </div>
  );
};

export default Subheading;
