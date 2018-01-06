const BASE_URL = 'http://localhost:3000';

const endpoint = {
  SEARCH_URL: BASE_URL + '/searchPlace',
  PLACE_PHOTO_URL: BASE_URL + '/getPlacePhoto',
  ADD_PLACE: BASE_URL + '/addPlace',
  LOGIN: BASE_URL + '/login',
  USER_PLACES: BASE_URL + '/places',
  ADD_VISIT: BASE_URL + '/addVisit',
  LOAD_VISITS: BASE_URL + '/loadVisits'
};

export default endpoint;
