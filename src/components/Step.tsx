import { ReactNode, useEffect } from "react";
import { Button } from "./ui/button";

type Props = {
  title?: string;
  description?: ReactNode;
  titleEn?: string;
  descriptionEn?: ReactNode;
  image?: string;
  country: "br" | "us";
  onChangeButton: (pos: "right" | "left") => void;
};

export default function Step({
  title = "Title",
  description = "Description",
  titleEn = "Title",
  descriptionEn = "Description",
  image = "/shared_economy.png",
  country = "us",
  onChangeButton,
}: Props) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-10 items-center">
      <img
        src={image}
        alt="Rogerio"
        className="w-[300px] lg:w-[550px] flex-[1]"
      />
      <div className="flex flex-col flex-[1] gap-4 max-w-[500px] sm:gap-10 px-4 text-stone-800">
        <div className="text-center text-xl sm:text-3xl">
          {country == "br" ? title : titleEn}
        </div>
        <div className="">{country == "br" ? description : descriptionEn}</div>
      </div>
    </div>
  );
}
