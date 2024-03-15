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
      title="Bem vindos ao Myth of Yggdrasil"
      description=<div className="flex flex-col gap-3">
        <p>
          Gostaríamos de informar sobre o andamento do desenvolvimento do jogo
          Myth of Yggdrasil. Estamos nos aproximando do lançamento e iniciaremos
          uma série de testes para garantir a qualidade do produto.
        </p>

        <p>
          É com grande entusiasmo que gostaríamos de convidá-lo especialmente
          para participar do Alpha Test do Myth of Yggdrasil, programado para
          iniciar no sábado, 16 de março, às 13 horas.
        </p>

        <p>
          Agradecemos a todos pela participação e colaboração nesta fase
          importante do desenvolvimento do Myth of Yggdrasil.
        </p>

        <p>
          Atenciosamente,
          <br />A Equipe MOY.
        </p>
      </div>
      titleEn="Welcome to Myth of Yggdrasil"
      descriptionEn=<div className="flex flex-col gap-3">
        <p>
          We would like to inform you about the progress of the development of
          the game Myth of Yggdrasil. We are approaching the launch and will
          begin a series of tests to ensure the quality of the product.
        </p>

        <p>
          We are excited to extend a special invitation to you to participate in
          the Alpha Test of Myth of Yggdrasil, scheduled to begin on March 16th,
          Saturday, at 1:00 PM.
        </p>

        <p>
          We appreciate everyone&#34;s participation and collaboration in this
          important phase of the development of Myth of Yggdrasil.
        </p>

        <p>
          Regards,
          <br />
          The MOY Team.
        </p>
      </div>
      onChangeButton={handleChange}
      key="0"
    />,
    <Step
      country={country}
      title="O que queremos testar?"
      description=<div className="flex flex-col gap-3">
        <p>
          <strong className="text-xl">Skills:</strong> Explore novas habilidades
          e mergulhe em uma experiência de jogo aprimorada! Nossa última
          atualização traz mudanças fundamentais que afetam diretamente a
          construção das suas Builds, proporcionando uma jornada ainda mais
          emocionante.
        </p>

        <p>
          <strong className="text-xl">Equipamentos:</strong> Aprecie a vasta
          variedade de equipamentos disponíveis em nosso mundo. Desde espadas
          até cartas, cada item foi meticulosamente retrabalhado para garantir
          sua utilidade. Prepare-se para encontrar verdadeiras joias enquanto
          busca aprimorar seu arsenal.
        </p>

        <p>
          <strong className="text-xl">Builds:</strong> Desafie-se a criar e
          testar diferentes combinações de atributos, habilidades e
          equipamentos. Sua criatividade é o limite neste mundo de
          possibilidades. Descubra a Build perfeita para se destacar no universo
          de Myth of Yggdrasil!
        </p>

        <p>
          Além disso, temos uma série de novos sistemas e mudanças importantes
          para o jogo. Nos aprofundaremos mais em nosso Discord!
        </p>
      </div>
      titleEn="What do we want to test?"
      descriptionEn=<div className="flex flex-col gap-3">
        <p>
          <strong className="text-xl">Skills:</strong> Explore new skills and
          dive into an enhanced gaming experience! Our latest update brings
          fundamental changes that directly impact the construction of your
          Builds, providing an even more thrilling journey.
        </p>

        <p>
          <strong className="text-xl">Equipments:</strong> Enjoy the vast
          variety of equipment available in our world. From swords to cards,
          each item has been meticulously reworked to ensure its usefulness. Get
          ready to find true gems as you seek to enhance your arsenal.
        </p>

        <p>
          <strong className="text-xl">Builds:</strong> Challenge yourself to
          create and test different combinations of attributes, skills, and
          equipment. Your creativity is the limit in this world of
          possibilities. Discover the perfect Build to stand out in the universe
          of Myth of Yggdrasil!
        </p>

        <p>
          In addition, we have a series of new systems and significant changes
          to the game. We&#34;ll delve deeper into them on our Discord!
        </p>
      </div>
      onChangeButton={handleChange}
      key="1"
    />,
    <SignUpForm onChangeButton={handleChange} key="2" />,
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
      {step < 2 && <Button onClick={() => handleChange("right")}>Next</Button>}
      <LanguageButton
        country={country}
        onChangeLanguage={handleChangeLanguage}
      />
    </main>
  );
}
