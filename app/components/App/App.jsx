import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActions } from '../../actions';
import MainWrapper from '../MainWrapper';

function App (props) {
  return (
    <MainWrapper
      actions={ props.actions }
      children={ props.children }
      history={ props.history }
      location={ props.location }
      state={ props.state } />
  );
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

export default connect(
  function mapStateToProps(state) { return { state }; },
  function mapDispatchToProps(dispatch) { return { actions: bindActions(dispatch) }; }
)(App);
