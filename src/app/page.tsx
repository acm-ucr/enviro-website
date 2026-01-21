import Example from "@/components/example/Example";
import Button from "@/components/Button";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Example />
      <div>Hello</div>
      <Button>Learn More</Button>
    </div>
  );
};

export default Home;
