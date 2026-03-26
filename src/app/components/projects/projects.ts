import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectEntry {
  id: string;
  index: string;
  title: string;
  teaser: string;
  description: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  imports: [ CommonModule ],
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
      teaser: 'A cinematic, cosmic-editorial portfolio built with Angular and scalable motion systems.',
      description: `Designed, built, and deployed a production-grade portfolio using Angular with a fully 
      component‑driven architecture. Implemented custom animation systems, dynamic content rendering, and 
      reusable UI modules to support long‑term scalability. Optimized frontend performance and accessibility 
      while maintaining a polished, editorial visual identity. Deployed via Netlify with automated CI/CD for 
      continuous delivery and versioned updates.`,
      githubUrl: 'https://github.com/agranse/portfolioProject'
    },
    {
      id: 'microblog',
      index: '02',
      title: 'Microblogging Platform',
      teaser: 'A full‑stack microblogging platform with secure accounts, dynamic feeds, and efficient content retrieval.',
      description: `Built a full‑stack blogging platform using Express.js, PUG, and MySQL to support user posts, 
      authentication, and account management. Implemented role‑based access control for secure post creation, 
      editing, and deletion. Designed efficient pagination and search queries to handle large datasets and improve 
      browsing performance. Developed RESTful APIs for posts, comments, and user operations, and used server‑side 
      templating for smooth, dynamic interactions without page reloads.`,
      githubUrl: 'https://github.com/agranse/Microblogging'
    },
    {
      id: 'delivery-sim',
      index: '03',
      title: 'Package Delivery Simulation',
      teaser: 'A real‑time delivery simulation built with OOP and advanced design patterns.',
      description: `Developed a virtual delivery simulation using OOP principles and design patterns including Singleton, 
      Observer, Factory, and Decorator to maximize flexibility and maintainability. Implemented real‑time data collection, 
      porch‑pirate detection, and dynamic entity creation, improving system efficiency by 25%. Achieved 95% unit test 
      coverage to ensure reliability and correctness across simulation behaviors. Refactored core components to 
      reduce processing time by 15% and improve overall performance.`,
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
