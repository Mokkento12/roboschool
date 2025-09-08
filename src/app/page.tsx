import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import Form from "@/components/Form/Form";
import Hero from "@/components/Hero/Hero";
import Packages from "@/components/Packages/Packages";
import Trainers from "@/components/Trainers/Trainers";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <Trainers />
      <Packages />
      <Form />
    </>
  );
}
