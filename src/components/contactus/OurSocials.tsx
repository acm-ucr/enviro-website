import Subheading from "../Subheading";
import SocialCard from "./SocialCard";
import socialslinks from "./SocialsLink";

const OurSocials = () => {
  return (
    <div className="bg-enviro-green-50 p-6 shadow-lg md:p-12">
      <div className="border-enviro-green-100 flex flex-col items-center justify-center border-4 py-10">
        <Subheading
          title="Our Socials"
          bg="bg-enviro-green-100 mb-10"
          text="text-white"
        />

        <div className="flex flex-wrap justify-center gap-6">
          {socialslinks.map((socialslinks, index) => (
            <SocialCard
              key={index}
              name={socialslinks.name}
              link={socialslinks.link}
              at={socialslinks.at}
              Icon={socialslinks.Icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSocials;
