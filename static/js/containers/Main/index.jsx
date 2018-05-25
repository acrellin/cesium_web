import { connect } from 'react-redux';

import * as Action from '../../actions';
import MainContent from '../../components/Main';


const mapStateToProps = function (state) {
  // This can be improved by using
  // http://redux-form.com/6.0.0-alpha.13/docs/api/FormValueSelector.md/
  const { projectSelector } = { ...state.form };
  const selectedProjectId = projectSelector ? projectSelector.project.value : "";
  let selectedProject = state.projects.projectList.filter(
    p => (p.id == selectedProjectId)
  );

  const [firstProject] = state.projects.projectList || { id: '', label: '', description: '' };

  if (selectedProject.length > 0) {
    [selectedProject] = selectedProject;
  } else {
    selectedProject = firstProject;
  }

  return {
    projects: state.projects.projectList,
    datasets: state.datasets,
    featuresets: state.featuresets,
    selectedProject,
    logoSpinAngle: state.misc.logoSpinAngle
  };
};

const mapDispatchToProps = dispatch => (
  {
    handleSubmitModelClick: (form) => {
      dispatch(Action.createModel(form));
    },
    spinLogo: () => {
      dispatch(Action.spinLogo());
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
