import Head from "next/head";
import * as React from "react";
import { PageInterface } from "../../constants/pages";
import FooterSection from "../common/footerSection";
import { NavBar } from "../common/navBar";

interface PropsInterface {
  children: any;
  pageData?: PageInterface;
}

const MainLayout: React.FunctionComponent<PropsInterface> = (props) => {
  const { children, pageData, ...otherProps } = props;
  return (
    <>
      {pageData && (
        <Head>
          <title>{pageData.title ? pageData.title : "Boomlabs"}</title>
          {pageData.description && (
            <>
              <meta name="description" content={pageData.description}></meta>
              <meta
                property="og:description"
                content={pageData.description}
              ></meta>
              <meta
                property="twitter:description"
                content={pageData.description}
              ></meta>
            </>
          )}
          {pageData.title && (
            <>
              <meta property="og:title" content={pageData.title}></meta>
              <meta property="twitter:title" content={pageData.title}></meta>
            </>
          )}

          {pageData.ogType && (
            <meta property="og:type" content={pageData.ogType}></meta>
          )}
          {pageData.link && (
            <>
              <meta property="og:url" content={pageData.link}></meta>
              <link rel="canonical" href={pageData.link}></link>
            </>
          )}
          <meta
            name="image"
            property="og:image"
            content={
              pageData.ogImage
                ? pageData.ogImage
                : "https://www.boomlabs.agency/ogp.png"
            }
          ></meta>
          <meta
            name="twitter:image"
            content={
              pageData.ogImage
                ? pageData.ogImage
                : "https://www.boomlabs.agency/ogp.png"
            }
          ></meta>
          <meta property="og:image:height" content="630" />
          <meta property="og:image:width" content="1200" />
        </Head>
      )}
      <div style={{ background: "black" }}>
        <NavBar />
        {children}
        <FooterSection />
      </div>
    </>
  );
};

export default MainLayout;
