import { Button, Typography } from "@mui/material";

const WidgetCard = (props) => {
  return (
    <Button variant="outlined">
        <Typography variant="h4">{props.title}</Typography>
        <Typography variant="h3">{props.number}</Typography>
    </Button>
  );
};

export default WidgetCard;
