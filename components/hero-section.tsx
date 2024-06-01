import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="grow flex flex-col justify-center mx-10 md:mx-24 text-left">
      <p className="text-sm font-mono md:text-xl ml-1 ">Hi! My name is</p>
      <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
        U<span className="text-red-600">tt</span>karsh Ranjan
      </h1>
      <h3 className="mt-3 w-5/6 text-sm md:text-base md:w-4/5 lg:w-3/5 ml-1">
        I am a passionate Full Stack Web Developer with a knack for creating web
        apps with a clean UI and a robust backend.
      </h3>
      <div className="flex space-x-3 mt-5">
        <Button className="transition-all hover:scale-105">View Resume</Button>
        <Button className="transition-all hover:scale-105">Contact</Button>
      </div>
    </div>
  );
}
