import { personalInfo } from '../personalInfo'

describe('personalInfo data structure', () => {
  test('tiene información básica del perfil', () => {
    expect(personalInfo.name).toBeTruthy()
    expect(personalInfo.title).toBeTruthy()
    expect(personalInfo.description).toBeTruthy()
  })

  test('tiene información de contacto', () => {
    expect(personalInfo.contact.email).toContain('@')
    expect(personalInfo.contact.github).toContain('github.com')
    expect(personalInfo.contact.linkedin).toContain('linkedin.com')
  })

  test('tiene estadísticas definidas', () => {
    expect(personalInfo.stats.length).toBeGreaterThan(0)
  })
})
