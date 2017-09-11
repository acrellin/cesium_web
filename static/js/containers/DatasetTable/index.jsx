import { connect } from 'react-redux';

import DatasetTable from '../../components/DatasetTable';


const mapStateToProps = (state, ownProps) => (
  {
    datasets: state.datasets.filter(dataset => (
      dataset.project_id === ownProps.selectedProject.id
    ))
  }
);

export default connect(mapStateToProps)(DatasetTable);
