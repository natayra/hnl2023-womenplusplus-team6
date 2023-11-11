import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  return <div>{params.id}</div>;
};

export default Details;
