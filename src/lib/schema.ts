import { z } from "zod";

export const formSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
    category: z.string().min(1, "Category is required"),
});
