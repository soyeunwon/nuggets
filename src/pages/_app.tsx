import "@/styles/globals.css";
import StoreProvider from "@/store/storeProvider";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
const AppContainer = ({ Component, pageProps }) => {
  const { initialZustandState = {}, dehydratedState = {} } = pageProps;

  return (
    <StoreProvider initialZustandState={initialZustandState}>
      <App Component={Component} pageProps={pageProps} />
    </StoreProvider>
  );
};

AppContainer.getInitialProps = async ({ Component, ctx }) => {
  const initialZustandState = {} as any;

  const pageGetInitialProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return {
    pageProps: {
      initialZustandState,
      ...pageGetInitialProps,
    },
  };
};

export default AppContainer;
