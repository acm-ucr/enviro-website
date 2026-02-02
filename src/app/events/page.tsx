import Subheading from "@/components/Subheading";
import Button from "@/components/Button";

const Events = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div>
        <div className="bg-enviro-green-200 flex w-screen flex-col items-center justify-center gap-8 p-8">
          <Subheading
            title="Past Events Highlights"
            bg="bg-enviro-green-100"
            text="text-white"
          />
          <Button>See More </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;
