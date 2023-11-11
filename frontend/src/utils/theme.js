import { createTheme } from "@mui/material";

export let theme = createTheme({
  palette: {
    primary: {
      main: "#0D291E",
    },
    secondary: {
      main: "#DED4BD",
    },
    tertiary: {
      main: "#35A17D",
    },
  },
  shape: {
    borderRadius: 25,
  },
  typography: {
    fontFamily: "Inter, 'Helvetica', 'Arial', sans-serif",
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: "3.2rem",
    },
    h2: {
      fontSize: "2.8rem",
    },
    h3: {
      fontSize: "2.3rem",
    },
    h4: {
      fontSize: "1.8rem",
    },
    h5: {
      fontSize: "1.3rem",
    },
    h6: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          border: "none",
          paddingLeft: 25,
          paddingRight: 25,
          fontSize: "1rem",
          fontWeight: 500,
          color: theme.palette.common.black,
          textTransform: "uppercase",
          [`&.MuiButton-textPrimary:hover`]: {
            color: theme.palette.grey[600],
            boxShadow: "none",
          },
        },
        contained: {
          color: theme.palette.common.black,
          backgroundColor: theme.palette.tertiary.main,
          border: "none",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
          textTransform: "none",
          fontSize: "1rem",
          [`&.MuiButton-containedPrimary:hover`]: {
            color: theme.palette.common.black,
            backgroundColor: theme.palette.secondary.main,
            boxShadow: "none",
          },
        },
        card: {
          textTransform: "none",
          border: "1px solid black",
          padding: 30,
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
          "&:hover": {
            backgroundColor: theme.palette.grey[300],
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 20,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          paddingTop: 10,
          paddingBottom: 10,
          paddingRight: 10,
          paddingLeft: 10,
          width: "100%",
          borderRadius: 15,
          border: `1px solid ${theme.palette.primary.main}`,
          "&:hover": {
            border: `1px solid ${theme.palette.tertiary.main}`,
          },
          "&.Mui-focused": {
            border: `1px solid ${theme.palette.primary.main}`,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.white,
          color: theme.palette.common.black,
          boxShadow: "none",
        },
      },
    },
  },
});
