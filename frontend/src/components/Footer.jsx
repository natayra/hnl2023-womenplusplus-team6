import { BottomNavigation, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <BottomNavigation
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, paddingTop: 1, backgroundColor: "#f9f9f9" }}
      elevation={3}
    >
      <Typography variant="h6" textAlign="center">
        Copyright (c) {new Date().getFullYear()} women++ Team6.
      </Typography>
    </BottomNavigation>
  );
};

export default Footer;
