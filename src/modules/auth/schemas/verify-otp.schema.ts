import { z } from "zod";

export const verifyOtpSchema = z.object({
  code: z
    .string()
    .trim()
    .min(6, "OTP must be 6 digits.")
    .max(6, "OTP must be 6 digits.")
    .regex(/^\d+$/, "OTP must contain only numbers."),
});

export type VerifyOtpFormValues = z.infer<typeof verifyOtpSchema>;
