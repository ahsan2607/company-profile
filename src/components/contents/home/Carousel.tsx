import { Typography, Box } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { carouselContent } from '../../../contents';

const renderCarousel = carouselContent.map((carouselContent) => {
  return (
    <Box
      key={carouselContent.key}
      style={{
        height: '92vh',
        minHeight: '92vh',
        backgroundColor: `${carouselContent.bg}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {' '}
      {/*forimage*/}
      <Typography variant="h2" className="title">
        {carouselContent.title}
      </Typography>
      <Typography variant="h4" className="title">
        {carouselContent.desc}
      </Typography>
    </Box>
  );
});

export const BannerCarousel = () => {
  return (
    <>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        className="carousel-container"
      >
        {renderCarousel}
      </Carousel>
    </>
  );
};
