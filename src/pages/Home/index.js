import { connect } from 'react-redux';

import Home from './home';

import {
  changeCurrentProject,
} from '../../services/projectsService/actions';

function mapStateToProps(state) {
  return {
    isLoading: state.applicationReducer.isLoading,
    projects: state.projectsReducer.projects,
    currentProject: state.projectsReducer.currentProject,
  };
}

export default connect(mapStateToProps, {
  changeCurrentProject: currentProject => changeCurrentProject(currentProject),
})(Home);