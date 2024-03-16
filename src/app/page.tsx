"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import SignUpForm from "@/components/SignUpForm";
import Step from "@/components/Step";
import LanguageButton from "@/components/LanguageButton";

type position = "left" | "right";

export default function Home() {
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
      first
      country={country}
      title="Bem vindo"
      description=<div className="flex flex-col gap-3">
        <p>
          Estamos cada vez mais perto do lançamento, em uma fase de extrema
          importância para o futuro do nosso servidor.
        </p>

        <p>
          É com grande entusiasmo que gostaríamos de convidá-lo para participar
          do Alpha Test do Myth of Yggdrasil, programado para iniciar no{" "}
          <strong className="ml-1">sábado, 16 de março, às 13 horas.</strong>
        </p>

        <p>
          Agradecemos a todos pela participação e colaboração nesta fase
          importante do desenvolvimento do Myth of Yggdrasil.
        </p>
      </div>
      titleEn="Welcome"
      descriptionEn=<div className="flex flex-col gap-3">
        <p>
          We are getting closer to the launch, in an extremely important phase
          for the future of our server.
        </p>
        <p>
          It is with great enthusiasm that we would like to invite you to
          participate in the Alpha Test of Myth of Yggdrasil, scheduled to start
          on <strong className="ml-1">Saturday, March 16th, at 1:00 PM.</strong>
        </p>
        <p>
          We thank everyone for their participation and collaboration in this
          important phase of Myth of Yggdrasil's development.
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
          Neste teste, nosso foco está no{" "}
          <strong className="text-xl">Personagem:</strong>
        </p>

        <p>
          <strong className="text-xl">Skills:</strong> O Myth introduz novas,
          retrabalhadas e re-balanceadas habilidades em todas as classes.
        </p>

        <p>
          <strong className="text-xl">Itens e Equipamentos:</strong> Diante da
          ampla diversidade no jogo, realizamos uma reformulação em centenas de
          itens, com o objetivo de assegurar a eficácia e utilidade de cada um
          deles.
        </p>

        <p>
          <strong className="text-xl">Builds:</strong> Explore diferentes
          combinações de atributos, com as mudanças nas habilidades,
          equipamentos e sistemas, para encontrar uma construção única.
        </p>

        <p>
          <strong className="text-xl">Novos Sistemas:</strong> Além disso,
          apresentamos uma série de novos sistemas e mudanças significativas
          para o jogo.
        </p>
      </div>
      titleEn="What do we want to test?"
      descriptionEn=<div className="flex flex-col gap-3">
        <p>
          In this test, our focus is on the{" "}
          <strong className="text-xl">Character:</strong>
        </p>
        <p>
          <strong className="text-xl">Skills:</strong> Myth introduces new,
          reworked, and rebalanced skills across all classes.
        </p>
        <p>
          <strong className="text-xl">Items and Equipment:</strong> Given the
          wide diversity in the game, we have overhauled hundreds of items to
          ensure the effectiveness and usefulness of each.
        </p>
        <p>
          <strong className="text-xl">Builds:</strong> Explore different
          combinations of attributes, with changes in skills, equipment, and
          systems, to find a unique build.
        </p>
        <p>
          <strong className="text-xl">New Systems:</strong> Additionally, we
          introduce a series of new systems and significant changes to the game.
        </p>
      </div>
      onChangeButton={handleChange}
      key="1"
    />,
    <Step
      country={country}
      title="A sua opinião importa"
      description=<div className="flex flex-col gap-3">
        <p>
          Nós acreditamos que a comunidade é essencial para o sucesso do
          projeto, seja jogando, criando conteúdo, participando da economia, e
          isso inclui durante nosso período de testes.
        </p>

        <p>
          Por isso, o seu feedback é fundamental para o sucesso deste projeto,
          e, como forma de reconhecimento, estamos preparando recompensas
          exclusivas a todos que participarem.
        </p>

        <p>
          Se você já possui uma <strong>Access Key</strong>, cadastre-se na
          próxima página. Junte-se também a nós em nosso Discord, onde você terá
          acesso a mais detalhes sobre todo o projeto.
        </p>
      </div>
      titleEn="Your opinion matters"
      descriptionEn=<div className="flex flex-col gap-3">
        <p>
          We believe that the community is essential for the success of the
          project, whether by playing, creating content, participating in the
          economy, and this includes during our testing period.
        </p>
        <p>
          Therefore, your feedback is crucial for the success of this project,
          and, as a form of recognition, we are preparing exclusive rewards for
          everyone who participates.
        </p>
        <p>
          If you already have an <strong>Access Key</strong>, register on the
          next page. Also, join us on our Discord, where you will have access to
          more details about the entire project.
        </p>
      </div>
      onChangeButton={handleChange}
      key="1"
    />,
    <SignUpForm onChangeButton={handleChange} key="2" country={country} />,
  ];

  return (
    <main className="flex flex-col justify-between items-center rounded-xl h-full py-4 overflow-x-hidden gap-2">
      <img
        src="/biglogo.png"
        alt="Myth of Yggdrasil Logo"
        className="w-[300px] lg:w-[400px]"
      />
      <div className="flex justify-center items-center flex-grow px-2">
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
      <LanguageButton
        country={country}
        onChangeLanguage={handleChangeLanguage}
      />
    </main>
  );
}
