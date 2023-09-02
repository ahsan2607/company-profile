import a1 from '../../images/banner/b1.jpg';
import aboutContent from './about.content';

import {
  Box,
  Container,
  Grid,
  Typography
} from "@mui/material";

export default function AboutUs() {
  return (
    <>
      <Container className="py-l">
        <Box>
          <Grid container justifyContent="center" alignItems="center" spacing={8}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Box component="img" src={a1} style={{ maxWidth: "100%" }} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="h5">
                Who we are?
              </Typography>
              <Typography variant="h4">
                {aboutContent.title}
              </Typography>
              <Typography variant="body">
                {aboutContent.desc}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}