import * as z from "zod";

const isPasswordSimple = (password: string) => {
  return /[A-Z]/.test(password) && /[0-9]/.test(password);
};

export const LoginSchema = z.object({
  email: z.string().email({ message: "valid email is required" }),
  password: z.string().min(1, { message: "password is required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "email is required" }),
  password: z
    .string()
    .min(6, { message: "minimum of 6 characters is required" })
    .refine((value) => isPasswordSimple(value), {
      message:
        "password must contain at least one uppercase letter and one number",
    }),
  name: z.string().min(1, { message: "Name is required" }),
});
