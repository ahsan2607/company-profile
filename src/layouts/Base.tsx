import { Header, Footer } from '../components';

export interface BaseLayoutProps {
  children: React.ReactNode;
  display?: JSX.Element;
}

export const BaseLayout = (props: BaseLayoutProps) => {
  return (
    <>
      <Header />
      {props.display}
      <div style={{ minHeight: 'calc(100vh - 128px)', paddingTop: '25px', paddingBottom: '50px' }}>{props.children}</div>
      <Footer />
    </>
  );
};
