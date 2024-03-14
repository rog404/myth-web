"use client";

import { useState } from "react";
import { unstable_noStore as noStore } from "next/cache";

import { AnimatePresence, motion } from "framer-motion";

import SignUpForm from "@/components/SignUpForm";
import Step from "@/components/Step";
import { Button } from "@/components/ui/button";
import LanguageButton from "@/components/LanguageButton";

type position = "left" | "right";

export default function Home() {
  noStore();

  const [step, setStep] = useState(0);
  const [isLeft, setIsLeft] = useState(true);
  const [country, setCountry] = useState<"br" | "us">("us");

  const timeOnServer = new Date().toLocaleTimeString("en-US");

  function handleChangeLanguage() {
    setCountry((prevCountry) => (prevCountry === "us" ? "br" : "us"));
  }

  function handleChange(pos: position) {
    switch (pos) {
      case "right":
        setIsLeft(false);
        setStep((prevStep) => {
          if (prevStep < 3) {
            return prevStep + 1;
          } else {
            return 0;
          }
        });
        break;
      case "left":
        setIsLeft(true);
        setStep((prevStep) => {
          if (prevStep > 0) {
            return prevStep - 1;
          } else {
            return 0;
          }
        });
        break;
    }
  }

  const steps = [
    <Step
      country={country}
      title={`Bem vindos ao Myth of Yggdrasil ${timeOnServer}`}
      description="O MOY foi pensado por um sonho entre jogadores que gostariam de."
      titleEn="Welcome to Myth of Yggdrasil"
      descriptionEn="MOY was thought by a dream among players who would like to."
      onChangeButton={handleChange}
    />,
    <SignUpForm onChangeButton={handleChange} />,
  ];

  return (
    <main className="flex flex-col justify-between items-center backdrop-blur-md rounded-xl h-full py-4 overflow-x-hidden gap-2">
      <img
        src="/biglogo.png"
        alt="Myth of Yggdrasil Logo"
        className="w-[300px] lg:w-[400px]"
      />
      <div className="flex justify-center items-center flex-grow">
        <AnimatePresence mode="wait">
          {steps.map(
            (item, index) =>
              step === index && (
                <motion.div
                  key={index}
                  initial={
                    !isLeft ? { opacity: 0, x: 100 } : { opacity: 0, x: -100 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  exit={
                    !isLeft ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 }
                  }
                >
                  {item}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
      {step < 1 && <Button onClick={() => handleChange("right")}>Next</Button>}
      <LanguageButton
        country={country}
        onChangeLanguage={handleChangeLanguage}
      />
    </main>
  );
}
