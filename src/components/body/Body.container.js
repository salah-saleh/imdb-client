import _ from 'lodash';
import React from 'react';
import { Container } from 'kawax-js';
import PropTypes from 'prop-types';
import { Button, Badge } from 'reactstrap';
import LoadMovies from 'actions/movie/LoadMovies';
import LoadUserMovies from 'actions/user/LoadMovies';

class Body extends React.Component {

  static stateToProps = ({ select }) => ({
    movies: select('movies'),
  });

  static dispatchToProps = {
    loadMovies: LoadMovies.build(),
    loadUserMovies: LoadUserMovies.build(),
  };

  static propTypes = {
    movies: PropTypes.array,
    loadMovies: PropTypes.func.isRequired,
    loadUserMovies: PropTypes.func.isRequired,
  };

  static defaultProps = {
    movies: [],
    userMovies: [],
  };

  getError() {
    const { actions } = this.props;
    return actions.getLastError();
  }

  componentDidMount() {
    const { loadMovies } = this.props;
    loadMovies();
  }

  renderCategory(category) {
    return (
      <span key={category.id}>
        {category.name}-
      </span>
    );
  }

  renderMovies(movie) {
    return (
      <div key={movie.id}>
        <div>
          Title: {movie.title}
        </div>
        <div>
          Description: {movie.text}
        </div>
        <div>
          Score:{movie.rating.score} (#Reviews:{movie.rating.count})
        </div>
        <div>
          Categories:
          {_.map(movie.categories, (category) => this.renderCategory(category))}
        </div>
        <div> ------------------ </div>
      </div>
    );
  }

  loadUserMovies = async (event) => {
    event.preventDefault();
    const { loadUserMovies } = this.props;
    loadUserMovies();
  };

  render() {
    const { movies, userMovies } = this.props;
    const error = this.getError();

    return (
      <div>
        ALL Movies:
        <div>
          {_.map(movies, (movie) => this.renderMovies(movie))}
        </div>
        <div>
        User Movies:
          <Button onClick={this.loadUserMovies}> load user movies </Button>
          <Badge color="danger">{error.message}</Badge>
          {_.map(userMovies, (movie) => this.renderMovies(movie))}
        </div>
      </div>
    );
  }

}

export default Container(Body);
