import { Reducer } from 'kawax-js';
import User from 'reducers/user/User';
import Movies from 'reducers/movies/Movies';

class Root extends Reducer {

  static initialState = {
    user: User.delegate(),
    movies: Movies.delegate(),
  };

  state = this.match({
    USER: {
      user: User.delegate(),
    },
    MOVIES: {
      movies: Movies.delegate(),
    },
  });

}

export default Root;
