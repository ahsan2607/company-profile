import { BaseLayout } from '../layouts';
import { BannerCarousel, About, Services, Programs } from '../components';

export const Home = () => {
  return (
    <>
      <BaseLayout display={<BannerCarousel />}>
        <About />
        <Services />
        <Programs />
      </BaseLayout>
    </>
  );
};
