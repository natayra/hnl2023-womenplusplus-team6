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

const ParticipantsChart = () => {
  const [selectedYear, setSelectedYear] = useState(2018); // Set an initial year

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value, 10));
  };

  // Sample data for demonstration
  const data = {
    Year: [2018, 2019, 2021, 2022, 2023],
    Applied: [70, 120, 120, 153, 622],
    Participating: [60, 80, 64, 52, 220],
  };

  const yearData = data.Year.indexOf(selectedYear);

  const labels = ["Participating", "Non-Participating"];
  const sizes = [
    data.Participating[yearData],
    data.Applied[yearData] - data.Participating[yearData],
  ];

  const customColors = ["#35A17D", "#DED4BD"];

  const plotData = [
    {
      labels: labels,
      values: sizes,
      type: "pie",
      marker: {
        colors: customColors,
      },
      title: `Year ${selectedYear} - Participating vs Non-Participating`,
      textinfo: "label",
      hole: 0.4,
      hoverinfo: "label+percent",
    },
  ];

  const customTheme = createTheme({
    components: {
      MuiSelect: {
        styleOverrides: {
          select: {
            borderRadius: 0, // Remove border radius
          },
        },
      },
    },
  });

  return (
    <Grid container flexDirection="column" pt={5} px={1} alignItems="center">
      <Typography variant="h5">Participants Chart</Typography>
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
      <Typography variant="h6">{`Year ${selectedYear} - Participants Distribution`}</Typography>
      <Plot data={plotData} layout={{ height: 500, width: 480 }} />
    </Grid>
  );
};

export default ParticipantsChart;
