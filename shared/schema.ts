import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  tech: text("tech").array().notNull(),
  githubUrl: text("github_url"),
  externalUrl: text("external_url"),
  featured: integer("featured"),
  imageUrl: text("image_url")
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  title: text("title").notNull(),
  range: text("range").notNull(),
  duties: text("duties").array().notNull()
});

export const insertProjectSchema = createInsertSchema(projects);
export const insertExperienceSchema = createInsertSchema(experiences);

export type Project = typeof projects.$inferSelect;
export type Experience = typeof experiences.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
