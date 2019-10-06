import React from 'react';
import { Container } from 'kawax-js';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, Row, Col, Badge } from 'reactstrap';
import Login from 'actions/user/Login';

class Header extends React.Component {

  static stateToProps = ({ select }) => ({
    email: select('user.email'),
  });

  static dispatchToProps = {
    login: Login.build(),
  };

  static propTypes = {
    email: PropTypes.string,
    login: PropTypes.func.isRequired,
  };

  static defaultProps = {
    email: undefined,
  };

  getError() {
    const { actions } = this.props;
    return actions.getLastError();
  }

  state = {
    email: '',
    password: '',
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { login } = this.props;
    console.log('clicked', email, password);
    login({ email, password });
  };

  renderLoginForm() {
    const error = this.getError();

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Row>
            <Col xs="auto">
              <Label for="email">Email</Label>
            </Col>
            <Col xs="auto">
              <Input
                type="email"
                name="email"
                id="email"
                onChange={(e) => this.setState({ email: e.target.value })}
                required
              />
            </Col>
            <Col xs="auto">
              <Label for="password">Password</Label>
            </Col>
            <Col xs="auto">
              <Input
                type="password"
                name="password"
                id="password"
                onChange={(e) => this.setState({ password: e.target.value })}
                required
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
            <Col xs="auto">
              <Badge color="danger">{error.message}</Badge>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    );
  }

  render() {
    const { email } = this.props;

    return (
      <div>
        {email ? `email: ${email} is signed-in` : this.renderLoginForm()}
      </div>
    );
  }

}

export default Container(Header);
