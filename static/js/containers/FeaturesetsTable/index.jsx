import { connect } from 'react-redux';

import * as Action from '../../actions';
import FeaturesetsTable from '../../components/FeaturesetsTable';


const ftMapStateToProps = (state, ownProps) => (
  {
    featuresets: state.featuresets.filter(
      fs => (fs.project_id === ownProps.selectedProject.id)
    )
  }
);

export default connect(ftMapStateToProps)(FeaturesetsTable);
