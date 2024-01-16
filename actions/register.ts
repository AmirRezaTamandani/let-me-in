"use server";
import { RegisterSchema } from "@/schema";
import * as z from "zod";
export const register = async (value: z.infer<typeof RegisterSchema>) => {
  const ValidatedFields = RegisterSchema.safeParse(value);
  if (!ValidatedFields.success) {
    return { error: "invalid fields!" };
  }
  return { success: "email sent!" };
};
