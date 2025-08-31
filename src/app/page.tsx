import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import Form from "@/components/Form/Form";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Packages from "@/components/Packages/Packages";
import Trainers from "@/components/Trainers/Trainers";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Trainers />
      <Packages />
      <Form />
    </>
  );
}
