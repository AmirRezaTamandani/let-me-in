import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { HeaderProps } from "@/types";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const Header = ({ label }: HeaderProps) => {
  return (
    <div
      className=" flex flex-col items-center justify-center 
    gap-y-4 w-full"
    >
      <h3 className={cn("text-3xl font-semibold", font.className)}>
        🔐Authentication🔐
      </h3>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
