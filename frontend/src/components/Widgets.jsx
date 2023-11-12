import { Grid, Typography, Button, Box, Chip, Stack } from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import WcIcon from "@mui/icons-material/Wc";
import FlagIcon from "@mui/icons-material/Flag";
import Filter1Icon from "@mui/icons-material/Filter1";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import initialData from "../assets/data.json";
import { useEffect, useState } from "react";
import GenderChart from "./GenderChart";
import NationalityChart from "./NationalityChart";
import ParticipantsChart from "./ParticipantsChart";

const Widgets = ({ eventSelected }) => {
  const ev =
    eventSelected === "Hack'n'Lead"
      ? "hnl"
      : eventSelected === "Deploy(impact)"
      ? "deployimpact"
      : "";
  const [data, setData] = useState(initialData);
  useEffect(() => {
    if (ev === "hnl") {
      setData(initialData.filter((item) => item["Event"] === "hnl"));
    } else if (ev === "deployimpact") {
      setData(initialData.filter((item) => item["Event"] === "deployimpact"));
    } else {
      setData(initialData);
    }
  }, [eventSelected]);

  useEffect(() => {
    setApplicants(data.filter((item) => item["Applied"] == 1).length);
    setParticipants(data.filter((item) => item["Participating"] == 1).length);
    setWomen(data.filter((item) => item["Gender"] == 1).length);
    setMen(data.filter((item) => item["Gender"] == 2).length);
    setOther(data.filter((item) => item["Gender"] == 0).length);
    setFirstTime(
      data.filter(
        (item) => item["How many w++ events attended previously?"] == 0
      ).length
    );
    setHours(data.map((item) => Number(item["Hours dedicated to the event"])));
  }, [data]);

  useEffect(() => {}, []);
  const [applicants, setApplicants] = useState(0);
  const [participants, setParticipants] = useState(0);
  const [women, setWomen] = useState(0);
  const [other, setOther] = useState(0);
  const [men, setMen] = useState(0);
  const nationalities = [];
  nationalities.push(data.map((item) => item["Nationality"]));
  const nationalitiesUnique = nationalities[0].filter(function (
    item,
    pos,
    self
  ) {
    return self.indexOf(item) == pos;
  });
  const [firstTime, setFirstTime] = useState(0);
  const [hours, setHours] = useState([]);
  let totalHours = 0;
  const projects = [];
  projects.push(data.map((item) => item["Member of which Team"]));
  const projectsUnique = projects[0].filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
  });

  for (let i = 0; i < hours.length; i++) {
    totalHours += hours[i];
  }

  const widgetContent = [
    {
      title: "Gender",
      number: (
        <Stack>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
            }}
          >
            {`${Math.floor((women * 100) / applicants)}% Women`}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
            }}
          >
            {`${Math.floor((men * 100) / applicants)}% Men`}
          </Typography>
        </Stack>
      ),
      image: <WcIcon fontSize="large" />,
      chart: <GenderChart />,
    },
    {
      title: "Nacionality",
      number: nationalitiesUnique.map((item) => (
        <Chip
          key={item}
          label={item}
          variant="outlined"
          sx={{ marginX: 0.5, fontSize: "1rem", padding: 1 }}
        />
      )),
      image: <FlagIcon fontSize="large" />,
      chart: <NationalityChart />,
    },
    {
      title: "Participants",
      number: participants,
      image: <Diversity1Icon fontSize="large" />,
      chart: <ParticipantsChart />,
    },
    {
      title: "Applicants",
      number: applicants,
      image: <FeedIcon fontSize="large" />,
    },

    {
      title: "First Experience in Tech",
      number: firstTime,
      image: <Filter1Icon fontSize="large" />,
    },
    {
      title: "Hours of Volunteering",
      number: totalHours,
      image: <WatchLaterIcon fontSize="large" />,
    },
    {
      title: "Projects",
      number: projectsUnique.length - 1,
      image: <AccountTreeIcon fontSize="large" />,
    },
  ];

  return (
    <Grid container mt={1} spacing={3} justifyContent="center">
      {widgetContent.map((content) => (
        <Grid item key={content.title}>
          <Button
            variant="card"
            sx={{
              padding: content.chart ? 0 : 3,
            }}
          >
            {!content.chart && (
              <>
                <Box>{content.image}</Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {content.number}
                </Typography>
                <Typography
                  variant="h6"
                  color="tertiary.main"
                  sx={{
                    fontWeight: 800,
                  }}
                >
                  {content.title}
                </Typography>
              </>
            )}
            {content.chart}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Widgets;
