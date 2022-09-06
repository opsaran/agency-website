import type { NextPage } from "next";
import FifthSection from "../components/sections/fifthSection";
import { FourthSection } from "../components/sections/fourthSection";
import HeroSection from "../components/sections/heroSection";
import MarqueeSection from "../components/sections/marqueeSection";
import SecondSection from "../components/sections/secondSection";
import ServicesOffered from "../components/sections/servicesOffered";
import pages from "../constants/pages";
import MainLayout from "../components/layout/mainLayout";
import Head from "next/head";
import TestimonialSection from "../components/sections/testimonialSection";

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
        <MarqueeSection />
        <SecondSection />
        <ServicesOffered />
        <TestimonialSection />
        <FourthSection />
        <FifthSection />
      </MainLayout>
    </>
  );
};

export default Home;
