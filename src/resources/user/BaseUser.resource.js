import { Resource } from 'kawax-js';

class BaseUser extends Resource {

  static baseUrl = `${process.env.API_HOST}/api/v1/users`;

  static headers = () => ({
    'accessToken': global.sessionStorage.getItem('access-token'),
    'token-type': 'Bearer',
  });

}

export default BaseUser;
