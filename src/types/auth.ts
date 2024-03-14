import { z } from "zod";

const allowedDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com', 'icloud.com', 'uol.com.br', 'hotmail.com.br', 'terra.com.br', 'bol.com.br', 'ig.com.br', 'itelefonica.com.br', 'r7.com', 'zipmail.com.br', 'globo.com', 'globomail.com', 'oi.com.br', 'yahoo.com.br', 'superig.com.br', 'folha.com.br', 'pop.com.br', 'bol.com', 'ig.com'];
const regex = new RegExp(`^[a-zA-Z0-9._-]+@(${allowedDomains.join('|')})$`);
const GENDERS = ["thanatos", "valkyrie", "poring"] as const;

export const SignUpSchema = z.object({
  email: z.string().email().regex(regex, { message: "Must be an email address from trusted providers" }),
  participationKey: z.string(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  username: z.string().min(6),
  gender: z.enum(GENDERS, {required_error: "Select an option from the list"})
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type SignUp = z.infer<typeof SignUpSchema>;