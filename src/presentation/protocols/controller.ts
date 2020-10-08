import { HttpRequest, HttpResponse } from '.'

export interface Controller {
  handle (request: HttpRequest<any>): Promise<HttpResponse<any>>
}
