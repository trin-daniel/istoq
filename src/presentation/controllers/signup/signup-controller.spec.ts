import { SignUpController } from './signup-controller'
import { internet } from 'faker'

const mockRequest = {
  body: {
    name: internet.userName(),
    email: internet.email(),
    password: internet.password(),
    confirmation: internet.password()
  }
}

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = { body: { ...mockRequest.body, name: undefined } }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})
