import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "react-loading-skeleton/dist/skeleton.css";
import Announce from "../components/announce";
import Footer from "../components/footer";
import Header from "../components/header";
import { getAnnounceRes, getFooterRes, getHeaderRes } from "../helper";
import "../styles/style.css";
import {
  Announce as AnnounceType,
  Footer as FooterType,
  Header as HeaderType,
} from "../typescript/types";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp(props: {
  Component: Function;
  pageProps: any;
  announce: AnnounceType;
  header: HeaderType;
  footer: FooterType;
}) {
  const { Component, pageProps, announce, header, footer } = props;

  return (
    <>
      <Head>
        <meta
          name="application-name"
          content="Contentstack-Nextjs-Starter-App"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1"
        />
        <meta name="theme-color" content="#317EFB" />
        <title>Contentstack-Nextjs-Starter-App</title>
      </Head>
      <Announce announce={announce} />
      <Header header={header} />
      <Component {...pageProps} />
      <Footer footer={footer} />
    </>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  const header = await getHeaderRes();
  const announce = await getAnnounceRes();
  const footer = await getFooterRes();

  return { ...appProps, announce, header, footer };
};

export default MyApp;
