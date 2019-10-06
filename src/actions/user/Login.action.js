import { Action } from 'kawax-js';
import User from 'resources/user/User';

class Login extends Action {

  static type = 'USER.LOGIN';

  errorNotice = true;

  call = async (payload = { email, password }) => User.authenticate({ payload });

}

export default Login;
