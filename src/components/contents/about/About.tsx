import { Box, Container, Grid, Typography } from '@mui/material';
import { aboutContent } from '../../../contents';

const renderAbouts = aboutContent.map((aboutContent) => {
  if (parseInt(aboutContent.key) % 2 === 1) {
    return (
      <Grid
        key={aboutContent.key}
        container
        spacing={8}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingTop: '50px',
          paddingBottom: '25px',
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box sx={{ backgroundColor: `${aboutContent.pict}`, height: '350px', maxWidth: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Typography variant="h5">Who we are?</Typography>
          <Typography variant="h4">{aboutContent.title}</Typography>
          <Typography variant="body1">{aboutContent.desc}</Typography>
        </Grid>
      </Grid>
    );
  } else if (parseInt(aboutContent.key) % 2 === 0) {
    return (
      <Grid
        key={aboutContent.key}
        container
        spacing={8}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row-reverse',
          paddingTop: '50px',
          paddingBottom: '25px',
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box sx={{ backgroundColor: `${aboutContent.pict}`, height: '350px', maxWidth: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Typography variant="h5">Who we are?</Typography>
          <Typography variant="h4">{aboutContent.title}</Typography>
          <Typography variant="body1">{aboutContent.desc}</Typography>
        </Grid>
      </Grid>
    );
  }
});

export const Abouts = () => {
  return <Container>{renderAbouts}</Container>;
};
