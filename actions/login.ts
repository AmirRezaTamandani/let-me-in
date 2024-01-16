"use server";
import { LoginSchema } from "@/schema";
import * as z from "zod";
export const login = async (value: z.infer<typeof LoginSchema>) => {
  const ValidatedFields = LoginSchema.safeParse(value);
  if (!ValidatedFields.success) {
    return { error: "invalid fields!" };
  }
  return { success: "email sent!" };
};
