import BaseUser from 'resources/user/BaseUser';

class User extends BaseUser {

  static responseParser = (response, body) => ({
    accessToken: response.headers.get('access-token'),
    ...body,
  });

  create = this.define({
    method: 'POST',
  });

  authenticate = this.define({
    method: 'POST',
    path: '/authenticate',
  });

  movies = this.define({
    method: 'GET',
    path: ({ userId }) => `/${userId}/movies`,
  });

}

export default User.export();
