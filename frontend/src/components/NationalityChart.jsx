import React, { useState } from "react";
import Plotly from "plotly.js-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import {
  Select,
  MenuItem,
  Typography,
  Container,
  Paper,
  ThemeProvider,
  createTheme,
  Grid,
} from "@mui/material";

const Plot = createPlotlyComponent(Plotly);

const customColors = ["#35A17D", "#82C498", "#DED4BD", "#1E5C47", "#0D291E"];

const NationalityChart = () => {
  const [selectedYear, setSelectedYear] = useState(2018); // Set an initial year

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value, 10));
  };

  // Sample data for demonstration
  const data = {
    Year: [2018, 2019, 2021, 2022, 2023],
    Switzerland: [46, 78, 83, 137, 512],
    France: [4, 16, 10, 0, 31],
    Germany: [7, 12, 11, 4, 41],
    Italy: [6, 9, 8, 4, 11],
    UK: [0, 0, 3, 0, 0],
  };

  const nationalityData = {
    Switzerland: data.Switzerland[data.Year.indexOf(selectedYear)],
    France: data.France[data.Year.indexOf(selectedYear)],
    Germany: data.Germany[data.Year.indexOf(selectedYear)],
    Italy: data.Italy[data.Year.indexOf(selectedYear)],
    UK: data.UK[data.Year.indexOf(selectedYear)],
  };

  const plotData = [
    {
      labels: Object.keys(nationalityData),
      values: Object.values(nationalityData),
      type: "pie",
      marker: {
        colors: customColors,
      },
      title: `Donut Chart of Nationalities for Year ${selectedYear}`,
      hole: 0.4,
      textinfo: "label",
      hoverinfo: "label+percent",
    },
  ];

  return (
    <Grid container flexDirection="column" pt={5} px={1} alignItems="center">
      <Typography variant="h5">Nationality Distribution Chart</Typography>
      <Select
        value={selectedYear}
        onChange={handleYearChange}
        sx={{ padding: 0, marginY: 1.1, width: "30%" }}
      >
        {data.Year.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
      <Typography variant="h6">{`Year ${selectedYear} - Nationality Distribution`}</Typography>
      <Plot data={plotData} layout={{ height: 500, width: 480 }} />
    </Grid>
  );
};

export default NationalityChart;
