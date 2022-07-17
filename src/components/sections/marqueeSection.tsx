import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <Marquee gradientColor={[0, 0, 0]} className={"marquee-wrapper"}>
      <div className="slider-wrapper">
        <Image
          src={"/shopify.png"}
          width={44}
          height={50}
          layout="intrinsic"
          alt="shopify"
        />
      </div>
      <div className="slider-wrapper">
        <Image
          src={"/wordpress.png"}
          width={50}
          height={50}
          layout="intrinsic"
          alt="wordpress"
        />
      </div>
      <div className="slider-wrapper">
        <Image
          src={"/nextjs.png"}
          width={100}
          height={50}
          layout="intrinsic"
          alt="nextjs"
        />
      </div>
      <div className="slider-wrapper">
        <Image
          src={"/webflow.png"}
          width={199}
          height={50}
          layout="intrinsic"
          alt="webflow"
        />
      </div>
      <div className="slider-wrapper">
        <Image
          src={"/reactjs.png"}
          width={56}
          height={50}
          layout="intrinsic"
          alt="reactjs"
        />
      </div>
      <div className="slider-wrapper">
        <Image
          src={"/nodejs.png"}
          width={82}
          height={50}
          layout="intrinsic"
          alt="nodejs"
        />
      </div>
      <div className="slider-wrapper">
        <Image
          src={"/figma.png"}
          width={33}
          height={50}
          layout="intrinsic"
          alt="figma"
        />
      </div>
    </Marquee>
  );
};

export default MarqueeSection;
