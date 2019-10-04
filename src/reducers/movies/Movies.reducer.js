import { Reducer } from 'kawax-js';

class Movies extends Reducer {

  static initialState = [];

  state = this.matchSuccess({
    MANY: this.assign,
    LOAD: this.assignItem,
  });

}

export default Movies;
