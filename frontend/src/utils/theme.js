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
        body: { backgroundColor: "#f9f9f9" },
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
          textAlign: "center",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          border: "none",
          backgroundColor: theme.palette.common.white,
          minHeight: "200px",
          minWidth: "400px",
          boxShadow: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
          "&:hover": {
            backgroundColor: "white"
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
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          boxShadow: "none",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 0
        },
      },
    }
  },
});
