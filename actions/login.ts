"use server";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schema";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import * as z from "zod";

export const login = async (value: z.infer<typeof LoginSchema>) => {
  const ValidatedFields = LoginSchema.safeParse(value);

  if (!ValidatedFields.success) {
    return { error: "invalid fields!" };
  }
  const { email, password } = ValidatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Wrong password or email!",
          };

        default:
          return {
            error: "something went wrong!",
          };
      }
    }
    throw error;
  }
};
