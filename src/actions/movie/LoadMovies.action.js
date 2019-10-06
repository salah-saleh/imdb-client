import { Action } from 'kawax-js';
import Movie from 'resources/movie/Movie';

class LoadMovies extends Action {

  static type = 'MOVIES.MANY';

  errorNotice = true;

  call = async () => Movie.index();

}

export default LoadMovies;
