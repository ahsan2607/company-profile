import { Header, Footer } from '../components';

export type BaseLayoutProps = {
	children: React.ReactNode;
};

export const BaseLayout = (props: BaseLayoutProps) => {
	return (
		<>
			<Header />
			{props.children}
			<Footer />
		</>
	);
};
