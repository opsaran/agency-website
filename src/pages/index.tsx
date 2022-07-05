import type { NextPage } from "next";
import FifthSection from "../components/sections/fifthSection";
import { FourthSection } from "../components/sections/fourthSection";

import HeroSection from "../components/sections/heroSection";
import SecondSection from "../components/sections/secondSection";
import ServicesOffered from "../components/sections/servicesOffered";
import pages from "../constants/pages";
import MainLayout from "../components/layout/mainLayout";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <MainLayout pageData={pages!.home}>
        <HeroSection />
        <Marquee gradientColor={[0, 0, 0]} className={"marquee-wrapper"}>
          <div className="slider-wrapper">
            <Image src={"/shopify.png"} width={44} height={50} />
          </div>
          <div className="slider-wrapper">
            <Image src={"/wordpress.png"} width={50} height={50} />
          </div>
          <div className="slider-wrapper">
            <Image src={"/nextjs.png"} width={100} height={50} />
          </div>
          <div className="slider-wrapper">
            <Image src={"/webflow.png"} width={199} height={50} />
          </div>
          <div className="slider-wrapper">
            <Image src={"/reactjs.png"} width={56} height={50} />
          </div>
          <div className="slider-wrapper">
            <Image src={"/nodejs.png"} width={82} height={50} />
          </div>
          <div className="slider-wrapper">
            <Image src={"/figma.png"} width={33} height={50} />
          </div>
        </Marquee>
        <SecondSection />
        <ServicesOffered />
        <FourthSection />
        <FifthSection />
      </MainLayout>
    </>
  );
};

export default Home;
