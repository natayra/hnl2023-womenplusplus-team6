import { Grid, Typography, Button } from "@mui/material";

const widgetContent = [
  { title: "Applicants", number: "3355" },
  { title: "Participants", number: "1254" },
  { title: "Gender", number: "88% Women" },
  { title: "Nacionality", number: "Greek" },
  { title: "First Experience in Tech", number: "235" },
  { title: "Hours of Volunteering", number: "2005" },
  { title: "Projects", number: "30" },
];

const Widgets = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {widgetContent.map((content) => (
        <Grid item key={content.title}>
          <Button variant="card" href={`/${content.title.toLowerCase()}`}>
            <Typography>{content.title}</Typography>
            <Typography>{content.number}</Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Widgets;
