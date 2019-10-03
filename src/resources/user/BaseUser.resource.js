import { Resource } from 'kawax-js';

class BaseUser extends Resource {

  static baseUrl = `${process.env.API_HOST}/api/v1/users`;

  static headers = () => ({
    'access-token': global.sessionStorage.getItem('accessToken'),
    'token-type': 'Bearer',
  });

}

export default BaseUser;
