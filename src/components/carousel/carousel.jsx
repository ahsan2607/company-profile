import * as React from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

import content from './carousel.content';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function BannerCarousel() {

  const renderCarousel = content.map((content) => {
    return (
      <div style={{ height: "92vh", minHeight: "92vh", backgroundImage: `url(${content.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "92vh" }}>
          <Grid container alignItems="flex-end" xs={8} sm={8} md={7} lg={7} xl={6}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card variant="contained" style={{ width: "100%", backgroundColor: "transparent" }}>
                <CardContent>
                  <Typography variant="h2" className="title">
                    {content.title}
                  </Typography>
                  <Typography variant="h4" className="title">
                    {content.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  });

  return (
    <>
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} className="carousel-container">
        {renderCarousel}
      </Carousel>
    </>
  );
}