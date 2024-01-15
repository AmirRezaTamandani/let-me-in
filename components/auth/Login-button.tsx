"use client";
import { LoginButtonProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/login");
  };
  if (mode === "modal") {
    //TODO:add modal Functionality
  }
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
