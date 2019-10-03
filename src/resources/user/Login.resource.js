import BaseUser from 'resources/user/BaseUser';

class Login extends BaseUser {

  static responseParser = (response, body) => ({
    authorization: response.headers.get('auth-token'),
    ...body,
  });

  create = this.define({
    method: 'POST',
  });

  authenticate = this.define({
    method: 'POST',
    path: '/authenticate',
  });

}

export default Login.export();
