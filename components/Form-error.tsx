import React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { FormErrorsProps } from "@/types";

export const FormError = ({ message }: FormErrorsProps) => {
  if (!message) {
    return null;
  }
  return (
    <div
      className="flex items-center gap-x-2
     bg-destructive/15 p-3 rounded-md 
     text-sm text-destructive"
    >
      <ExclamationTriangleIcon className="h-4 w-4 " />
      <p>{message}</p>
    </div>
  );
};
