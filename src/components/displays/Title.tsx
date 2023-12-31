import { Typography } from '@mui/material';

export interface TitleProps {
  title: string;
}

export const Title = (props: TitleProps) => {
  return (
    <Typography variant="h4" align="center" className="py-s">
      {props.title}
    </Typography>
  );
};
