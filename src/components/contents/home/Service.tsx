import { Box, Container, Grid, Typography } from '@mui/material';

import { serviceContent } from '../../../contents';
import { Title } from '../..';

const renderServices = serviceContent.map((serviceContent) => {
  return (
    <Grid
      key={serviceContent.key}
      item
      xs={12}
      sm={6}
      md={6}
      lg={4}
      xl={4}
      sx={{
        paddingY: '20px',
        minHeight: '100px',
        width: '100%',
        backgroundColor: `${serviceContent.bg}`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <Typography variant="h6" align="center" color="white">
          {serviceContent.title}
        </Typography>
        <Typography variant="body1" align="center" color="white">
          {serviceContent.desc}
        </Typography>
      </Container>
    </Grid>
  );
});

export const Services = () => {
  return (
    <Box sx={{ paddingTop: '50px', paddingBottom: '25px' }}>
      <Title title="Our Services" />
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center', paddingTop: '25px' }}>
        {renderServices}
      </Grid>
    </Box>
  );
};
