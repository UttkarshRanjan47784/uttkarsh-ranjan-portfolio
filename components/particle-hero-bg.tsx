"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/magicui/particles";
import LetterPullup from "./magicui/letter-pullup";
import WordRotate from "./magicui/word-rotate";
import BlurIn from "./magicui/blur-in";

export const ParticleHeroBG = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <div className="flex items-center justify-center">
        <BlurIn word={"Uttkarsh Ranjan"} className="" />
      </div>
      <div className="flex justify-center items-center">
        <WordRotate
          className=" lg:text-2xl font-normal text-black dark:text-white"
          duration={1500}
          words={[
            "Full Stack Web Developer",
            "React Native Developer",
            "AWS Cloud Practitioner",
            "Minimalist Web Designer",
            "Blogger",
            "Computer Science Grad",
          ]}
        />
      </div>
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={color}
        refresh={false}
      />
    </div>
  );
};
