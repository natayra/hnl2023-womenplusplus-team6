import React, { useState } from "react";
import Plotly from "plotly.js-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import {
  Select,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";

const Plot = createPlotlyComponent(Plotly);

const customColors = ["#35A17D", "#82C498", "#DED4BD"];

const GenderChart = () => {
  const [selectedYear, setSelectedYear] = useState(2018); // Set an initial year

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value, 10));
  };

  // Sample data for demonstration
  const data = {
    Year: [2018, 2019, 2021, 2022, 2023],
    0: [2, 2, 2, 4, 10],
    1: [63, 111, 99, 135, 562],
    2: [5, 7, 19, 14, 50],
  };

  const genderData = {
    Male: data[2][data.Year.indexOf(selectedYear)],
    Female: data[1][data.Year.indexOf(selectedYear)],
    Other: data[0][data.Year.indexOf(selectedYear)],
  };

  const plotData = [
    {
      labels: Object.keys(genderData),
      values: Object.values(genderData),
      type: "pie",
      marker: {
        colors: customColors,
      },
      textinfo: "label",
      pull: [0, 0.1, 0],
      hoverinfo: "label",
    },
  ];

  return (
    <Grid container flexDirection="column" pt={5} px={1} alignItems="center">
      <Typography variant="h5">Gender Distribution Chart</Typography>
      <Select
        value={selectedYear}
        onChange={handleYearChange}
        sx={{ padding: 0, marginTop: 1.1, width: "30%", height: "32px" }}
      >
        {data.Year.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
      <Plot data={plotData} layout={{ height: 400, width: 400 }} />



    </Grid>
  );
};

export default GenderChart;
