import React from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { FormSuccessProps } from "@/types";

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) {
    return null;
  }
  return (
    <div
      className="flex items-center gap-x-2
     bg-emerald-400 p-3 rounded-md 
     text-sm text-green-100"
    >
      <CheckCircledIcon className="h-4 w-4 " />
      <p>{message}</p>
    </div>
  );
};
