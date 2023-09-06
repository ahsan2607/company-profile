import { Box, Container, Grid, Typography } from '@mui/material';
import { aboutContent } from '../../contents';

export const About = () => {
  return (
    <Container>
      <Grid
        container
        spacing={8}
        sx={{ justifyContent: 'center', alignItems: 'center', paddingTop: '50px', paddingBottom: '25px' }}
      >
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box sx={{ backgroundColor: 'rgb(255, 0, 0)', height: '350px', maxWidth: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Typography variant="h5">Who we are?</Typography>
          <Typography variant="h4">{aboutContent.title}</Typography>
          <Typography variant="body1">{aboutContent.desc}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
