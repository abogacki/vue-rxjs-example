import { Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import axios from 'axios'

const subject = new Subject()

const baseUrl = 'https://api.punkapi.com/v2/'
const injectPageNumberIntoQueryUrl = (pageNumber = 1) =>
  `beers?page=${pageNumber}&per_page=10`

const fetchBeers = pageNumbers => {
  return pageNumbers.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    switchMap(({ event }) => fetchBeerEntries(event.target.value))
  )
}

const fetchBeerEntries = async pageNumber => {
  try {
    const response = await axios.get(
      baseUrl + injectPageNumberIntoQueryUrl(pageNumber || 1)
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export const beersService = {
  fetchBeers,
  fetchBeerEntries,
  getBeers: () => subject.asObservable(),
}
