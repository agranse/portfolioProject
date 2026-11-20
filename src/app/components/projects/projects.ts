
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectEntry {
  id: string;
  index: string;
  title: string;
  teaser: string;
  technologies: string[];
  description: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  standalone: true
})
export class Projects {
  projects: ProjectEntry[] = [
    {
      id: 'portfolio',
      index: '01',
      title: 'Personal Portfolio Website',
      teaser: 'A responsive Angular application built with reusable components, custom animations, and automated deployment.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      description: `Designed, developed, and deployed a responsive portfolio website using Angular, TypeScript, and CSS. Built reusable components and route-based rendering to organize content into modular, maintainable sections. Implemented custom animations and optimized video and image delivery to improve performance across devices. Configured automated Netlify deployments and environment-based configuration to support continuous updates.`,
      githubUrl: 'https://github.com/agranse/portfolioProject'
    },
    {
      id: 'microblog',
      index: '02',
      title: 'Microblogging Platform',
      teaser: 'A full-stack blogging platform featuring authentication, role-based access control, and relational data management.',
      technologies: ['Express.js', 'Node.js', 'MySQL'],
      description: `Built a full-stack blogging platform using Express.js, Node.js, and MySQL, supporting user authentication, content creation, commenting, and search. Designed REST APIs with session management and role-based access control to manage user permissions and secure application functionality. Developed relational database schemas and optimized queries and pagination to support efficient data retrieval and content browsing.`,
      githubUrl: 'https://github.com/agranse/Microblogging'
    },
    {
      id: 'delivery-sim',
      index: '03',
      title: 'Package Delivery Simulation',
      teaser: 'An object-oriented delivery simulation using established design patterns and event-driven system behavior.',
      technologies: ['C++', 'Python'],
      description: `Architected an object-oriented package delivery simulation using C++ and Python, applying Singleton, Observer, Decorator, and Factory design patterns to structure system components and interactions. Implemented event-driven tracking, dynamic entity interactions, and real-time delivery updates. Developed unit tests covering 95% of the codebase to validate simulation behavior and improve reliability.`,
      githubUrl: 'https://github.com/agranse/PackageDeliverySimulation'
    }
  ];

  activeProject: ProjectEntry | null = null;

  openProject(project: ProjectEntry): void {
    this.activeProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject(): void {
    this.activeProject = null;
    document.body.style.overflow = '';
  }

  onOverlayBackgroundClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('projects-overlay')) {
      this.closeProject();
    }
  }
}
