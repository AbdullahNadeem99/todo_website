import { z } from "zod";

export const schema = z.object({
  title: z.string().min(1, "*Title is required"),
  description: z.string().min(1, "*Description is required"),
  duedate: z.string().min(1, "*Due date is required"),
  duetime: z.string().min(1, "*Due time is required"),
  priority: z.string().min(1, "*Priority is required"),
  status: z.string().min(1, "*Status is required"),
});
