import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="grow flex flex-col justify-center mx-10 md:mx-24 text-left">
      <p className="text-sm font-mono md:text-xl ml-1 ">Hi! My name is</p>
      <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
        Uttkarsh Ranjan
      </h1>
      <h3 className="mt-3 w-5/6 text-sm md:text-base md:w-4/5 md:text-red-400 lg:text-yellow-400 lg:w-3/5 ml-1">
        I'm a passionate Full Stack Web Developer with a knack for creating
        dynamic and responsive web applications.{" "}
        <span className="hidden sm:inline">
          With a strong foundation in both front-end and back-end technologies,
          I excel at transforming ideas into seamless digital experiences. I
          believe in creating clean and simple UI and robust backends.
        </span>
      </h3>
      <div className="flex space-x-3 mt-5">
        <Button className="transition-all hover:scale-105">View Resume</Button>
        <Button className="transition-all hover:scale-105">Contact</Button>
      </div>
    </div>
  );
}
