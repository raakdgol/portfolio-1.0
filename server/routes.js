
import { createServer } from "http";
import { storage } from "./storage.js";

export async function registerRoutes(app) {
  const httpServer = createServer(app);

  app.get("/api/projects", async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get("/api/experiences", async (_req, res) => {
    const experiences = await storage.getExperiences();
    res.json(experiences);
  });

  return httpServer;
}
