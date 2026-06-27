import { useState, useCallback, useEffect } from 'react';
import { BrandProject, BrandKit, Industry, Vibe, GeneratedName } from '@/types';
import { generateBrandDNA } from '@/lib/brand-engine';

export function useFounderMode() {
  const [projects, setProjects] = useState<BrandProject[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('founder_projects');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse saved projects', e);
        }
      }
    }
    return [];
  });
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  // Save to local storage on change
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('founder_projects', JSON.stringify(projects));
    }
  }, [projects]);

  const updateActiveKitDNA = useCallback((newDna: import('@/types').BrandDNA) => {
    setProjects(prevProjects => prevProjects.map(project => {
      if (project.id === activeProjectId) {
        return {
          ...project,
          kits: project.kits.map(kit =>
            kit.id === project.activeKitId ? { ...kit, dna: newDna } : kit
          )
        };
      }
      return project;
    }));
  }, [activeProjectId]);

  const createProjectFromIdea = useCallback((
    baseName: GeneratedName,
    industry: Industry,
    vibe: Vibe,
    _audience: string = 'General'
  ) => {
    const dna = generateBrandDNA(industry, vibe);

    const newKit: BrandKit = {
      ...baseName,
      dna,
      versionName: 'v1 Core Identity',
      createdAt: new Date()
    };

    const newProject: BrandProject = {
      id: `proj_${Date.now()}`,
      name: baseName.name,
      createdAt: new Date(),
      updatedAt: new Date(),
      activeKitId: newKit.id,
      kits: [newKit]
    };

    setProjects(prev => [newProject, ...prev]);
    setActiveProjectId(newProject.id);

    return newProject.id;
  }, []);

  const activeProject = projects.find(p => p.id === activeProjectId);
  const activeKit = activeProject?.kits.find(k => k.id === activeProject.activeKitId);

  return {
    projects,
    activeProjectId,
    setActiveProjectId,
    createProjectFromIdea,
    updateActiveKitDNA,
    activeProject,
    activeKit
  };
}
