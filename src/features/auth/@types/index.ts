import { type z } from "zod";
import type { codeSchema, emailSchema } from "../hooks/forms";
export type EmailSchemaType = z.infer<typeof emailSchema>;
export type CodeSchemaType = z.infer<typeof codeSchema>;
