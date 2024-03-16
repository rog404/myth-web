import { ReactNode, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

import { Vollkorn_SC } from "next/font/google";
import { cn } from "@/lib/utils";

const vollk = Vollkorn_SC({ weight: ["600"], subsets: ["latin"] });

type Props = {
  title?: string;
  description?: ReactNode;
  titleEn?: string;
  descriptionEn?: ReactNode;
  image?: string;
  country: "br" | "us";
  first?: boolean;
  onChangeButton: (pos: "right" | "left") => void;
};

export default function Step({
  title = "Title",
  description = "Description",
  titleEn = "Title",
  descriptionEn = "Description",
  image = "/shared_economy.png",
  country = "us",
  first = false,
  onChangeButton,
}: Props) {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisabled(false);
    }, 2500);
  }, []);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-10 items-center">
      <Card className="max-w-[1024px]">
        <CardHeader></CardHeader>
        <CardContent className="px-4 pt-10 pb-4 flex flex-col gap-2 sm:gap-5">
          <div
            className={cn(
              "text-center font-black text-2xl sm:text-4xl uppercase text-[#5B719F]",
              vollk.className
            )}
          >
            {country == "br" ? title : titleEn}
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <img
              src={image}
              alt={`${image} image`}
              className="w-[300px] sm:w-[500px] px-8"
            />
            <div className="w-full px-8">
              <div className="text-[#5B719F] text-xl text-justify">
                {country == "br" ? description : descriptionEn}
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            {!first && (
              <Button
                className="w-full sm:w-auto h-8 text-lg"
                onClick={() => onChangeButton("left")}
              >
                {country == "br" ? "Voltar" : "Previous"}
              </Button>
            )}
            <Button
              className="w-full sm:w-auto h-8 text-lg"
              onClick={() => onChangeButton("right")}
              disabled={disabled}
            >
              {country == "br" ? "Proximo" : "Next"}
            </Button>
          </div>
        </CardContent>
        <CardFooter />
      </Card>
    </div>
  );
}
