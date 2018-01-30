import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';


const FeatureImportancesBarchart = props => {
  const sorted_features = Object.keys(props.data).sort(
    (a, b) => props.data[b] - props.data[a]).slice(0, 15);
  const values = sorted_features.map(
    feature => props.data[feature].toFixed(3));
  const data = {
    labels: sorted_features,
    datasets: [
      {
        label: 'Feature Importance',
        backgroundColor: '#2222ff',
        hoverBackgroundColor: '#5555ff',
        data: values
      }
    ]
  };

  return (
    <div style={{ height: 300, width: 600 }}>
      <HorizontalBar data={data} />
    </div>
  );
};

export default FeatureImportancesBarchart;
