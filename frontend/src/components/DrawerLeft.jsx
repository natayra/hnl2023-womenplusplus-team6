import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Grid, Drawer, List, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Widgets from "./Widgets";
import Logo from "../assets/logo.png";
import { useState } from "react";
import Footer from "./Footer";
import OverviewChart from "./GenderChart";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const events = [
  "All",
  "Hack'n'Lead",
  "Scholarships",
  "Deploy(impact)",
  "Mental Health Webnars",
];
export default function DrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [eventSelected, setEventSelected] = useState("All");
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickEvent = (text) => {
    setEventSelected(text);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", paddingBottom: "20vh" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} width="auto" height="40px" alt="logo" />
          <Typography variant="h4" textAlign="center" ml={2}>
            ImpactLens Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            backgroundColor: "primary.main",
            color: "common.white",
          }}
        >
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              color: "common.white",
            }}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {events.map((text) => (
            <ListItem
              className="border"
              key={text}
              disablePadding
              onClick={() => handleClickEvent(text)}
              sx={{
                borderBottom: `1px solid ${theme.palette.secondary.main}`,
                borderLeft:
                  eventSelected === text
                    ? `0.5rem solid ${theme.palette.tertiary.main}`
                    : "none",
                "&:hover": {
                  borderLeft: `0.5rem solid ${theme.palette.tertiary.main}`,
                },
              }}
            >
              <ListItemButton sx={{ paddingY: 2 }}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Widgets eventSelected={eventSelected} />
        <Footer />
      </Main>
    </Box>
  );
}
