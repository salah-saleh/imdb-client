import BaseMovie from 'resources/movie/BaseMovie';

class Movie extends BaseMovie {

  index = this.define({
    method: 'GET',
  });

  get = this.define({
    method: 'GET',
    path: ({ movieId }) => `/${movieId}`,
  });

}

export default Movie.export();
