"use server";
import { RegisterSchema } from "@/schema";
import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (value: z.infer<typeof RegisterSchema>) => {
  const ValidatedFields = RegisterSchema.safeParse(value);
  if (!ValidatedFields.success) {
    return { error: "invalid fields!" };
  }
  const { email, password, name } = ValidatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);
 
  if (existingUser) {
    return { error: "Emails is taken" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  return { success: "User Created!" };
};
