import { describe, test, expect } from 'vitest'
import { projects } from '../projects'

describe('projects data structure', () => {
  test('projects es un arreglo con proyectos', () => {
    expect(Array.isArray(projects)).toBe(true)
    expect(projects.length).toBeGreaterThan(0)
  })

  test('cada proyecto tiene información básica obligatoria', () => {
    projects.forEach(project => {
      expect(project.title).toBeTruthy()
      expect(project.description).toBeTruthy()
      expect(project.image).toBeTruthy()
      expect(Array.isArray(project.tech)).toBe(true)
      expect(project.tech.length).toBeGreaterThan(0)
      expect(Array.isArray(project.features)).toBe(true)
      expect(project.features.length).toBeGreaterThan(0)
    })
  })

  test('cada proyecto tiene al menos un enlace (github o demo)', () => {
    projects.forEach(project => {
      expect(
        project.githubUrl || project.demoUrl
      ).toBeTruthy()
    })
  })
})
