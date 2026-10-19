import { describe, test, expect } from 'vitest'
import { skills } from '../skills'

describe('skills data structure', () => {
  test('skills es un arreglo con categorías', () => {
    expect(Array.isArray(skills)).toBe(true)
    expect(skills.length).toBeGreaterThan(0)
  })

  test('cada skill tiene categoría, items y color', () => {
    skills.forEach(skill => {
      expect(skill.category).toBeTruthy()
      expect(Array.isArray(skill.items)).toBe(true)
      expect(skill.items.length).toBeGreaterThan(0)
      expect(skill.color).toBeTruthy()
    })
  })

  test('todos los items de skills son strings', () => {
    skills.forEach(skill => {
      skill.items.forEach(item => {
        expect(typeof item).toBe('string')
      })
    })
  })
})
