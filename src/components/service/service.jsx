import {
  Container,
  Grid,
  Typography
} from "@mui/material";

import serviceContent from "./service.content";
import Title from '../title/title';

export default function Services() {
  const renderServices = serviceContent.map((serviceContent) => {
    return (
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4} style={{ paddingTop: "20px", paddingBottom: "20px", minHeight: "100px", width: "100%", background: `url(${serviceContent.bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
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
  return (
    <>
      <div className="py-m">
        <Title title="Our Services" />
        <Grid container justifyContent="center" alignItems="center" className="py-s">
          {renderServices}
        </Grid>
      </div>
    </>
  );
}