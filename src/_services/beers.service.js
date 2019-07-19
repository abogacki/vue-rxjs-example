import { Subject } from 'rxjs'
import axios from 'axios'

const subject = new Subject()

const baseUrl = 'https://api.punkapi.com/v2/'

export const beersService = {
  fetchBeers: async params => {
    try {
      const result = await axios.get(baseUrl, {
        params,
      })
      subject.next(result.data)
    } catch (error) {
      return 'Error has occured'
    }
  },
  getBeers: () => subject.asObservable(),
}
