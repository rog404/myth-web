import { useState } from "react";
import { Button } from "./ui/button";

export default function LanguageButton({
  country = "us",
  onChangeLanguage,
}: {
  country: "br" | "us";
  onChangeLanguage: () => void;
}) {
  const oppositeCountry = country === "us" ? "br" : "us";
  return (
    <button
      className="absolute top-4 right-4 rounded-sm overflow-hidden shadow-sm"
      onClick={onChangeLanguage}
    >
      <img
        src={`${oppositeCountry}.svg`}
        alt="Country Flag Button"
        className="w-[40px] flex-[1]"
      />
    </button>
  );
}
