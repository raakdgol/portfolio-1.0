
import { createServer } from "http";
import type { Express } from "express";

export async function registerRoutes(app: Express) {
  const httpServer = createServer(app);
  return httpServer;
}
