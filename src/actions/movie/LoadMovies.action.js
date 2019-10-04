import { Action } from 'kawax-js';
import Movie from 'resources/movie/Movie';

class LoadMovies extends Action {

  static type = 'MOVIES.MANY';

  errorNotice = true;

  call = async () => {
    return Movie.index();
  };

}

export default LoadMovies;
