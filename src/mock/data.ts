import { faker } from '@faker-js/faker'
import { generate } from 'random-words'

export type CertificateType = {
  id: string
  title: string
  topics: string[]
  openBadge: boolean
  blockchain: boolean
  workload: number
  author: string
  createdAt: string
}

export const generateCertificateData = (): CertificateType => {
  const id = faker.string.uuid()
  const title = faker.lorem.words(3)
  const topics = generate({ exactly: 3, join: ', ' })
  const openBadge = true
  const blockchain = faker.datatype.boolean()
  const workload = faker.number.int({ min: 40, max: 120 })
  const author = faker.company.name()
  const createdAt = faker.date.past().toLocaleDateString('pt-BR')

  return {
    id,
    title,
    topics: topics.split(', '),
    openBadge,
    blockchain,
    workload,
    author,
    createdAt
  }
}
