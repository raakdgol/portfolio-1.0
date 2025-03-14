import { type Project, type Experience, type InsertProject, type InsertExperience } from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getExperiences(): Promise<Experience[]>;
  createProject(project: InsertProject): Promise<Project>;
  createExperience(experience: InsertExperience): Promise<Experience>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private experiences: Map<number, Experience>;
  private projectId: number;
  private experienceId: number;

  constructor() {
    this.projects = new Map();
    this.experiences = new Map();
    this.projectId = 1;
    this.experienceId = 1;

    // Add some sample data
    this.initializeSampleData();
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values());
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = this.projectId++;
    const newProject = { 
      ...project, 
      id,
      githubUrl: project.githubUrl ?? null,
      externalUrl: project.externalUrl ?? null,
      featured: project.featured ?? null,
      imageUrl: project.imageUrl ?? null
    };
    this.projects.set(id, newProject);
    return newProject;
  }

  async createExperience(experience: InsertExperience): Promise<Experience> {
    const id = this.experienceId++;
    const newExperience = { ...experience, id };
    this.experiences.set(id, newExperience);
    return newExperience;
  }

  private initializeSampleData() {
    // Sample projects
    this.createProject({
      title: "Halcyon Theme",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
      tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      githubUrl: "https://github.com/bchiang7/halcyon-site",
      externalUrl: "https://halcyon-theme.netlify.app/",
      featured: 1,
      imageUrl: "/halcyon.png"
    });

    this.createProject({
      title: "Spotify Profile",
      description: "A web app for visualizing personalized Spotify data",
      tech: ["React", "Express", "Spotify API", "Heroku"],
      githubUrl: "https://github.com/bchiang7/spotify-profile",
      externalUrl: "https://spotify-profile.herokuapp.com/",
      featured: 2,
      imageUrl: "/spotify.png"
    });

    // Sample experiences
    this.createExperience({
      company: "Upstatement",
      title: "Lead Engineer",
      range: "May 2018 - Present",
      duties: [
        "Deliver high-quality, robust production code for a diverse array of projects",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities"
      ]
    });

    this.createExperience({
      company: "Scout Studio",
      title: "Studio Developer",
      range: "January - April 2018",
      duties: [
        "Worked with a team of developers to build a marketing website and e-commerce platform",
        "Interfaced with clients on a weekly basis, providing technological expertise",
        "Planned and executed daily scrums and weekly retrospectives"
      ]
    });
  }
}

export const storage = new MemStorage();