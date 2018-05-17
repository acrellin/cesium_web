import { connect } from 'react-redux';

import * as Action from '../../actions';
import ModelsTable from '../../components/ModelsTable';


const mtMapStateToProps = (state, ownProps) => (
  {
    models: state.models.filter(
      model => (model.project_id === ownProps.selectedProject.id)
    )
  }
);

export default connect(mtMapStateToProps)(ModelsTable);
