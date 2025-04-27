class MemStorage {
  constructor() {
    this.projects = new Map();
    this.experiences = new Map();
    this.projectId = 1;
    this.experienceId = 1;
    this.initializeSampleData();
  }

  async getProjects() {
    return Array.from(this.projects.values());
  }

  async getExperiences() {
    return Array.from(this.experiences.values());
  }

  async createProject(project) {
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

  async createExperience(experience) {
    const id = this.experienceId++;
    const newExperience = { ...experience, id };
    this.experiences.set(id, newExperience);
    return newExperience;
  }

  initializeSampleData() {
    this.createProject({
      title: "Halcyon Theme",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
      tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      githubUrl: "https://github.com/bchiang7/halcyon-site",
      externalUrl: "https://halcyon-theme.netlify.app/",
      featured: 1,
      imageUrl: "/halcyon.png"
    });

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
  }
}

export const storage = new MemStorage();