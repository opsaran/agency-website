import type { NextPage } from "next";
import FifthSection from "../components/sections/fifthSection";

import HeroSection from "../components/sections/heroSection";
import MarqueeSection from "../components/sections/marqueeSection";
import SecondSection from "../components/sections/secondSection";

import pages from "../constants/pages";
import MainLayout from "../components/layout/mainLayout";
import Head from "next/head";
import TestimonialSection from "../components/sections/testimonialSection";
import DesignSection from "../components/sections/designsSection";

import NumberSection1 from "../components/sections/numberSection1";

import ServicesSection from "../components/sections/servicesSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="nLvBaDiX6HB5nf7-QUZ5QeVKYVCp_Htf3gxYqDBjBas"
        />
      </Head>
      <MainLayout pageData={pages!.home}>
        <HeroSection />

        <NumberSection1 />
        <SecondSection />
        <MarqueeSection />
        <ServicesSection />
        <DesignSection />
        <TestimonialSection />

        <FifthSection />
      </MainLayout>
    </>
  );
};

export default Home;
