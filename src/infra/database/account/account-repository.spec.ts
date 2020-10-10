import { AccountRepository } from './account-repository'
import { SqlHelper } from '../helpers/sql-helper'
import { internet } from 'faker'

const params = {
  name: internet.userName(),
  email: internet.email(),
  password: internet.password()
}

const makeSut = (): AccountRepository => {
  return new AccountRepository()
}

describe('Account Repository', () => {
  beforeAll(async () => {
    await SqlHelper.getConnection()
  })

  afterAll(async () => {
    await SqlHelper.end()
  })

  beforeEach(async () => {
    await SqlHelper.query('truncate table accounts')
  })

  afterEach(async () => {
    await SqlHelper.query('truncate table accounts')
  })

  test('Should return an account on add with success', async () => {
    const sut = makeSut()
    const account = await sut.add(params)
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe(params.name)
    expect(account.email).toBe(params.email)
    expect(account.password).toBe(params.password)
  })
})