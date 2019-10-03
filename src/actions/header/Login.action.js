import { Action } from 'kawax-js';
import LoginResource from 'resources/user/Login';

class Login extends Action {

  static type = 'USER.LOGIN';

  errorNotice = true;

  call = async (payload = { email, password }) => {
    return LoginResource.authenticate({ payload });
  };

}

export default Login;
