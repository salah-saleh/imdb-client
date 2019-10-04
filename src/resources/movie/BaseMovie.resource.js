import { Resource } from 'kawax-js';

class BaseMovie extends Resource {

  static baseUrl = `${process.env.API_HOST}/api/v1/movies`;

  static headers = () => ({
    'access-token': global.sessionStorage.getItem('access-token'),
    'token-type': 'Bearer',
  });

}

export default BaseMovie;
