import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Trainers from "@/components/Trainers/Trainers";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Trainers />
    </>
  );
}
