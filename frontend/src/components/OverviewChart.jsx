import React, { useEffect } from 'react';
import { Grid,  Typography } from '@mui/material';
import Plotly from 'plotly.js-dist';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);

const OverviewChart = () => {
  const data = {
    Year: [2018, 2019, 2023],
    Participating: [60, 80, 120],
    Applied: [70, 120, 180],
    'Number of Projects': [12, 16, 24],
    'Hours dedicated to the event': [1447, 1941, 2861],
  };

  const overview = {
    Year: data.Year,
    Participating: data.Participating,
    Applied: data.Applied,
    'Number of Projects': data['Number of Projects'],
    'Hours dedicated to the event': data['Hours dedicated to the event'],
  };

  const selected_years = [2018, 2019, 2023];

  const overview_melted = Object.keys(overview).reduce((acc, variable) => {
    if (variable !== 'Year') {
      const variableData = overview[variable].map((value, index) => ({
        Year: data.Year[index],
        Variable: variable,
        Value: value,
      }));
      return [...acc, ...variableData];
    }
    return acc;
  }, []);

  const colorMapping = {
    Participating: '#DED4BD',
    Applied: '#82C498',
    'Number of Projects': '#35A17D',
    'Hours dedicated to the event': '#1E5C47',
  };

  const plotData = Object.keys(overview).map((variable) => {
    if (variable !== 'Year') {
      return {
        x: overview_melted.filter((item) => item.Variable === variable).map((item) => item.Year),
        y: overview_melted.filter((item) => item.Variable === variable).map((item) => item.Value),
        type: 'scatter',
        mode: 'lines',
        fill: 'tozeroy', // Fill area under the line
        name: variable,
        line: { color: colorMapping[variable] },
      };
    }
    return null;
  });

  const filteredPlotData = plotData.filter((data) => data !== null);

  const layout = {
    title: '<b>Overview of Participation Over Years</b>',
    xaxis: {
      title: '<b>Year</b>',
    },
    yaxis: {
      title: '<b>Count</b>',
    },
    font: {
      color: '#0D291E',
    },
    margin: {
      l: 50,
      r: 50,
      t: 50,
      b: 50,
    },
    showlegend: true,
  };

  useEffect(() => {
    Plotly.newPlot('overview-chart', filteredPlotData, layout);
  }, []);

  return (
    <Grid container flexDirection="column" p={10} sx={{width: "60vw"}}>
      <Typography variant="h6" align="center" gutterBottom>
        Overview of Participation Over Years
      </Typography>
      <div id="overview-chart" />
    </Grid>
  );
};

export default OverviewChart;
