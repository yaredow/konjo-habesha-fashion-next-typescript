"use server";

import { getUserByEmail } from "@/data/user";
import { sendPasswordResetToken } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import { forgotPasswordFormSchema } from "@/utils/validators/form-validators";
import { z } from "zod";
import { ErrorAndSuccessType } from "./authenticate";

export async function forgotPasswordAction(
  values: z.infer<typeof forgotPasswordFormSchema>,
): Promise<ErrorAndSuccessType> {
  const validatedField = forgotPasswordFormSchema.safeParse({
    email: values.email,
  });

  if (!validatedField.success) {
    return { error: "Invalid email" };
  }

  const { email } = validatedField.data;

  const user = await getUserByEmail(email);

  if (!user) {
    return { error: "User doesn't exist with that email" };
  }

  const passwordResetToken = await generatePasswordResetToken(email);

  await sendPasswordResetToken(
    passwordResetToken.email,
    passwordResetToken.token,
  );

  return { success: "Password reset token sent successfully" };
}
