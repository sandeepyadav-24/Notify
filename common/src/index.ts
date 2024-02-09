import { z } from "zod";

export const userInput = z.object({
  email: z.string().min(10).max(50),
  password: z.string().min(10).max(50),
});

export type SignupParams = z.infer<typeof userInput>;
