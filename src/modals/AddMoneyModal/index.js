import { connect } from 'react-redux';

import AddMoneyModal from './addMoneyModal';

import {
  addMoneyToProject,
} from '../../services/projectsService/actions';

function mapStateToProps(state) {
  return {
    currentProject: state.projectsReducer.currentProject,
  };
}

export default connect(mapStateToProps, {
  addMoneyToProject: (projectId, amount) => addMoneyToProject(projectId, amount),
})(AddMoneyModal);