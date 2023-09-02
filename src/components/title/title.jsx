import { Typography } from "@mui/material";
import PropTypes from 'prop-types';

export default function Title(props) {
  const { title } = props;
  return (
    <>
      <Typography variant="h4" align="center" className="py-s">
        {title}
      </Typography>
    </>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}