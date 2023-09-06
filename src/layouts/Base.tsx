import { Header, Footer } from '../components';

export interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout = (props: BaseLayoutProps) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
